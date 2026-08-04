import axios from "axios";
import { LogOut } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, Zoom } from "react-toastify";

const Logout = () => {
  const navigate = useNavigate() 
  async function logoutUser() {
    try {
      await axios.post(
        import.meta.env.VITE_SIGN_OUT_URL,
        {},
        { withCredentials: true }
      );
      localStorage.removeItem("user");
      navigate('/signin')
    } catch (error) {
      console.log(error.response?.data?.message || error.message);
    }
  }

  return (
    <>
      <button
        onClick={logoutUser}
        className="p-4 btn active:scale-95 btn-color text-white rounded-2xl flex gap-3"
      >
        <LogOut />
        <span className="md:flex hidden">Logout</span>
      </button>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar
        transition={Zoom}
      />
    </>
  );
};

export default Logout;