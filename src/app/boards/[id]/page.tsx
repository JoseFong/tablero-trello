import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import React from "react";
import jwt from "jsonwebtoken";
import Board from "@/components/Boards/board";

function BoardPage() {
  let userInfo: any;
  try {
    const cookieStore = cookies();
    const cookie = cookieStore.get("trellofonguserinfo");
    if (!cookie) redirect("/");
    userInfo = jwt.verify(cookie.value, process.env.JWT_SECRET!);
    if (!userInfo.id) redirect("/");
  } catch (e: any) {
    redirect("/");
  }

  return (
    <div>
      <Board userInfo={userInfo} />
    </div>
  );
}

export default BoardPage;
