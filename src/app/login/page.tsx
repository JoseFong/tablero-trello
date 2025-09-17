"use client";
import { isEmpty } from "@/lib/validations";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

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
    <div>
      <h1>Iniciar sesión</h1>
      <input
        type="text"
        placeholder="Usuario o Correo"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button disabled={loading} className="bg-zinc-300" onClick={login}>
        Iniciar sesión
      </button>
      <button
        className="underline"
        onClick={() => {
          router.push("/register");
        }}
      >
        Registarse
      </button>
    </div>
  );
}

export default Login;
