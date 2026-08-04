import React, { useEffect, useState } from 'react'
import Logo from '../component/Logo'
import Dashboardnav from '../component/Dashboard/Dashboardnav'
import { Copy, Eye, EyeClosed, LineChart, MoveDownLeft } from 'lucide-react'
import Incomeexpence from '../component/Dashboard/Incomeexpence'
import Linechart from '../component/Dashboard/Linechart'
import Resenttransaction from '../component/Dashboard/Resenttransaction'
import axios from "../utils/axiosInstance";
import { toast, ToastContainer, Zoom } from 'react-toastify'

const Dashboard = () => {

  const [show, setShow] = useState(true);
  const [showaccountid, setShowaccountid] = useState(false);
  const [account, setAccount] = useState([]);
  const [chartData, setChartData] = useState([]);
  const [userName, setUserName] = useState('');
  const [transactions, setTransactions] = useState([]);


  /**
   * get account data from the backend using axios and set it to the account state
   * get a account Id 
   * get a account Balance
   */
  useEffect(() => {
    async function getAccount() {
      try {
        const res = await axios.get(
          import.meta.env.VITE_GET_ACCOUNT_URL,
          {
            withCredentials: true,
          }
        );

        setAccount(res.data.accounts[0]);
      } catch (error) {
        toast.error(error.response.data.message);
      }
    }

    getAccount();
  }, []);

  /**
   * get chart data from the backend using axios and set it to the chartData state
   * get a monyhly summary of income and expense
   * and sate in line chart throw send props to linechart component
   */
  useEffect(() => {
    if (!account?._id) return;

    async function getChartData() {
      try {
        const res = await axios.get(`${import.meta.env.VITE_MONTHLY_SUMMARY_URL}${account._id}`,
          {
            withCredentials: true,
          }
        );

        setUserName(res.data.user);
        setChartData(res.data.summary);
      } catch (error) {
        toast.error(error.response.data.message);
      }
    }

    getChartData();
  }, [account?._id]);

  /**
   * get recent transactions from the backend using axios and set it to the transactions state
   * get a recent transactions of the account
   * and sate in resent transaction throw send props to resent transaction component
   */
  useEffect(() => {
    async function getTransactions() {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_RECENT_TRANSACTION_URL}${account._id}`,
          {
            withCredentials: true,
          }
      );

        setTransactions(res.data.transactions);
      } catch (error) {
        toast.error(error.response.data.message);
      }
    }

    if (account?._id) {
      getTransactions();
    }
  }, [account]);


  const showAccountId = () => {
    setShowaccountid(true);
  }


  return (
    <div className='min-h-screen font-[SpaceGrotesk] overflow-hidden'>
      <Dashboardnav name={userName} />
      <div className='p-5 md:p-10'>
        <div className="credit-card relative rounded-3xl p-6 md:p-10 flex flex-col lg:flex-row justify-between gap-8 lg:gap-16 w-full mx-auto">
          <div className="flex flex-col justify-between gap-8 ">
            <div>
              <span className="text-white text-lg md:text-xl font-semibold uppercase">
                Checking Account
              </span>
              <p className="text-white/80 w-fit mt-1 tracking-widest" onMouseEnter={showAccountId} onMouseLeave={() => setShowaccountid(false)}>
                {showaccountid ? account._id : "••••••••••••••••••••••••"}
              </p>
            </div>
            <div>
              <p className="text-white/70 text-sm md:text-lg">
                Available Balance
              </p>

              <h1 className="text-white font-bold text-4xl md:text-6xl mt-2">
                {!show ? `${'$' + account.balance}` : "$•••••••"}
              </h1>
            </div>
            <button onClick={() => setShow(!show)} className=' active:scale-90 absolute top-6 right-3 lg:right-0 lg:left-80 p-1 w-fit backdrop-blur-3xl text-white bg-white/20 rounded-full'>
              {!show ? <EyeClosed /> : <Eye />}
            </button>
            <button onClick={async () => {
              await navigator.clipboard.writeText(account._id);
            }} className='active:scale-90 absolute top-6 right-13 lg:right-0 lg:left-70 p-1 w-fit backdrop-blur-3xl text-white bg-white/20 rounded-full'>
              <Copy />
            </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-1 gap-4 lg:w-100">
            <Incomeexpence title="Income" amount="$8,700" icon="income" data={chartData} />
            <Incomeexpence title="Expense" amount="$3,200" icon="expense" data={chartData} />
          </div>
        </div>
      </div>
      <div>
        <Linechart chartData={chartData} />
        <Resenttransaction transactions={transactions} accountId={account._id} />
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

export default Dashboard