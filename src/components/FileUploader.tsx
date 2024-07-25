import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

const FileUploader = () => {
  const onDrop = useCallback((acceptedFiles:File[]) => {
    // Do something with the files
    console.log(acceptedFiles);
    
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  return (
    <div {...getRootProps()} className="p-8 border-indigo-600 text-indigo-600 border-2 border-dashed rounded-lg h-96 flex items-center">
      <input {...getInputProps()} />
      {
        isDragActive ?
          <p>Drop the files here ...</p> :
          <p>Drag  drop some files here, or click to select files</p>
      }
    </div>
  )
};

export default FileUploader;
