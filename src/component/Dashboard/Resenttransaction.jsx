import { ArrowDownLeft, ArrowUpRight } from 'lucide-react';
import React from 'react'

const Resenttransaction = ({ transactions, accountId }) => {
  return (
  <div className="md:p-12 rounded-2xl p-6 shadow-sm">
    <div className="flex items-center justify-between mb-6">
      <h2 className="text-xl font-bold">Recent Transactions</h2>
    </div>

    {transactions?.map((item) => {
      const isIncome = item.toAccount._id === accountId;

      return (
        <div
          key={item._id}
          className="flex items-center justify-between py-4 border-b last:border-none"
        >
          <div className="flex items-center gap-4">
            <div
              className={`w-12 h-12 rounded-2xl flex items-center justify-center ${isIncome ? "bg-green-100" : "bg-red-100"
                }`}
            >
              {isIncome ? (
                <ArrowDownLeft className="text-green-600" size={20} />
              ) : (
                <ArrowUpRight className="text-red-600" size={20} />

              )}
            </div>

            <div>
              <h3 className="font-semibold">
                {isIncome
                  ? item.fromAccount.user.name
                  : item.toAccount.user.name}
              </h3>

              <p className="text-sm text-gray-500">
                {isIncome ? "Income" : "Expense"} •{" "}
                {new Date(item.createdAt).toLocaleDateString()}
              </p>
            </div>
          </div>

          <span
            className={`font-bold ${isIncome ? "text-green-600" : "text-red-600"
              }`}
          >
            {isIncome ? "+" : "-"}${item.amount}
          </span>
        </div>
      );
    })}
  </div>
  );
}

export default Resenttransaction