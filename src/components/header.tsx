"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import logouticon from "@/assets/icons8-salida-100.png";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@radix-ui/react-hover-card";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

function Header() {
  const [fecha, setFecha] = useState("");

  const router = useRouter();

  async function logout() {
    try {
      const response = await axios.get("/api/login");
      if (response.status === 200) router.push("/login");
    } catch (e: any) {
      if (e.response && e.response.data && e.response.data.message) {
        toast.error(e.response.data.message);
      } else {
        toast.error(e.message);
      }
    }
  }

  useEffect(() => {
    const today = new Date();
    const day = today.getDay();

    const dias = [
      "Domingo",
      "Lunes",
      "Martes",
      "Miércoles",
      "Jueves",
      "Viernes",
      "Sábado",
    ];
    const meses = [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre",
    ];

    setFecha(
      dias[day] +
        " " +
        today.getDate() +
        " de " +
        meses[today.getMonth() + 1] +
        " del " +
        today.getFullYear()
    );
  }, []);

  return (
    <div className="w-screen absolute top-0 left-0 bg-zinc-800 p-5 shadow-xl flex flex-row gap-2 items-center">
      {fecha}
      <HoverCard>
        <HoverCardTrigger asChild>
          <button onClick={logout}>
            <Image className="w-6" src={logouticon} alt="Cerrar Sesión" />
          </button>
        </HoverCardTrigger>
        <HoverCardContent>Cerrar Sesión</HoverCardContent>
      </HoverCard>
    </div>
  );
}

export default Header;
