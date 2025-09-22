"use client";
import React, { useState } from "react";
import Image from "next/image";
import plus from "@/assets/mas.png";
import Modal from "../Common/modal";
import { HexColorPicker } from "react-colorful";
import toast from "react-hot-toast";
import axios from "axios";
import { isEmpty } from "@/lib/validations";

function CreateBoard({ reload }: { reload: () => void }) {
  const [createBoard, setCreateBoard] = useState(false);
  const [loading, setLoading] = useState(false);

  const [name, setName] = useState("");
  const [color, setColor] = useState("#ffffff");

  function reset() {
    setName("");
    setColor("#ffffff");
  }

  async function fetchCreateBoard() {
    try {
      setLoading(true);

      if (isEmpty(name)) throw new Error("Ingrese un nombre para el tablero.");
      if (isEmpty(color))
        throw new Error("Seleccione un color para el tablero.");

      const data = {
        name: name.trim(),
        color: color.trim(),
      };

      const response = await axios.post("/api/boards", data);
      setLoading(false);
      setCreateBoard(false);
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
      {createBoard && (
        <Modal setOpen={setCreateBoard}>
          <div className="flex flex-col gap-2 w-full">
            <h1 className="font-bold text-2xl">Crear tablero</h1>
            <input
              placeholder="Nombre del tablero"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-zinc-200 p-2 rounded-md shadow-md"
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
          <button
            disabled={loading}
            onClick={fetchCreateBoard}
            className={`bg-green-600 text-white mt-3 rounded-xl p-2  transition-colors ${
              loading ? "opacity-60" : "hover:bg-green-700 active:bg-green-800"
            }`}
          >
            {loading ? "Creando..." : "Crear Tablero"}
          </button>
        </Modal>
      )}
      <button
        disabled={loading}
        onClick={() => setCreateBoard(true)}
        className={`flex-shrink-0 w-60 h-48 border-white border-dashed border-4 flex flex-col items-center justify-center opacity-60 hover:cursor-pointer hover:opacity-100 transition-opacity transition-transform hover:scale-105 ${
          loading && "opacity-60"
        }`}
      >
        <Image src={plus} alt={"Crear tablero"} className="w-12" />
        {loading ? "Creando..." : "Crear tablero"}
      </button>
    </>
  );
}

export default CreateBoard;
