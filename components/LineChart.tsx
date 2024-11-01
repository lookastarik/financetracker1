"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart as Chart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { BalanceData } from "@/types";

interface LineChartProps {
  data: BalanceData[];
}

export function LineChart({ data }: LineChartProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Динамика Баланса</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <Chart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis 
                tickFormatter={(value) => `${(value / 1000)}k`}
              />
              <Tooltip 
                formatter={(value: number) => `${value.toLocaleString()} ₽`}
              />
              <Line
                type="monotone"
                dataKey="balance"
                stroke="#8884d8"
                strokeWidth={2}
                dot={{ r: 4 }}
                activeDot={{ r: 8 }}
              />
            </Chart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}