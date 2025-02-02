from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from tablib import Dataset
from import_export.resources import ModelResource

class BaseImportView(APIView):
    resource_class = None

    def post(self, request):
        file = request.FILES.get('file')
        if not file:
            return Response({"error": "No file provided."}, status=status.HTTP_400_BAD_REQUEST)
        
        dataset = Dataset()
        try:
            imported_data = dataset.load(file.read(), format='xlsx')
        except Exception as e:
            return Response({"error": f"Failed to load data: {str(e)}"}, status=status.HTTP_400_BAD_REQUEST)
        
        resource = self.resource_class()
        result = resource.import_data(dataset, dry_run=True)

        if not result.has_errors():
            resource.import_data(dataset, dry_run=False)
            return Response({"success": "Data imported successfully."}, status=status.HTTP_201_CREATED)
        else:
            errors = []
            # Loop through the result's row errors
            for row_number, row_errors in result.row_errors():
                row_data = dataset.dict[row_number] if row_number < len(dataset.dict) else {}
                row_error_details = {
                    "row": row_number + 1,  # Row number in human-friendly format (1-indexed)
                    "errors": []
                }
                for error in row_errors:
                    error_data = {
                        "field": getattr(error, 'field_name', 'Unknown'),  # Safely get the field_name or default to 'Unknown'
                        "value": row_data.get(getattr(error, 'field_name', ''), "N/A"),  # Safely access the field's value
                        "error": str(error.error)  # Error message
                    }
                    row_error_details["errors"].append(error_data)
                errors.append(row_error_details)
                print(errors)
            return Response({"errors": errors}, status=status.HTTP_400_BAD_REQUEST)
