"use client"
import { IMPORT_ADMISSION } from "@/lib/routePath";
import ImportData from "../../_component/ImportData";

const ImportPage = () => {
  const handleSuccess = (data:any) => {
    console.log("Import successful:", data);
    // Handle success (e.g., update UI, notify user, etc.)
  };

  const handleError = (errorData:any) => {
    console.error("Import error:", errorData);
    // Handle error (e.g., show detailed error messages, etc.)
  };

  return (
    <div>
      <h1>Import Data</h1>
      <ImportData
        apiUrl={IMPORT_ADMISSION}
        onSuccess={handleSuccess}
        onError={handleError}
      />
    </div>
  );
};

export default ImportPage;
