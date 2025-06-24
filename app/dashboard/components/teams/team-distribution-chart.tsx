"use client"

import { ResponsiveContainer } from "recharts";

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
      
    return <ResponsiveContainer width="100%" height={150}></ResponsiveContainer>
}