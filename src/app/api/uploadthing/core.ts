import { createUploadthing, type FileRouter } from "uploadthing/next";
const f = createUploadthing();

export const uploadRouter = {
    documentUploader: f({ pdf: { maxFileSize: "8MB" } })
        .onUploadComplete(({ file }) => {
            console.log("Uploaded:", file.url);
        }),
} satisfies FileRouter;

export type AppFileRouter = typeof uploadRouter;
