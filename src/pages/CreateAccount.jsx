import React, { useState } from 'react'
import { Eye, EyeClosed } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast, ToastContainer, Zoom } from 'react-toastify'
import Logo from '../component/Logo'

const CreateAccount = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const [nameerr, setNameerr] = useState("")
  const [emailerr, setEmailerr] = useState("")
  const [passworderr, setPassworderr] = useState("")
  const navigate = useNavigate();
  const changelocation = () => {
    navigate('/signin');
  }


  async function handelsubmit(e) {
    e.preventDefault();

    setNameerr("");
    setEmailerr("");
    setPassworderr("");

    if (name === "") {
      setNameerr("Name is required")
    }
    if (email === "") {
      setEmailerr("Email is required")
    } else if (!email.includes('@')) {
      setEmailerr("Enter a valid Email")
    }
    if (password === "") {
      setPassworderr("Password is required")
    } else if (password.length < 6) {
      setPassworderr("Password must be at least 6 characters")
    }
    if (name === "" || email === "" || password === "" || !email.includes('@') || password.length < 6) {
      return;
    }


    e.preventDefault();
    try {
      const res = await axios.post(import.meta.env.VITE_REGISTER_URL, {
        name,
        email,
        password,
      });
      if (res.status == 400) {
        toast.error("server is not response");
      }
      setName("");
      setEmail("");
      setPassword("");
      toast.success("Sign up successfully. Please Signin.");
      changelocation();


    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data.message);
      }else{
        toast.error("Server is not response please retry after some time");
      }
    }

    setEmail("");
    setPassword("");
    setName("");
    setNameerr("");
    setEmailerr("");
    setPassworderr("");

  }

  return (
    <div className="min-h-screen bg-gray-950 text-white gradient-hero relative">
      <div className="min-h-screen flex items-center justify-center flex-col gap-10 px-4">
        <Logo />
        {/* registrationcard  start */}
        <div className="bg-[#101828c5] border-white/25 border backdrop-blur-3xl p-7 w-110  rounded-4xl shadow-xl">
          <div className='flex items-start justify-center flex-col gap-1.5 text-white'>
            <h1 className='text-2xl font-medium font-[SpaceGrotesk]'>Sign Up</h1>
            <p className='text-gray-300 text-[15px]'>Get a $5,000 welcome balance to explore.</p>
          </div>
          <form className='py-5' onSubmit={handelsubmit}>
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="name" className="text-white text-sm font-medium">Full Name</label>
              <input onChange={(e) => setName(e.target.value)} value={name} type="text" id="name" name="name" placeholder="Jane Doe" className="w-full rounded-xl border border-gray-600 bg-transparent px-4 py-1.5 placeholder-gray-400 outline-none text-white transition-all duration-200 focus:border" />
              <p className="text-sm text-red-600">{nameerr}</p>
            </div>
            <div className="mt-5 flex flex-col gap-2 w-full">
              <label htmlFor="email" className="text-white text-sm font-medium">Email</label>
              <input onChange={(e) => setEmail(e.target.value)} value={email} type="Email" id="email" name="email" placeholder="You@example.com" className="w-full rounded-xl border border-gray-600 bg-transparent px-4 py-1.5 placeholder-gray-400 outline-none transition-all text-white duration-200 focus:border focus:bg-white focus:text-black" />
              <p className="text-sm text-red-600">{emailerr}</p>
            </div>
            <div className="mt-5 flex flex-col gap-2 w-full">
              <label htmlFor="password" className="text-white text-sm font-medium">
                Password
              </label>
              <div className="relative">
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  type={showPassword ? "text" : "password"} id="password" name="password" placeholder="At least 6 characters" className="w-full rounded-xl border border-gray-600 bg-transparent px-4 py-1.5 pr-12 placeholder-gray-400 outline-none transition-all text-white duration-200 focus:border focus:bg-white focus:text-black" />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 ">
                  {showPassword ? <EyeClosed size={20} /> : <Eye size={20} />}
                </button>
                <p className="text-sm text-red-600">{passworderr}</p>
              </div>
            </div>
            <div className='flex items-center justify-center gap-3 mt-6 flex-col'>
              <button className="btn-color mb-2 btn text-white px-3 py-2 rounded-3xl text-[15px] w-full">Create Account</button>
              <span className='text-center text-sm'>Have an account? <Link to={'/signin'} className='text-violet-500 text-[15px] font-bold'>Signin</Link></span>
            </div>
          </form>
        </div>
        {/* registrationcard  end */}
      </div>
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
    </div>
  )
}

export default CreateAccount
