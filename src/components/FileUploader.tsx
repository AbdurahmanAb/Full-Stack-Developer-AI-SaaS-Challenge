"use client";
import useUpload, { StatusText } from "@/hooks/useUpload";
import {
  CheckCircle,
  CircleArrowDown,
  HammerIcon,
  RocketIcon,
  SaveIcon,
} from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useCallback, useEffect } from "react";
import { useDropzone } from "react-dropzone";

const FileUploader = () => {
  const { fileState, handleUpload } = useUpload();
  const { progress, status, error, fileId } = fileState;
  const router = useRouter();

  useEffect(() => {
    if (fileId) {
      router.push(`/dashboard/files/${fileId}`);
    }
  }, [fileId, router]);
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

  const uploadProgress = progress != null && progress >= 0 && progress <= 100;
  const StatusIcon: {
    [key in StatusText]: JSX.Element;
  } = {
    [StatusText.Uploading]: (
      <RocketIcon className="animate-spin  text-indigo-600 h-20 w-20" />
    ),
    [StatusText.Uploaded]: (
      <CheckCircle className="animate-bounce text-indigo-600 h-20 w-20" />
    ),
    [StatusText.Saving]: (
      <SaveIcon className="animate-bounce text-indigo-600 h-20 w-20" />
    ),
    [StatusText.Generating]: (
      <HammerIcon className="animate-bounce text-indigo-600 h-20 w-20" />
    ),
  };
  return (
    <div className="flex-1 flex-col gap-3 flex items-center justify-center max-w-7xl w-[90%]">
      {uploadProgress && (
        <div className="flex flex-col justify-center items-center">
          <div
            className={`radial-progress bg-indigo-300 border-indigo-600 text-white border-4 ${
              progress == 100 && "hidden"
            }`}
            style={{
              //   @ts-ignore
              "--value": progress,
              "--size": "12rem",
              "--thickness": "1.2rem",
            }}
            role="progressbar"
          >
            {progress}%
          </div>
          {StatusIcon[status]}

          <p className="text-indigo-600 animate-pulse">{status? String(status):""}</p>
        </div>
      )}
      <div
        {...getRootProps()}
        className={`p-8 w-[90%]   border-indigo-600 text-indigo-600 border-2 border-dashed rounded-lg h-96 flex flex-col gap-5 items-center justify-center 
         ${isDragActive ? "bg-indigo-200" : "bg-indigo-100"} ${
          uploadProgress && "hidden"
        }
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
