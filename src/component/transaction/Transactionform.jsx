import React, { use, useState } from 'react'
import Activebar from '../Home/Activebar'
import { Send, User } from 'lucide-react'
import axios from 'axios'
import { toast, ToastContainer, Zoom } from 'react-toastify'
import TransactionPopup from './TransactionMessage'
import Loding from '../Loding'


const Transactionform = ({ account }) => {

  const [amount, setAmount] = useState("")
  const [amounterr, setAmounterr] = useState("")
  const [toAccount, setToAccount] = useState("")
  const [toAccounterr, setToAccounterr] = useState("")
  const [loading, setLoading] = useState(false);
  const [popup, setPopup] = useState({ open: false, data: null })
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  async function handleAmountChange(e) {
    e.preventDefault();
    setToAccounterr("");
    setAmounterr("");



    if (toAccount === "") {
      setToAccounterr("Recipient account is required");
    }

    if (amount === "") {
      setAmounterr("Amount is required");
    }

    if (toAccount === "" || amount === "") {
      return;
    }

    setLoading(true);
    // manage a systemUser and a normal user api
    if (user.systemUser) {
      try {
        const res = await axios.post(`${import.meta.env.VITE_TRANSACTION_INITIAL_FUND_URL}`,
          {
            toAccount: toAccount,
            amount: Number(amount),
            idempotencyKey: crypto.randomUUID()
          },
          { withCredentials: true }
        );

        setPopup({ open: true, data: res.data })

        setAmount("");
        setToAccount("");

      } catch (error) {
        toast.error(error.response.data.message)
      } finally {
        setLoading(false)
      }
    } else {
      try {
        const res = await axios.post(`${import.meta.env.VITE_TRANSACTION_URL}`,
          {
            toAccount: toAccount,
            amount: Number(amount),
            idempotencyKey: crypto.randomUUID()
          },
          { withCredentials: true }
        );

        setAmount("");
        setToAccount("");

      } catch (error) {
        toast.error(
          error.response?.data?.message || error.message || "Something went wrong"
        )
      } finally {
        setLoading(false)
      }
    }


  };

  return (
    <div className='max-w-7xl h-full flex flex-col items-start justify-start gap-4 md:gap-10  p-5 md:px-10 py-5 font-[SpaceGrotesk]'>
      <Activebar title={account ? `Available : $${account}` : "Available : ••••••••••"} />
      <div className='w-full py-10 px-5 outline-2 outline-gray-300 shadow-2xl  rounded-3xl'>
        <form onSubmit={handleAmountChange}>
          <div className='flex flex-col gap-2 mt-5'>
            <label htmlFor="Recipient Account" className='uppercase'>Recipient Account</label>
            <input onChange={(e) => {
              setToAccount(e.target.value)
            }} type="text" name="Recipient Account" value={toAccount} id="Recipient Account" placeholder='Enter recipient account number' className='w-full placeholder:capitalize font-sans placeholder:font-medium h-12 rounded-xl border border-gray-300 py-2 px-3 focus:outline-none focus:border-blue-500' />
            <p className='text-red-500 text-sm'>{toAccounterr}</p>
          </div>
          <div className='flex flex-col gap-2 mt-5'>
            <label htmlFor="Amount" className='uppercase'>Amount</label>
            <input onChange={(e) => {
              setAmount(e.target.value)
            }} type="number" name="Amount" id="Amount" placeholder='0.00' value={amount} className='w-full text-4xl placeholder:capitalize font-extrabold placeholder:font-extrabold h-10 rounded-2xl border border-gray-300 py-10 px-6 focus:outline-none focus:border-blue-500' />
            <p className='text-red-500 text-sm'>{amounterr}</p>
          </div>
          <div className='flex gap-5 mt-5 flex-wrap'>
            {['50', '100', '200', '500'].map((item => {
              return <button key={item} type='button' className='px-12 md:px-16 text-2xl rounded-2xl hover:bg-violet-900 hover:text-white py-2 md:py-3 border' onClick={() => { setAmount(item) }}>{item}</button>
            }))}
          </div>
          <div className='py-10'>

            <button disabled={loading} className={` ${loading
              ? "bg-gray-400 cursor-not-allowed text-white"
              : "btn btn-color text-white hover:opacity-90"
              } px-14 text-xl rounded-2xl btn btn-color text-white py-3 border flex justify-center items-center gap-2 w-full`} type='submit'><Send /> Send Money</button>
          </div>
        </form>
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
      <TransactionPopup
        open={popup.open}
        data={popup.data}
        onClose={() =>
          setPopup({
            open: false,
            data: null
          })
        }
      />

      {loading && <Loding />}
      
    </div>
  )
}

export default Transactionform