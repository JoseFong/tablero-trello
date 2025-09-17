"use client";
import { isEmpty } from "@/lib/validations";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";
import Image from "next/image";
import portada from "@/assets/main.webp";
import opened from "@/assets/icons8-visible-50.png";
import closed from "@/assets/icons8-ojo-cerrado-50.png";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();

  async function login() {
    try {
      setLoading(true);
      if (isEmpty(username) || isEmpty(password))
        throw new Error("Complete todos los campos");

      const data = {
        username: username.trim(),
        password: password.trim(),
      };
      const response = await axios.post("/api/login", data);
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
    <div className="text-white bg-zinc-900 h-screen w-screen flex items-center justify-center">
      <div className="bg-zinc-800 rounded-xl w-1/2 h-5/6 shadow-xl flex flex-row p-8 gap-5">
        <Image
          className="bg-green-700 rounded-xl w-1/2"
          src={portada}
          alt={"Foto de Portada"}
        />
        <div className="flex flex-col items-center w-1/2 justify-center gap-1">
          <h1 className="text-3xl text-center">
            Mantente al tanto<br></br>de tus proyectos
          </h1>
          <h1 className="mb-5">Inicia sesión para empezar</h1>
          <input
            type="text"
            placeholder="Usuario o Correo"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="px-3 py-4 rounded-xl shadow-xl mb-2 w-5/6 text-black"
          />
          <div className="w-5/6 relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="px-3 py-4 pr-12 rounded-xl shadow-xl text-black w-full"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-10"
            >
              <Image
                src={showPassword ? opened : closed}
                alt={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
                width={20}
                height={20}
                className="opacity-60 hover:opacity-100 transition-opacity"
              />
            </button>
          </div>

          <button
            disabled={loading}
            className={`bg-green-600 w-5/6 py-2 rounded-xl shadow-xl mt-3 mb-1 ${
              loading ? "opacity-50" : "hover:bg-green-700 active:bg-green-800"
            } `}
            onClick={login}
          >
            Iniciar sesión
          </button>
          <div className="flex flex-row gap-1 text-sm">
            ¿No tienes una cuenta?
            <button
              className="underline hover:text-green-500 transition-all"
              onClick={() => {
                router.push("/register");
              }}
            >
              Registrate aquí
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
