"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import plus from "@/assets/mas.png";
import Modal from "../Common/modal";
import toast from "react-hot-toast";
import axios from "axios";
import { isEmpty } from "@/lib/validations";
import { HexColorPicker } from "react-colorful";
import { Tag } from "@/app/generated/prisma";
import DeleteTag from "./DeleteTag";

function EditTag({
  boardId,
  reload,
  tag,
}: {
  boardId: number;
  reload: () => void;
  tag: Tag;
}) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState(tag.name);
  const [loading, setLoading] = useState(false);
  const [color, setColor] = useState(tag.color);

  function reset() {
    setName(tag.name);
    setColor(tag.color);
  }

  useEffect(() => {
    reset();
  }, [open]);

  async function fetchCreateTag() {
    try {
      setLoading(true);
      if (isEmpty(name)) throw new Error("Ingrese el nombre de la etiqueta.");

      const data = {
        boardId: boardId,
        color: color,
        name: name.trim(),
      };

      const response: any = await axios.patch("/api/tags/" + tag.id, data);

      setLoading(false);
      setOpen(false);
      reload();
    } catch (e: any) {
      if (e.response && e.response.data && e.response.data.message) {
        toast.error(e.response.data.message);
        setLoading(false);
      } else {
        toast.error(e.message);
        setLoading(false);
      }
    }
  }

  function close() {
    setOpen(false);
  }

  return (
    <>
      <div
        onClick={() => setOpen(true)}
        className="py-1 px-2 rounded-xl hover:opacity-60 hover:cursor-pointer"
        style={{ backgroundColor: tag.color }}
      >
        {tag.name}
      </div>
      {open && (
        <Modal setOpen={setOpen}>
          <div className="flex flex-col gap-1">
            <h1>Editar etiqueta</h1>
            <input
              placeholder="Nombre"
              className="p-2 rounded-xl bg-zinc-200"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <div className="flex flex-row gap-1 items-center m-2">
              <label>Color</label>
              <div
                className="h-8 w-full rounded-xl"
                style={{ backgroundColor: color }}
              ></div>
            </div>
            <HexColorPicker
              color={color}
              onChange={setColor}
              style={{ width: "100%" }}
            />
            <div className="flex flex-row gap-2 justify-end">
              <button
                onClick={fetchCreateTag}
                disabled={loading}
                className={`px-3 py-1 rounded-xl text-white bg-green-600 ${
                  loading
                    ? "opacity-60"
                    : "hover:bg-green-700 active:bg-green-800"
                }`}
              >
                {loading ? "Editando..." : "Editar"}
              </button>
              <DeleteTag tag={tag} reload={reload} closeParent={close} />
              <button
                onClick={() => setOpen(false)}
                disabled={loading}
                className={`px-3 py-1 rounded-xl bg-zinc-300 ${
                  loading
                    ? "opacity-60"
                    : "hover:bg-zinc-400 active:bg-zinc-500"
                }`}
              >
                Cancelar
              </button>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
}

export default EditTag;
