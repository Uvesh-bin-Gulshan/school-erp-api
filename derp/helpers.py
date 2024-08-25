from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from tablib import Dataset
from import_export.resources import ModelResource

class BaseImportView(APIView):
    resource_class = None  

    def post(self, request, format=None):
        if self.resource_class is None or not issubclass(self.resource_class, ModelResource):
            return Response({"error": "Invalid resource class."}, status=status.HTTP_400_BAD_REQUEST)
        
        file = request.FILES.get('file')
        if not file:
            return Response({"error": "No file provided."}, status=status.HTTP_400_BAD_REQUEST)

        dataset = Dataset()
        imported_data = dataset.load(file.read(), format='xlsx')  # Adapt the format as needed

        resource = self.resource_class()
        result = resource.import_data(dataset, dry_run=True)  # Dry run to check for errors

        if not result.has_errors():
            resource.import_data(dataset, dry_run=False)
            return Response({"success": "Data imported successfully."}, status=status.HTTP_201_CREATED)
        else:
            return Response({"errors": result.row_errors()}, status=status.HTTP_400_BAD_REQUEST)
