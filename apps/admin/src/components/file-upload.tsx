"use client";
import { UploadDropzone } from "apps/admin/src/components/ui/upload-dropzone";

export function FileUpload() {
  return (
    <UploadDropzone
      route="demo"
      accept="image/*"
      onUploadComplete={({ files }) => {
        alert(`Uploaded ${files.length} files`);
      }}
    />
  );
}
