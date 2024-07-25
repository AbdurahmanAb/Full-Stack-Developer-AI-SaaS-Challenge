"use client";
import useUpload from "@/hooks/useUpload";
import { CircleArrowDown, RocketIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useCallback, useEffect } from "react";
import { useDropzone } from "react-dropzone";

const FileUploader = () => {
  const { fileState, handleUpload } = useUpload();
  const { progress, status, error, fileId } = fileState;
  const router = useRouter();

  useEffect(()=>{
    if(fileId){
      router.push(`/files/${fileId}`);
    }
  },[fileId,router])
  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    // Do something with the files
    const file = acceptedFiles[0];
    if (file) {
      await handleUpload(file);
      console.log(file);
    } else {
    }
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    maxFiles: 1,
    accept: {
      "aaplication/pdf": [".pdf"],
    },
  });
  return (
    <div className="flex-1  flex items-center justify-center max-w-7xl w-[90%]">
      <div
        {...getRootProps()}
        className={`p-8 w-[90%]  border-indigo-600 text-indigo-600 border-2 border-dashed rounded-lg h-96 flex flex-col gap-5 items-center justify-center 
         ${isDragActive ? "bg-indigo-200" : "bg-indigo-100"}
        `}
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <>
            <RocketIcon className="animate-ping h-20 w-20" />
            <p>Drop the files here ...</p>
          </>
        ) : (
          <>
            <CircleArrowDown className="animate-bounce h-20 w-20" />
            <p className="text-center">
              Drag and drop some files here, or click to select files
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default FileUploader;
