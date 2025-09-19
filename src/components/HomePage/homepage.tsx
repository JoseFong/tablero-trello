"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Header from "../header";
import Image from "next/image";
import SkeletonFong from "../skeleton";
import CreateBoard from "../Boards/createBoard";

function HomePageComp({ userinfo }: { userinfo: any }) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  const [boards, setBoards] = useState([]);

  async function fetchGetBoardsFromUser() {
    try {
      setLoading(true);
      const response = await axios.get("/api/users/" + userinfo.id + "/boards");
      setBoards(response.data);
      setLoading(false);
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
    fetchGetBoardsFromUser();
  }, []);

  return (
    <div className="w-screen h-screen bg-zinc-900 text-white p-5 pt-24">
      <Header userInfo={userinfo} />
      <h1 className="font-bold text-3xl">Bienvenido {userinfo.username}</h1>
      <h1 className="text-2xl mt-3 mb-2">Tus tableros</h1>
      <div className="flex flex-row gap-2 overflow-x-auto max-w-screen p-3">
        {loading ? (
          <>
            <div className="w-60 h-48 flex-shrink-0">
              <SkeletonFong />
            </div>
            <div className="w-60 h-48 flex-shrink-0">
              <SkeletonFong />
            </div>
            <div className="w-60 h-48 flex-shrink-0">
              <SkeletonFong />
            </div>
            <div className="w-60 h-48 flex-shrink-0">
              <SkeletonFong />
            </div>
          </>
        ) : (
          <>
            <CreateBoard reload={fetchGetBoardsFromUser} />
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
          </>
        )}
      </div>
    </div>
  );
}

export default HomePageComp;
