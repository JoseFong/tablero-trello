import React, { useState } from "react";
import Image from "next/image";
import plus from "@/assets/mas.png";
import Modal from "../Common/modal";
import { HexColorPicker } from "react-colorful";

function CreateCard() {
  const [open, setOpen] = useState(false);

  const [status, setStatus] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [color, setColor] = useState("#ffffff");

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="border-2 border-dashed border-white opacity-60 hover:opacity-100 rounded-xl flex items-center justify-center"
      >
        <Image src={plus} alt="Crear columna" className="w-8" />
      </button>
      {open && (
        <Modal setOpen={setOpen}>
          <div className="flex flex-col gap-1 max-h-96 overflow-y-scroll pr-2">
            <h1 className="text-xl font-bold">Crear Tarjeta</h1>
            <label>Nombre</label>
            <input
              placeholder="Nombre"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="p-1 bg-zinc-200 rounded-xl px-2"
            />
            <label>Contenido (opcional)</label>
            <textarea
              placeholder="Contenido"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="p-1 bg-zinc-200 rounded-xl px-2"
            />
            <div className="flex flex-row gap-4">
              <div className="flex flex-col gap-1">
                <label>Fecha de inicio (opcional)</label>
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="p-1 bg-zinc-200 rounded-xl px-2"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label>Fecha de fin (opcional)</label>
                <input
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  className="p-1 bg-zinc-200 rounded-xl px-2"
                />
              </div>
            </div>
            <label>Estado (opcional)</label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="p-1 bg-zinc-200 rounded-xl px-2"
            >
              <option value="">Seleccionar estado</option>
              <option value="Por empezar">Por empezar</option>
              <option value="Empezado">Empezado</option>
              <option value="Terminado">Terminado</option>
            </select>
            <div className="flex flex-row gap-2 mt-4">
              <label>Color</label>
              <div
                className="h-5 rounded-xl w-full"
                style={{ backgroundColor: color }}
              ></div>
            </div>
            <HexColorPicker
              color={color}
              onChange={setColor}
              style={{ width: "100%" }}
            />
          </div>
        </Modal>
      )}
    </>
  );
}

export default CreateCard;
