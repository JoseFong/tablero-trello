import UserConfigComponent from "@/components/User/UserConfigComponent";
import React from "react";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { redirect } from "next/navigation";

function UserConfig() {
  let userInfo: any;
  try {
    const cookieStore = cookies();
    const cookie = cookieStore.get("trellofonguserinfo");
    if (!cookie) redirect("/login");
    userInfo = jwt.verify(cookie.value, process.env.JWT_SECRET!);
    if (!userInfo.id) redirect("/login");
  } catch (e: any) {
    redirect("/login");
  }

  return <UserConfigComponent userInfo={userInfo} />;
}

export default UserConfig;
