import { Navigate, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "./utils/axiosInstance"; // agar src me hai
import Loding from "./component/Loding";

export default function ProtectedRoute() {
  const [loading, setLoading] = useState(true);
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    axios
      .get(import.meta.env.VITE_GET_ACCOUNT_URL)
      .then(() => setIsAuth(true))
      .catch(() => setIsAuth(false))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return (
    <Loding/>
  )

  return isAuth ? <Outlet /> : <Navigate to="/signin" replace />;
}