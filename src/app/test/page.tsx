"use client";
import ContextMenu from "@/components/Common/ContextMenu";
import React, { useState } from "react";

function Test() {
  const [file, setFile] = useState<File>();
  const [url, setUrl] = useState("");
  const [uploading, setUploading] = useState(false);

  const uploadFile = async () => {
    try {
      if (!file) {
        alert("No file selected");
        return;
      }

      setUploading(true);
      const data = new FormData();
      data.set("file", file);
      const uploadRequest = await fetch("/api/files", {
        method: "POST",
        body: data,
      });
      const signedUrl = await uploadRequest.json();
      setUrl(signedUrl);
      setUploading(false);
    } catch (e) {
      console.log(e);
      setUploading(false);
      alert("Trouble uploading file");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFile(e.target?.files?.[0]);
  };

  return (
    <div className="flex p-8">
      <ContextMenu content={"Este es el menu de contexto"}>
        <div className="bg-green-600 text-white p-2 rounded-xl">Test</div>
      </ContextMenu>
      <div className="border-2 border-green-500">
        <input type="file" onChange={handleChange} />
        <button type="button" disabled={uploading} onClick={uploadFile}>
          {uploading ? "Uploading..." : "Upload"}
        </button>
      </div>
      {url && <img src={url} />}
    </div>
  );
}

export default Test;
