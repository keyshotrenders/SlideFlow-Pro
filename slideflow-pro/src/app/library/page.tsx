"use client";

import { useState } from "react";
import { Dropzone } from "@/components/ui/dropzone";

export default function LibraryPage() {
  const [files, setFiles] = useState<File[]>([]);

  const onDrop = (acceptedFiles: File[]) => {
    setFiles((prevFiles) => [...prevFiles, ...acceptedFiles]);
  };

  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold">Library</h1>
      <p className="text-muted-foreground">Image and media management.</p>
      <div className="mt-8">
        <Dropzone onDrop={onDrop} />
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-bold">Uploaded Files</h2>
        <ul>
          {files.map((file, i) => (
            <li key={i}>
              {file.name} - {file.size} bytes
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}