"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart as Chart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";
import { Category } from "@/types";

const COLORS = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEEAD'];

interface PieChartProps {
  data: Category[];
}

export function PieChart({ data }: PieChartProps) {
  const chartData = data.map(item => ({
    name: item.name,
    value: item.amount
  }));

  return (
    <Card>
      <CardHeader>
        <CardTitle>Распределение Расходов</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <Chart>
              <Pie
                data={chartData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
              >
                {chartData.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip 
                formatter={(value: number) => `${value.toLocaleString()} ₽`}
              />
              <Legend />
            </Chart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}