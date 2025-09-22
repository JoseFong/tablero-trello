import React from "react";
import ToolTip from "../tooltip";
import { Card, CardHasTag } from "@/lib/types";
import Image from "next/image";
import elipsis from "@/assets/icons8-elipsis-100.png";

function CardComponent({
  c,
  creatorUsername,
  profilePictureUrl,
}: {
  c: Card;
  creatorUsername: string;
  profilePictureUrl: string;
}) {
  return (
    <div
      className="w-full h-32 rounded-xl shrink-0 relative hover:opacity-90 hover:cursor-pointer"
      style={{ backgroundColor: c.color }}
    >
      <div
        className="py-1 px-2 rounded-t-xl flex flex-row gap-1 items-center"
        style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
      >
        <div className="overflow-x-hidden flex-grow">{c.title}</div>
        <div>
          <ToolTip message={creatorUsername}>
            {c.creatorId && (
              <div
                className="w-6 h-6 bg-white rounded-full"
                style={{
                  backgroundImage: `url(${profilePictureUrl})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
            )}
          </ToolTip>
        </div>
      </div>
      <div
        className="absolute bottom-0 w-full rounded-b-xl p-1 flex flex-row items-center gap-1"
        style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
      >
        <div
          className={`rounded-xl px-2 shrink ${
            c.status === "Terminado" && "bg-green-600"
          } ${c.status === "Empezado" && "bg-yellow-600"} ${
            c.status === "Por Empezar" && "bg-red-600"
          }`}
        >
          {c.status}
        </div>
        <div className="flex-grow flex flex-row gap-1 overflow-x-hidden">
          {c.CardHasTag.map((cht: CardHasTag) => (
            <ToolTip message={cht.tag.name}>
              <div
                className=" rounded-full w-6 h-6"
                style={{ backgroundColor: cht.tag.color }}
              ></div>
            </ToolTip>
          ))}
        </div>
        <button className="mr-1 hover:bg-black/50 active:bg-black/70 rounded-xl p-1">
          <Image src={elipsis} alt="Ver más" className="w-5" />
        </button>
      </div>
    </div>
  );
}

export default CardComponent;
