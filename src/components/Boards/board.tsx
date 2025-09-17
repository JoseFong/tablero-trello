"use client";
import React, { useEffect, useState } from "react";
import Header from "../header";
import { useParams, useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";

function Board() {
  const router = useRouter();
  const params = useParams();
  const boardId = params.id;
  const [relation, setRelation] = useState();

  useEffect(() => {
    fetchGetBoard();
  }, []);

  async function fetchGetBoard() {
    try {
      const response = await axios.get("/api/boards/" + boardId);
      setRelation(response.data);
    } catch (e: any) {
      if (e.response && e.response.data && e.response.data.message) {
        toast.error(e.response.data.message);
        router.push("/");
      } else {
        toast.error(e.message);
        router.push("/");
      }
    }
  }

  return (
    <div className="h-screen w-screen bg-zinc-900 pt-20 text-white">
      <Header />
      {JSON.stringify(relation)}
    </div>
  );
}

export default Board;
