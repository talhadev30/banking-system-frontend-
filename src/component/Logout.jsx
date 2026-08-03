import axios from 'axios'
import { LogOut } from 'lucide-react'
import React from 'react'
import { Navigate } from 'react-router-dom'
import { toast, ToastContainer, Zoom } from 'react-toastify'

const Logout = () => {

  const navigate = Navigate;

  async function logoutUser() {
    try {
      const res = await axios.post(
        import.meta.env.VITE_SIGIN_OUT_URL,
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
      <button onClick={logoutUser} className='p-4 btn active:scale-95 btn-color text-white rounded-2xl flex gap-3'>
        <LogOut /><span className='md:flex hidden'>Logout</span>
      </button>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Zoom}
      />
    </>

  )
}

export default Logout