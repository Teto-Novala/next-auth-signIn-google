"use client";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import React from "react";

export default function page() {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/login");
    },
  });
  return (
    <div className="w-full text-center">
      <h1>About Page</h1>
      {session && <p>your name is {session.user.name}</p>}
    </div>
  );
}
