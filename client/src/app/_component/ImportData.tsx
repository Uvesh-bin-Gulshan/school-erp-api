"use client";
import { useState } from 'react';
import CustomButton from './CustomButton';

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
    <div className='justify-center flex mt-2'>
      <input className="bg-gray-100 rounded-r-lg " type="file" onChange={handleFileChange} />
      <CustomButton text='Save' className='' onClick={handleImport} disabled={loading}>
        {loading ? "Importing..." : "Import"}
      </CustomButton>
     
    </div>
  );
};

export default ImportComponent;
