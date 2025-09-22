"use client";
import React, { useState } from "react";
import Modal from "../Common/modal";
import ToolTip from "../Common/tooltip";
import Image from "next/image";
import settings from "@/assets/settings.png";
import { useRouter } from "next/navigation";
import { isEmpty } from "@/lib/validations";
import axios from "axios";
import toast from "react-hot-toast";
import closed from "@/assets/icons8-ojo-cerrado-50.png";
import opened from "@/assets/icons8-visible-50.png";

function AskForPassword() {
  const [open, setOpen] = useState(false);

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  const router = useRouter();

  async function handleOkay() {
    try {
      setLoading(true);

      if (isEmpty(password.trim()))
        throw new Error("Complete todos los campos.");

      const data = {
        password: password.trim(),
      };

      const response = await axios.post("/api/verifyPassword", data);
      if (response.status === 200) router.push("/userconfig");
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
      <ToolTip message="Configuracíon">
        <button onClick={() => setOpen(true)} className="hover:opacity-60">
          <Image className="w-6" src={settings} alt="Cerrar Sesión" />
        </button>
      </ToolTip>
      {open && (
        <Modal setOpen={setOpen}>
          <div className="flex flex-col gap-1">
            <h1 className="font-bold text-xl">
              Para continuar ingrese su contraseña
            </h1>
            <div className="w-full relative items-center justify-center">
              <input
                type={showPassword ? "text" : "password"}
                className="bg-zinc-200 p-2 rounded-xl w-full pr-14"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                onClick={() => setShowPassword(!showPassword)}
                className="absolute z-50 right-2 top-1/2 opacity-60 hover:opacity-100 -translate-y-1/2"
              >
                <Image
                  src={showPassword ? closed : opened}
                  alt={"Ver contraseña"}
                  className="w-6"
                  width={"20"}
                  height={"20"}
                />
              </button>
            </div>

            <div className="flex flex-row gap-2 mt-2 justify-end">
              <button
                onClick={handleOkay}
                disabled={loading}
                className={`py-1 px-3 bg-green-600 text-white rounded-xl ${
                  loading
                    ? "opacity-60"
                    : "hover:bg-green-700 active:bg-green-800"
                }`}
              >
                {loading ? "Cargando..." : "Continuar"}
              </button>
              <button
                onClick={() => setOpen(false)}
                disabled={loading}
                className={`py-1 px-3  rounded-xl bg-zinc-300 hover:bg-zinc-400 active:bg-zinc-500`}
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

export default AskForPassword;
