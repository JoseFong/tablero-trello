import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import React from "react";
import jwt from "jsonwebtoken";
import Board from "@/components/Boards/board";

async function BoardPage() {
  let userInfo: any;
  try {
    const cookieStore = cookies();
    const cookie = cookieStore.get("trellofonguserinfo");
    if (!cookie) redirect("/login");
    userInfo = jwt.verify(cookie.value, process.env.JWT_SECRET!);
    if (!userInfo) redirect("/login");
  } catch (e: any) {
    redirect("/login");
  }

  return (
    <div>
      <Board />
    </div>
  );
}

export default BoardPage;
