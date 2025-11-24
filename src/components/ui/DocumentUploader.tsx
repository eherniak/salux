"use client";

import { UploadButton } from "@uploadthing/react";
import type { AppFileRouter } from "@/app/api/uploadthing/core";

export function DocumentUploader() {
    return (
        <div className="p-6 rounded-xl border bg-white shadow-sm">
            <h3 className="text-lg font-medium mb-3 text-slate-800">
                Upload a Document
            </h3>

            <UploadButton<AppFileRouter, "documentUploader">
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

