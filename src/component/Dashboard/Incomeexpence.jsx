import { MoveDownLeft, MoveDownRight } from 'lucide-react'
import React from 'react'

const Incomeexpence = (props) => {

    const icon = props.icon;
    const totalIncome =
        props.data?.reduce((sum, month) => sum + month.income, 0) || 0;

    const totalExpense =
        props.data?.reduce((sum, month) => sum + month.expense, 0) || 0;

    return (
        <div
            className="bg-white rounded-2xl p-4 flex items-center gap-4 shadow-sm w-full ">

            <div
                className="w-12 h-12 rounded-2xl bg-green-100 flex items-center justify-center ">
                {icon === "income" ? <MoveDownRight color="#22c55e" /> : <MoveDownLeft color="#ef4444" />}
            </div>
            <div>
                <h3 className="font-bold text-lg text-black">{props.title}</h3>
                <p className="text-gray-500">{icon === "income" ? totalIncome : totalExpense}</p>
            </div>

        </div>
    )
}

export default Incomeexpence