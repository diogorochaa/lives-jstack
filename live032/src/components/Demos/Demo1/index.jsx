import { useState } from "react";

import { Header } from "./Header";
import { LibrarySelect } from "./LibrarySelect";
import { UploadsList } from "./UploadsList";

export function Demo1() {
  const [uploads, setUploads] = useState([]);
  const [library, setLibrary] = useState('');

  const pendingUploads = uploads.filter(upload => upload.progress < 100);

  function handleAddFile() {
    const id = window.crypto.randomUUID();

    setUploads(prevState => (
      prevState.concat({
        id,
        fileName: `${id}.png`,
        progress: 0,
      })
    ));
  }

  function handleStartUpload(uploadId) {
    setUploads(prevState => prevState.map(upload => {
      if (upload.id === uploadId) {
        const progress = Math.min(upload.progress + 10, 100);

        return {
          ...upload,
          progress,
        };
      }

      return upload;
    }));
  }

  function handleRemoveFile(uploadId) {
    setUploads(prevState => (
      prevState.filter(upload => upload.id !== uploadId
    )));
  }

  return (
    <div className="w-full max-w-xl mx-auto my-10 p-4">
      <Header onAddFile={handleAddFile} />

      <div className="mt-8">
        <div className="mb-4">
          <LibrarySelect library={library} setLibrary={setLibrary} />
        </div>

        <UploadsList
          uploads={pendingUploads}
          onStartUpload={handleStartUpload}
          onRemoveFile={handleRemoveFile}
        />
      </div>
    </div>
  );
}
