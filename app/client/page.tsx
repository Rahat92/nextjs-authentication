"use client";
import React from "react";
import { SessionProvider, useSession } from "next-auth/react";
import { notFound, redirect } from "next/navigation";
import AuthProvider from "../context/AuthProvider";

const Client = () => {
  notFound();
  // const {data:session, status} = useSession();
  return (
    <section>
      <AuthProvider>helo</AuthProvider>
    </section>
  );
};

export default Client;
