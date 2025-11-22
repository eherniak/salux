"use client";
import { UploadButton } from "@uploadthing/react";
import type { AppFileRouter } from "@/app/api/uploadthing/core";

export function DocumentUploader() {
    return (
        <div className="p-4 border rounded-xl bg-white">
            <UploadButton<AppFileRouter>
                endpoint="documentUploader"
                onClientUploadComplete={(res) => {
                    alert("File uploaded: " + res[0].url);
                }}
                onUploadError={(error) => {
                    alert(`Upload failed: ${error.message}`);
                }}
            />
        </div>
    );
}
