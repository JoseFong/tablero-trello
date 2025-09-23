"use client";
import React, { useState } from "react";
import Modal from "../Common/modal";
import Image from "next/image";
import plus from "@/assets/mas.png";
import { isEmpty } from "@/lib/validations";
import axios from "axios";
import toast from "react-hot-toast";

function CreateColumn({
  boardId,
  reload,
}: {
  boardId: number;
  reload: () => void;
}) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  function reset() {
    setName("");
  }

  async function handleAceptar() {
    try {
      setLoading(true);

      if (isEmpty(name)) throw new Error("Complete todos los campos.");

      const data = {
        name: name.trim(),
        boardId: boardId,
      };

      const response = await axios.post("/api/columns", data);
      setLoading(false);
      setOpen(false);
      reset();
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
        className="flex items-center justify-center border-4 border-white border-dashed h-14 w-14 shrink-0 rounded-xl hover:opacity-100 opacity-60 hover:cursor-pointer"
      >
        <Image src={plus} alt="Crear columna" className="w-5" />
      </button>
      {open && (
        <Modal setOpen={setOpen}>
          <div className="flex flex-col gap-1">
            <h1 className="font-bold text-xl">Crear columna</h1>
            <input
              type="text"
              className="bg-zinc-200 p-2 rounded-xl"
              placeholder="Nombre de la columna"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <div className="flex flex-row gap-2 mt-3 w-full justify-end">
              <button
                onClick={handleAceptar}
                disabled={loading}
                className={`bg-green-600 px-3 py-1 rounded-xl text-white ${
                  loading
                    ? "opacity-60"
                    : "hover:bg-green-700 active:bg-green-800"
                }`}
              >
                {loading ? "Cargando..." : "Aceptar"}
              </button>
              <button
                onClick={() => setOpen(false)}
                disabled={loading}
                className={`bg-zinc-300 px-3 py-1 rounded-xl  ${
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

export default CreateColumn;
