"use client";
import { useState } from 'react';
import { routes } from "@/lib/routePath";
import ImportComponent from '@/components/custom-components/ImportData';

const ImportPage = () => {
  const [errorLogs, setErrorLogs] = useState<any[]>([]);

  const handleSuccess = (data: any) => {
    console.log("Import successful:", data);
    setErrorLogs([]); // Clear previous errors if any
  };

  const handleError = (errorData: any) => {
    console.error("Import error:", errorData);
    setErrorLogs(errorData.errors || [{ row: 0, errors: [{ field: "Unknown", value: "N/A", error: "An unknown error occurred." }] }]);
  };

  return (
    <div>
      <h1>Import Data</h1>
      <ImportComponent
        apiUrl={routes.IMPORT_ADMISSION}
        onSuccess={handleSuccess}
        onError={handleError}
      />
      {errorLogs.length > 0 && (
        <div>
          <h3>Import Errors:</h3>
          <ul className='grid grid-cols-3 p-4 gap-4'>
            {errorLogs.map((log, index) => (
              <li className='bg-red-200 p-2 rounded-md' key={index}>
                <div>Row {log.row}:</div>
                <ul className="pl-4 list-disc">
                  {log.errors.map((err: any, errIndex: number) => (
                    <li key={errIndex}>
                      Field "{err.field}" with value "{err.value}": {err.error}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ImportPage;
