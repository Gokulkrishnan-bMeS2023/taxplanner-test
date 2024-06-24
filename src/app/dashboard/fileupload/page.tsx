"use client";
import { useState } from "react";

const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleUpload = async () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append("file", selectedFile);

      console.log(formData);
      
      try {
        const response = await fetch(
          "https://taxplanner-test-json.onrender.com/dsc",
          {
            method: "POST",
            body: formData,
          }
        );
        const data = await response.json();
        console.log("Response:", data);
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  return (
    <div style={{ padding: "200px" }}>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default FileUpload;
