"use client";

import { useEffect } from "react";
import { useCookie } from "../../hooks/useCookie";
import { redirect } from "next/navigation";

const Admin = () => {
  const { getCookies } = useCookie();

  async function CheckToken() {
    const token = await getCookies("token");

    console.log(token);
    if (!token) {
      alert("Please login first");
      redirect("/admin/master-login");
    }
  }

  useEffect(() => {
    CheckToken();
  }, []);

  return (
    <section className="flex justify-center items-center h-[100vh] bg-white text-black">
      <h1>Admin</h1>p
    </section>
  );
};

export default Admin;
