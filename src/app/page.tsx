import React from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import jwt from "jsonwebtoken";
import HomePageComp from "@/components/HomePage/homepage";
import { userInfo } from "os";

async function HomePage() {
  let userInfo: any;
  try {
    const cookieStore = await cookies();
    const cookie = cookieStore.get("trellofonguserinfo");
    if (!cookie) redirect("/login");
    userInfo = jwt.verify(cookie.value, process.env.JWT_SECRET!);
    if (!userInfo) redirect("/login");
  } catch (e: any) {
    redirect("/login");
  }

  return <HomePageComp userinfo={userInfo} />;
}

export default HomePage;
