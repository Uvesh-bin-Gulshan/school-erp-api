"use client";
import { useState } from 'react';

const ImportComponent = ({ apiUrl, onSuccess, onError }: any) => {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<any[]>([]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
  };

  const handleImport = async () => {
    if (!file) {
      alert("Please select a file to upload.");
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    setLoading(true);
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        if (data.errors && Array.isArray(data.errors)) {
          setErrors(data.errors);
          alert("Import completed with errors. Check details below.");
        } else {
          if (onSuccess) {
            onSuccess(data);
          }
          alert("File imported successfully!");
        }
      } else {
        const errorData = await response.json();
        if (onError) {
          onError(errorData);
        }
        alert("Import failed. Please check the console for details.");
      }
    } catch (error) {
      console.error('Error during import:', error);
      alert("An error occurred during import.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleImport} disabled={loading}>
        {loading ? "Importing..." : "Import"}
      </button>
     
    </div>
  );
};

export default ImportComponent;
