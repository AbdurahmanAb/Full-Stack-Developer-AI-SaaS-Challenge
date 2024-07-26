"use client";

import { db, storage } from "@/firebase";
import { useUser } from "@clerk/nextjs";
import { randomUUID } from "crypto";
import { create } from "domain";
import { doc, setDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useRouter } from "next/router";
import { useState } from "react";
import {v4 as uuidv4 } from 'uuid';

export enum StatusText {
  Uploading = "Uploading file....",
  Uploaded = "The file uploaded successfully",
  Saving = "Saving file to the database ...",
  Generating = "Generating AI Embedings, This will only take a few seconds....",
}

export type Status = StatusText[keyof StatusText];

function useUpload() {
  const [fileState, setFileState] = useState<{
    progress: number | null;
    fileId: string | null;
    status: Status | null;
    error: string | null;
  }>({
    progress: null,
    fileId: null,
    status: null,
    error: null,
  });

  const { user } = useUser();

  const handleUpload = async (file: File) => {
    if (!file || !user) return;
    const fileIdtoUpload = uuidv4();

    const storageRef = ref(storage, `users/${user.id}/${fileIdtoUpload}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const percent = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        console.log("Upload is " + percent + "% done");
        
        setFileState((prevState) => ({
          ...prevState,
          progress: percent,
          status: StatusText.Uploading,
        }));
      },
      (error) => {
        setFileState((prevState) => ({ ...prevState, error: error.message }));
      },
      async () => {
        setFileState((prevState) => ({ ...prevState, status: StatusText.Uploaded }));
        console.log("status ", fileState);

        const downloadUrl = await getDownloadURL(uploadTask.snapshot.ref);
        setFileState((prevState) => ({ ...prevState, status: StatusText.Saving }));
        console.log("sec", fileState);

        await setDoc(doc(db, "users", user.id, "files", fileIdtoUpload), {
          name: file.name,
          size: file.size,
          type: file.type,
          downloadUrl: downloadUrl,
          ref: uploadTask.snapshot.ref.fullPath,
          createdAt: new Date().toISOString(),
        });

        setFileState((prevState) => ({
          ...prevState,
          status: StatusText.Generating,
          fileId: fileIdtoUpload,
        }));
        console.log("third", fileState);

        console.log("File uploaded successfully");
      }
    );
  };

  return { fileState, handleUpload };
}

export default useUpload;
