"use client";
import { Tag } from "@/app/generated/prisma";
import React from "react";
import CreateTag from "./CreateTag";
import EditTag from "./EditTag";

function TagDashBoard({
  tags,
  boardId,
  reset,
  role,
}: {
  tags: Tag[];
  boardId: number;
  reset: () => void;
  role: any;
}) {
  return (
    <div className="bg-zinc-800 rounded-xl p-3 flex flex-col gap-1.5">
      <h1 className="text-center text-lg font-bold mb-1">Etiquetas</h1>
      {tags.map((t: Tag) => (
        <EditTag boardId={boardId} reload={reset} tag={t} />
      ))}
      {role !== "Lector" && <CreateTag boardId={boardId} reload={reset} />}
    </div>
  );
}

export default TagDashBoard;
