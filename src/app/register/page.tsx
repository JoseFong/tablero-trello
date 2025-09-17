"use client";
import { isEmpty, validEmail, validPassword } from "@/lib/validations";
import React, { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { redirect, useRouter } from "next/navigation";
import Image from "next/image";
import portada from "@/assets/main.webp";
import tick from "@/assets/icons8-marca-de-verificación-24.png";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);

  const router = useRouter();

  async function register() {
    try {
      setLoading(true);
      if (
        isEmpty(username) ||
        isEmpty(email) ||
        isEmpty(password) ||
        isEmpty(confirmPassword)
      )
        throw new Error("Complete todos los campos");

      if (!validEmail(email.trim()))
        throw new Error("Ingrese un correo válido.");

      if (!validPassword(password.trim()))
        throw new Error(
          "Su contraseña debe de contener:\n-8 Caracteres\n-1 Mayúscula\n-1 Minúscula\n-1 Número"
        );

      if (password.trim() !== confirmPassword.trim())
        throw new Error("Sus contraseñas no coinciden");

      const data = {
        username: username.trim(),
        password: password.trim(),
        email: email.trim(),
      };
      const response = await axios.post("/api/register", data);

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
          <h1 className="text-3xl text-center mb-5">Crea tu cuenta</h1>
          <input
            type="text"
            placeholder="Nombre de usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="px-3 py-4 rounded-xl shadow-xl mb-2 w-5/6 text-black"
          />
          <input
            type="text"
            placeholder="Correo"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-3 py-4 rounded-xl shadow-xl mb-2 w-5/6 text-black"
          />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="px-3 py-4 rounded-xl shadow-xl mb-2 w-5/6 text-black"
          />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Confirmar contraseña"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="px-3 py-4 rounded-xl shadow-xl mb-1 w-5/6 text-black"
          />
          <div className="w-5/6 flex flex-row gap-1 items-center justify-start">
            <label className="text-sm">Mostrar contraseña</label>
            <button
              onClick={() => {
                setShowPassword(!showPassword);
              }}
              className={`w-5 h-5  rounded-full transition-colors ${
                showPassword ? "bg-green-600" : "bg-zinc-500"
              }`}
            >
              <Image
                className={`transition-opacity ${
                  showPassword ? "opacity-100" : "opacity-0"
                }`}
                src={tick}
                alt="Ocultar Contraseña"
              />
            </button>
          </div>
          <button
            className={`bg-green-600 w-5/6 py-2 rounded-xl shadow-xl mt-3 mb-1 transition-colors ${
              loading ? "opacity-50" : "hover:bg-green-700 active:bg-green-800"
            } `}
            disabled={loading}
            onClick={register}
          >
            Registrarse
          </button>
          <button
            onClick={() => {
              router.push("/login");
            }}
            className="text-sm underline hover:text-green-500 transition-all"
          >
            Regresar a Inicio de sesión
          </button>
        </div>
      </div>
    </div>
  );
}

export default Register;
