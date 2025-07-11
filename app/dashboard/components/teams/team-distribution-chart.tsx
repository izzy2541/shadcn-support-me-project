"use client"

import { Tooltip, PieChart, Cell, Pie, ResponsiveContainer } from "recharts";

export default function TeamsDistributionChart(){
    const data = [
        {
          name: "Delta",
          value: 55,
          color: "#84cc16",
        },
        {
          name: "Alpha",
          value: 34,
          color: "#3b82f6",
        },
        {
          name: "Canary",
          value: 11,
          color: "#f97316",
        },
      ];
      
    return (
    <ResponsiveContainer width="100%" height={150}>
        <PieChart>
            <Tooltip
            labelClassName='font-bold'
            wrapperClassName="dark:[&.recharts-tooltip-item]:!text-white [&.recharts-tooltip-item]:!text-black !text-sm dark:!bg-black rounded-md dark:!border-border" /> 
            <Pie data={data} dataKey="value" nameKey="name">
                {data.map((dataItem, i) =>(
                    <Cell key={i} fill={dataItem.color} />
                ))}
            </Pie>
        </PieChart>
    </ResponsiveContainer>
    )
}