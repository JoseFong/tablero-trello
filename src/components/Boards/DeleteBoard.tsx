"use client";
import React, { useState } from "react";
import Modal from "../Common/modal";
import Image from "next/image";
import trash from "@/assets/tash.png";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

function DeleteBoard({ board }: { board: any }) {
  const [deleteBoard, setDeleteBoard] = useState(false);

  const [loading, setLoading] = useState(false);

  const router = useRouter();

  async function handleDelete() {
    try {
      setLoading(true);
      const response = await axios.delete("/api/boards/" + board.id);
      if (response.status === 200) router.push("/");
    } catch (e: any) {
      if (e.response && e.response.data && e.response.data.message) {
        toast.error(e.response.data.message);
        setLoading(false);
      } else {
        setLoading(false);
        toast.error(e.message);
      }
    }
  }

  return (
    <>
      <button
        className="p-1 rounded-xl hover:opacity-60"
        onClick={() => setDeleteBoard(true)}
      >
        <Image src={trash} alt="Eliminar tablero" className="w-8" />
      </button>
      {deleteBoard && (
        <Modal setOpen={setDeleteBoard}>
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-xl">
              ¿Está seguro que desea eliminar el tablero "{board.name}"?
            </h1>
            <p className="text-red-600">
              ¡Esta acción es permanente y se borrará todo el contenido del
              tablero!
            </p>
            <div className="flex flex-row gap-2 bottom-0 justify-end">
              <button
                onClick={handleDelete}
                disabled={loading}
                className={`bg-red-600 rounded-xl px-3 py-2  text-white ${
                  loading ? "opacity-60" : "hover:bg-red-700 active:bg-red-800"
                }`}
              >
                {loading ? "Eliminando..." : "Eliminar"}
              </button>
              <button
                disabled={loading}
                onClick={() => setDeleteBoard(false)}
                className="bg-zinc-300 rounded-xl px-3 py-2 hover:bg-zinc-400 active:bg-zinc-500"
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

export default DeleteBoard;
