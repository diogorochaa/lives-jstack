import { memo } from "react";
import { UploadCard } from "./UploadCard";

const MemoUploadCard = memo(UploadCard);

export function UploadsList({ uploads, onRemoveFile, onStartUpload }) {
  return (
    <div className="space-y-4">
      {uploads.map(upload => (
        <MemoUploadCard
          key={upload.id}
          upload={upload}
          onRemoveFile={onRemoveFile}
          onStartUpload={onStartUpload}
        />
      ))}
    </div>
  );
}
