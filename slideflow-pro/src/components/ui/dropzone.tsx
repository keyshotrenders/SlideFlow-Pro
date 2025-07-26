"use client";

import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

export function Dropzone({ onDrop }: { onDrop: (acceptedFiles: File[]) => void }) {
  const onDropCallback = useCallback(
    (acceptedFiles: File[]) => {
      onDrop(acceptedFiles);
    },
    [onDrop]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: onDropCallback,
    accept: {
      "image/*": [],
    },
  });

  return (
    <div
      {...getRootProps()}
      className={`flex items-center justify-center w-full h-64 border-2 border-dashed rounded-lg cursor-pointer ${
        isDragActive ? "border-primary" : "border-gray-300 dark:border-gray-600"
      }`}
    >
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the files here ...</p>
      ) : (
        <p>Drag 'n' drop some files here, or click to select files</p>
      )}
    </div>
  );
}