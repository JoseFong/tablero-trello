"use client";
import React, { useState } from "react";
import Modal from "../Common/modal";
import { Tag } from "@/app/generated/prisma";
import axios from "axios";
import toast from "react-hot-toast";

function DeleteTag({
  tag,
  reload,
  closeParent,
}: {
  tag: Tag;
  reload: () => void;
  closeParent: () => void;
}) {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  async function handleEliminar() {
    try {
      setLoading(true);
      const response: any = await axios.delete("/api/tags/" + tag.id);

      setLoading(false);
      setOpen(false);
      closeParent();
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

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        disabled={loading}
        className={`bg-red-600 text-white rounded-xl px-3 py-1 ${
          loading ? "opacity-60" : "hover:bg-red-700"
        }`}
      >
        {loading ? "Eliminando" : "Eliminar"}
      </button>
      {open && (
        <Modal setOpen={setOpen}>
          <div className="flex flex-col gap-1">
            <h1>¿Está seguro que desea eliminar la etiqueta "{tag.name}"?</h1>
            <p className="text-red-600">Esta acción no se puede deshacer</p>
            <div className="flex flex-row gap-1">
              <button
                onClick={handleEliminar}
                disabled={loading}
                className={`bg-red-600 text-white rounded-xl px-3 py-1 ${
                  loading ? "opacity-60" : "hover:bg-red-700"
                }`}
              >
                {loading ? "Eliminando" : "Eliminar"}
              </button>
              <button
                onClick={() => setOpen(false)}
                disabled={loading}
                className={`bg-zinc-400 rounded-xl px-3 py-1 ${
                  loading ? "opacity-60" : "hover:bg-zinc-500"
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

export default DeleteTag;
