'use client'
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

export default function Home() {
  const route = useRouter();

  useEffect(() => {
    route.replace("/auth/login");

    return () => {};
  }, [route]);

  return <div>Home</div>;
}
