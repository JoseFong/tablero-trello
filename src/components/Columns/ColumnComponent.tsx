"use client";
import React, { useState } from "react";
import CardComponent from "../Boards/CardComponent";
import { Card, Column, Relation } from "@/lib/types";
import Image from "next/image";
import plus from "@/assets/mas.png";
import EditColumn from "./EditColumn";
import CreateCard from "../Cards/CreateCard";

function ColumnComponent({
  relations,
  c,
  role,
  reload,
}: {
  relations: Relation[];
  c: Column;
  role: string;
  reload: () => void;
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
      <EditColumn c={c} reload={reload} />
      <div className="overflow-y-auto flex flex-col gap-2 overflow-x-hidden w-full">
        {showAddColumn && role !== "Lector" && <CreateCard />}

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
