"use client";
import React, { useState } from "react";
import CardComponent from "./CardComponent";
import { Card, Column, Relation } from "@/lib/types";
import Image from "next/image";
import plus from "@/assets/mas.png";

function ColumnComponent({
  relations,
  c,
}: {
  relations: Relation[];
  c: Column;
}) {
  const [showAddColumn, setShowAddColumn] = useState(false);

  function getProfilePictureUrlFromId(id: number) {
    const user = relations.find((r: Relation) => {
      return parseInt(r.userId + "") === id;
    });
    if (!user) return "nada";
    return user.user.pictureUrl;
  }

  function getUsernameFromId(id: number) {
    const relation = relations.find((r: Relation) => r.userId === id);
    if (!relation) return "Usuario desconocido";
    return relation.user.username;
  }

  return (
    <div
      className="flex flex-col gap-2"
      onMouseEnter={() => setShowAddColumn(true)}
      onMouseLeave={() => setShowAddColumn(false)}
    >
      <div className="bg-zinc-600 w-60 h-14 rounded-xl flex items-center justify-center shrink-0">
        {c.name}
      </div>
      <div className="overflow-y-auto flex flex-col gap-2 overflow-x-hidden w-full">
        {showAddColumn && (
          <button className="border-2 border-dashed border-white opacity-60 hover:opacity-100 rounded-xl flex items-center justify-center">
            <Image src={plus} alt="Crear columna" className="w-8" />
          </button>
        )}

        {c.Card.map((c: Card) => (
          <CardComponent
            c={c}
            creatorUsername={getUsernameFromId(c.creatorId as number)}
            profilePictureUrl={getProfilePictureUrlFromId(
              c.creatorId as number
            )}
          />
        ))}
      </div>
    </div>
  );
}

export default ColumnComponent;
