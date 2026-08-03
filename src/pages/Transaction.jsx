import React, { useEffect, useState } from 'react'
import Transactionnav from '../component/transaction/Transactionnav'
import Transactionform from '../component/transaction/Transactionform'
import axios from '../utils/axiosInstance';

const Transaction = () => {

const [account, setAccount] = useState(null)

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

  return (
    <div className='min-h-screen w-full'>
      <Transactionnav/>
      <Transactionform account={account?.balance} />
    </div>
  )
}

export default Transaction