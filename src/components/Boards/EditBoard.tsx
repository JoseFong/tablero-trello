"use client";
import React, { useEffect, useState } from "react";
import Modal from "../Common/modal";
import { HexColorPicker } from "react-colorful";
import Image from "next/image";
import edit from "@/assets/icons8-crear-nuevo-100.png";
import toast from "react-hot-toast";
import axios from "axios";
import { useRouter } from "next/navigation";
import { isEmpty } from "@/lib/validations";

function EditBoard({ board ,reload}: { board: any,reload:()=>void }) {
  const [editBoard, setEditBoard] = useState(false);

  const [loading, setLoading] = useState(false);

  const [name, setName] = useState(board.name);
  const [color, setColor] = useState(board.Color);

  const router = useRouter();

  function reset() {
    setName(board.name);
    setColor(board.Color);
  }

  useEffect(() => {
    reset();
  }, [editBoard]);

  async function handleEdit() {
    try {
      setLoading(true);

      if (isEmpty(name.trim()) || isEmpty(color.trim()))
        throw new Error("Complete todos los campos.");

      const data = {
        name: name.trim(),
        color: color.trim(),
      };

      const response = await axios.patch("/api/boards/" + board.id, data);
      reload()
      setEditBoard(false)
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
        onClick={() => setEditBoard(true)}
        className="flex items-center justify-center hover:opacity-60"
      >
        <Image src={edit} alt="Editar tablero" className="w-8" />
      </button>
      {editBoard && (
        <Modal setOpen={setEditBoard}>
          <div className="flex flex-col gap-1">
            <h1 className="text-xl font-bold">Editar Tablero</h1>
            <label>Nombre</label>
            <input
              type="Text"
              placeholder="Nombre"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="p-2 bg-zinc-200 shadow-xl rounded-xl"
            />
            <div className="flex flex-row gap-2 mt-2 mb-1 items-center">
              <label>Color</label>
              <div
                className="flex h-8 w-full rounded-xl"
                style={{ backgroundColor: color }}
              ></div>
            </div>

            <HexColorPicker
              color={color}
              onChange={setColor}
              style={{ width: "100%" }}
            />
          </div>
          <div className="flex flex-row gap-2 mt-2 justify-end">
            <button
              onClick={handleEdit}
              disabled={loading}
              className={`py-1 px-3 bg-green-600 text-white rounded-xl ${
                loading
                  ? "opacity-60"
                  : "hover:bg-green-700 active:bg-green-800"
              }`}
            >
              {loading ? "Editando..." : "Editar"}
            </button>
            <button
              onClick={() => setEditBoard(false)}
              disabled={loading}
              className={`py-1 px-3  rounded-xl bg-zinc-300 hover:bg-zinc-400 active:bg-zinc-500`}
            >
              Cancelar
            </button>
          </div>
        </Modal>
      )}
    </>
  );
}

export default EditBoard;
