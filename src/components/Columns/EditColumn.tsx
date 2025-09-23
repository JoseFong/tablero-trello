"use client";
import React, { useEffect, useState } from "react";
import Modal from "../Common/modal";
import axios from "axios";
import toast from "react-hot-toast";
import DeleteColumn from "./DeleteColumn";
import { isEmpty } from "@/lib/validations";

function EditColumn({ c, reload }: { c: any; reload: () => void }) {
  const [open, setOpen] = useState(false);

  const [name, setName] = useState(c.name);

  const initName = c.name;

  const [loading, setLoading] = useState(false);

  function reset() {
    setName(c.name);
  }

  function closeThis() {
    setOpen(false);
  }

  async function handleEditar() {
    try {
      setLoading(true);

      if (isEmpty(name)) throw new Error("Complete todos los campos.");

      const data = {
        name: name,
      };

      const response = await axios.patch("/api/columns/" + c.id, data);
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

  useEffect(() => {
    reset();
  }, [open]);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="hover:opacity-60 bg-zinc-600 w-60 h-14 rounded-xl flex items-center justify-center shrink-0"
      >
        {c.name}
      </button>
      {open && (
        <Modal setOpen={setOpen}>
          <input
            className="bg-zinc-200 p-2 rounded-xl"
            value={name}
            placeholder="Nombre"
            onChange={(e) => setName(e.target.value)}
          />
          <div className="flex flex-row gap-2 mt-2">
            <button
              onClick={handleEditar}
              disabled={loading || name === initName}
              className={`bg-green-600 px-3 py-1 rounded-xl text-white ${
                loading || name === initName
                  ? "opacity-60"
                  : "hover:bg-green-700 active:bg-green-800"
              }`}
            >
              {loading ? "Editando..." : "Editar"}
            </button>
            <DeleteColumn reload={reload} c={c} closeParent={closeThis} />
            <button
              onClick={() => setOpen(false)}
              disabled={loading}
              className={`bg-zinc-300 px-3 py-1 rounded-xl  ${
                loading ? "opacity-60" : "hover:bg-zinc-400 active:bg-zinc-500"
              }`}
            >
              Cerrar
            </button>
          </div>
        </Modal>
      )}
      {}
    </>
  );
}

export default EditColumn;
