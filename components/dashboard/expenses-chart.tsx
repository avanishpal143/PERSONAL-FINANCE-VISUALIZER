"use client";

import { useTransactions } from "./transaction-provider";
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { useMemo } from "react";
import { format, parseISO, startOfMonth, endOfMonth, eachMonthOfInterval, subMonths, addMonths } from "date-fns";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { formatCurrency } from "@/lib/utils";

export function ExpensesChart() {
  const { transactions } = useTransactions();

  const chartData = useMemo(() => {
    // Get the last 6 months
    const endDate = new Date();
    const startDate = subMonths(endDate, 5);
    
    const monthsRange = eachMonthOfInterval({
      start: startDate,
      end: endDate,
    });

    return monthsRange.map((month) => {
      const monthStart = startOfMonth(month);
      const monthEnd = endOfMonth(month);
      
      const monthlyTransactions = transactions.filter((t) => {
        const transactionDate = parseISO(t.date);
        return transactionDate >= monthStart && transactionDate <= monthEnd;
      });
      
      const totalAmount = monthlyTransactions.reduce((sum, t) => sum + t.amount, 0);
      
      return {
        month: format(month, "MMM yyyy"),
        amount: totalAmount,
      };
    });
  }, [transactions]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Monthly Expenses</CardTitle>
        <CardDescription>Your expense trend over the last 6 months</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={chartData}
              margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
            >
              <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
              <XAxis 
                dataKey="month" 
                tick={{ fill: 'var(--foreground)' }} 
                tickLine={{ stroke: 'var(--foreground)' }}
                axisLine={{ stroke: 'var(--foreground)' }}
              />
              <YAxis 
                tick={{ fill: 'var(--foreground)' }}
                tickLine={{ stroke: 'var(--foreground)' }}
                axisLine={{ stroke: 'var(--foreground)' }}
                tickFormatter={(value) => formatCurrency(value).split('.')[0]}
              />
              <Tooltip
                formatter={(value) => [formatCurrency(value as number), "Amount"]}
                contentStyle={{
                  backgroundColor: 'var(--background)',
                  borderColor: 'var(--border)',
                  borderRadius: 'var(--radius)',
                  color: 'var(--foreground)',
                }}
              />
              <Legend />
              <Bar 
                dataKey="amount" 
                name="Expenses" 
                fill="hsl(var(--chart-1))" 
                radius={[4, 4, 0, 0]}
                barSize={40} 
                animationDuration={500}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}