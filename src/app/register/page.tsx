"use client";
import { isEmpty, validEmail, validPassword } from "@/lib/validations";
import React, { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { redirect, useRouter } from "next/navigation";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

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
    <div>
      <h1>Registrarse</h1>
      <input
        type="text"
        placeholder="Nombre de usuario"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="text"
        placeholder="Correo"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="password"
        placeholder="Confirmar contraseña"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <button className="bg-zinc-200" disabled={loading} onClick={register}>
        Registrarse
      </button>
    </div>
  );
}

export default Register;
