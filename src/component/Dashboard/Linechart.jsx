import React from 'react'
import {
    ResponsiveContainer,
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from "recharts";

const Linechart = (props) => {
    return (
        <ResponsiveContainer width="99%" height={400}>
            <LineChart data={props.chartData} >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />

                <Line
                    type="monotone"
                    dataKey="income"
                    stroke="#7e46e5"
                    strokeWidth={3}
                />

                <Line
                    type="monotone"
                    dataKey="expense"
                    stroke="#FB923C"
                    strokeWidth={3}
                />
            </LineChart>
        </ResponsiveContainer>
    )
}

export default Linechart