"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";

function HomePageComp({ userinfo }: { userinfo: any }) {
  const router = useRouter();

  async function logout() {
    try {
      const response = await axios.get("/api/login");
      if (response.status === 200) router.push("/login");
    } catch (e: any) {
      if (e.response && e.response.data && e.response.data.message) {
        toast.error(e.response.data.message);
      } else {
        toast.error(e.message);
      }
    }
  }

  return (
    <div>
      Bienvenido {userinfo.username}{" "}
      <button className="underline" onClick={logout}>
        Logout
      </button>
    </div>
  );
}

export default HomePageComp;
