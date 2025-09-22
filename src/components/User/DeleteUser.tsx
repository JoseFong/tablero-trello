"use client";
import React, { useState } from "react";
import Modal from "../Common/modal";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import axios from "axios";

function DeleteUser({ userId }: { userId: string }) {
  const [open, setOpen] = useState(false);

  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleDeleteUser() {
    try {
      setLoading(true);
      const response = await axios.delete("/api/users/" + userId);
      setLoading(false);
      if (response.status === 200) router.push("/login");
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
      <div>
        <button
          onClick={() => setOpen(true)}
          className="underline text-red-600"
        >
          Eliminar cuenta
        </button>
      </div>
      {open && (
        <Modal setOpen={setOpen}>
          <div className="flex flex-col gap-1">
            <h1 className="font-bold text-xl">
              ¿Está seguro que desea eliminar su usuario?
            </h1>
            <p className="text-red-600">
              ¡Se eliminarán todos los tableros de los que sea dueño. Esta
              acción no puede deshacerse!
            </p>
            <div className="flex flex-row gap-2 justify-end">
              <button
                disabled={loading}
                onClick={handleDeleteUser}
                className={`bg-red-600 text-white px-3 py-1 rounded-xl ${
                  loading ? "opacity-60" : "hover:bg-red-700 active:bg-red-800"
                }`}
              >
                {loading ? "Eliminando..." : "Eliminar"}
              </button>
              <button
                disabled={loading}
                onClick={() => setOpen(false)}
                className={`bg-zinc-300  px-3 py-1 rounded-xl ${
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

export default DeleteUser;
