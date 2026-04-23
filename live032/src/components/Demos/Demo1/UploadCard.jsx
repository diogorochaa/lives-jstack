import { Button } from "@/components/Button";
import { Progress } from "@/components/Progress";
import { Trash2Icon } from "lucide-react";

export function UploadCard({ upload, onStartUpload, onRemoveFile }) {
  return (
    <div
      key={upload.id}
      className="flex border p-2 px-3 rounded-md items-center justify-between gap-4"
    >
      <div className="flex-1">
        <span className="font-medium tracking-tight text-sm">
          {upload.fileName}
        </span>
        <Progress value={upload.progress} className="mt-1 h-2" />
      </div>

      <div className="flex gap-2">
        <Button
          variant="outline"
          size="sm"
          className="h-8"
          onClick={() => onStartUpload(upload.id)}
        >
          Upload
        </Button>

        <Button
          variant="destructive"
          size="sm"
          className="h-8"
          onClick={() => onRemoveFile(upload.id)}
        >
          <Trash2Icon className="size-4" />
        </Button>
      </div>
    </div>
  );
}
