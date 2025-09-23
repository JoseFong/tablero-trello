"use client";
import { Board, Tag } from "@/app/generated/prisma";
import axios from "axios";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Header from "../Common/header";
import { Column, Relation } from "@/lib/types";
import Image from "next/image";
import plus from "@/assets/mas.png";
import ColumnComponent from "../Columns/ColumnComponent";
import DeleteBoard from "./DeleteBoard";
import goBack from "@/assets/icons8-izquierda-2-100.png";
import EditBoard from "./EditBoard";
import CreateColumn from "../Columns/CreateColumn";

function BoardComponent({ userInfo }: { userInfo: any }) {
  const [tags, setTags] = useState<Tag[]>([]);
  const [columns, setColumns] = useState<Column[]>([]);
  const [relations, setRelations] = useState<Relation[]>([]);
  const [board, setBoard] = useState<Board>();
  const params = useParams();
  const boardId = parseInt(params.id + "");

  const [role, setRole] = useState("Lector");

  const router = useRouter();

  async function fetchGetAllInfo() {
    try {
      const response: any = await axios.get("/api/allBoardInfo/" + boardId);
      setBoard(response.data.board);
      setRelations(response.data.relations);
      setColumns(response.data.columns);
      setTags(response.data.tags);
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

  useEffect(() => {
    if (userInfo && relations) {
      const relation = relations.find((r: Relation) => {
        return r.userId === userInfo.id;
      });

      if (!relation) {
        setRole("Lector");
      } else {
        setRole(relation.role);
      }
    }
  }, [relations, userInfo]);

  useEffect(() => {
    fetchGetAllInfo();
  }, []);

  return (
    <div className="w-screen h-screen bg-zinc-900 text-white p-5 pt-24 flex flex-col gap-5">
      <Header userInfo={userInfo} />
      <div className="flex flex-row gap-1 items-center">
        <button
          className="hover:opacity-60"
          onClick={() => {
            router.push("/");
          }}
        >
          <Image src={goBack} alt="Regresar" className="w-8 mr-1" />
        </button>
        <h1 className="font-bold text-2xl">{board?.name}</h1>
        {board && role === "Dueño" && <DeleteBoard board={board} />}
        {board && role === "Dueño" && (
          <EditBoard board={board} reload={fetchGetAllInfo} />
        )}
      </div>
      <div className="flex flex-row h-[90%] gap-5">
        <div className="flex-grow overflow-x-auto flex flex-row gap-5">
          {role !== "Lector" && (
            <CreateColumn boardId={boardId} reload={fetchGetAllInfo} />
          )}
          {columns.map((c: Column) => (
            <ColumnComponent
              relations={relations}
              c={c}
              role={role}
              reload={fetchGetAllInfo}
            />
          ))}
        </div>
        <div className="bg-zinc-800 rounded-xl p-3 flex flex-col gap-1.5">
          <h1 className="text-center text-lg font-bold mb-1">Etiquetas</h1>
          {tags.map((t: Tag) => (
            <div
              className="py-1 px-2 rounded-xl"
              style={{ backgroundColor: t.color }}
            >
              {t.name}
            </div>
          ))}
          {role !== "Lector" && (
            <button className="border-dashed border-4 flex items-center justify-center w-full rounded-xl opacity-60 hover:opacity-100">
              <Image src={plus} alt="Crear etiqueta" className="w-6 py-1" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default BoardComponent;
