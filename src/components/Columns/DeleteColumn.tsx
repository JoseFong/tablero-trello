import React, { useState } from "react";
import Modal from "../Common/modal";
import axios from "axios";
import toast from "react-hot-toast";

function DeleteColumn({
  reload,
  c,
  closeParent,
}: {
  reload: () => void;
  c: any;
  closeParent: () => void;
}) {
  const [open, setOpen] = useState(false);

  const [loadingDelete, setLoadingDelete] = useState(false);

  async function handleEliminar() {
    try {
      setLoadingDelete(true);
      const response = await axios.delete("/api/columns/" + c.id);
      setLoadingDelete(false);
      setOpen(false);
      closeParent();
      reload();
    } catch (e: any) {
      if (e.response && e.response.data && e.response.data.message) {
        toast.error(e.response.data.message);
        setLoadingDelete(false);
      } else {
        toast.error(e.message);
        setLoadingDelete(false);
      }
    }
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        disabled={loadingDelete}
        className={`bg-red-600 px-3 py-1 rounded-xl text-white ${
          loadingDelete ? "opacity-60" : "hover:bg-red-700 active:bg-red-800"
        }`}
      >
        {loadingDelete ? "Eliminando..." : "Eliminar"}
      </button>
      {open && (
        <Modal setOpen={setOpen}>
          <div className="flex flex-col gap-1">
            <h1 className="font-bold text-xl">
              ¿Está seguro que desea eliminar la columna "{c.name}"?
            </h1>
            <p className="text-red-600">
              Se eliminarán todas las tarjetas que estén dentro de la columna.
            </p>
            <p className="text-red-600">No se puede deshacer esta accíón.</p>
            <div className="flex flex-row gap-2 justify-end">
              <button
                onClick={handleEliminar}
                disabled={loadingDelete}
                className={`bg-red-600 px-3 py-1 rounded-xl text-white ${
                  loadingDelete
                    ? "opacity-60"
                    : "hover:bg-red-700 active:bg-red-800"
                }`}
              >
                {loadingDelete ? "Eliminando..." : "Eliminar"}
              </button>
              <button
                onClick={() => setOpen(false)}
                className={`bg-zinc-300 px-3 py-1 rounded-xl 
                }`}
              >
                Cerrar
              </button>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
}

export default DeleteColumn;
