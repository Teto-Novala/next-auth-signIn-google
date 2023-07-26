"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";

export default function Login() {
  const { data: session } = useSession();
  return (
    <div className="w-full mx-auto text-center mt-16">
      <h1>Login Page</h1>
      <button
        onClick={(e) => {
          e.preventDefault();
          signIn("google");
        }}
        className="px-3 py-3 bg-blue-300"
      >
        Sign in with Google
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          signOut();
        }}
        className="px-3 py-3 bg-blue-300"
      >
        Sign out
      </button>

      {session && (
        <div className="mt-16 w-full text-center">
          <h2>Profile</h2>
          <p>your name is {session.user.name}</p>
          <img src={session.user.image} alt={session.user.email} />
        </div>
      )}
    </div>
  );
}
