import React from "react";
import { getServerSession } from "next-auth/next";
import { options } from "../api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";
const Dashboard = async () => {
  const session = await getServerSession(options);
  if (!session) {
    redirect("/api/auth/signin?callbackurl=/server");
  }
  console.log("session", session);
  return <div>{session.user?.email}</div>;
};

export default Dashboard;
