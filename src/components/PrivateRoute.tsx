// /components/PrivateRoute.tsx
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const PrivateRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const router = useRouter();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      // router.push("/auth/login");
    }
  }, [token]);

  return token ? <>{children}</> : null;
};

export default PrivateRoute;
