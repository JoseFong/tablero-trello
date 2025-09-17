"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Header from "../header";
import Image from "next/image";
import plus from "@/assets/mas.png";

function HomePageComp({ userinfo }: { userinfo: any }) {
  const router = useRouter();

  const [boards, setBoards] = useState([]);

  async function fetchGetBoardsFromUser() {
    try {
      const response = await axios.get("/api/users/" + userinfo.id + "/boards");
      setBoards(response.data);
    } catch (e: any) {
      if (e.response && e.response.data && e.response.data.message) {
        toast.error(e.response.data.message);
      } else {
        toast.error(e.message);
      }
    }
  }

  useEffect(() => {
    fetchGetBoardsFromUser();
  }, []);

  return (
    <div className="w-screen h-screen bg-zinc-900 text-white p-5 pt-20">
      <Header />
      <h1 className="font-bold text-3xl">Bienvenido {userinfo.username}</h1>
      <h1 className="text-2xl mt-3 mb-2">Tus tableros</h1>
      <div className="flex flex-row gap-2 overflow-x-auto max-w-screen p-3">
        <div className=" flex-shrink-0 w-60 h-48 border-white border-dashed border-4 flex flex-col items-center justify-center opacity-60 hover:cursor-pointer hover:opacity-100 transition-opacity transition-transform hover:scale-105">
          <Image src={plus} alt={"Crear tablero"} className="w-12" />
          Crear tablero
        </div>
        {boards.map((b: any) => (
          <div
            style={{ backgroundColor: b.board.Color }}
            className="relative flex-shrink-0 w-60 h-48 hover:scale-105 hover:opacity-60 transition-all hover:cursor-pointer"
          >
            <div className="w-full bg-zinc-600 text-white shadow-lg p-1 overflow-x-hidden">
              {b.board.name}
            </div>
            <div className="w-full bg-zinc-600 absolute bottom-0 p-1 text-xs">
              {b.role}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePageComp;
