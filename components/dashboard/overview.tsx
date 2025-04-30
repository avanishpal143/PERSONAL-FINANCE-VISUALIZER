"use client";

import { formatCurrency } from "@/lib/utils";
import { useTransactions } from "./transaction-provider";
import { ArrowDownIcon, ArrowUpIcon, DollarSignIcon } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useState, useMemo } from "react";
import { 
  format, 
  startOfMonth, 
  endOfMonth, 
  subMonths, 
  parseISO 
} from "date-fns";

export function Overview() {
  const { transactions } = useTransactions();
  const [timeframe, setTimeframe] = useState<'currentMonth' | 'previousMonth'>('currentMonth');

  const stats = useMemo(() => {
    const now = new Date();
    
    const currentMonthStart = startOfMonth(now);
    const currentMonthEnd = endOfMonth(now);
    
    const prevMonthStart = startOfMonth(subMonths(now, 1));
    const prevMonthEnd = endOfMonth(subMonths(now, 1));
    
    const timeframeStart = timeframe === 'currentMonth' ? currentMonthStart : prevMonthStart;
    const timeframeEnd = timeframe === 'currentMonth' ? currentMonthEnd : prevMonthEnd;
    const timeframeLabel = timeframe === 'currentMonth' 
      ? format(currentMonthStart, 'MMMM yyyy') 
      : format(prevMonthStart, 'MMMM yyyy');
    
    const timeframeTransactions = transactions.filter(t => {
      const date = parseISO(t.date);
      return date >= timeframeStart && date <= timeframeEnd;
    });
    
    const totalExpenses = timeframeTransactions.reduce((sum, t) => sum + t.amount, 0);
    
    // Calculate comparison with previous period
    const comparisonStart = timeframe === 'currentMonth' ? prevMonthStart : subMonths(prevMonthStart, 1);
    const comparisonEnd = timeframe === 'currentMonth' ? prevMonthEnd : subMonths(prevMonthEnd, 1);
    
    const comparisonTransactions = transactions.filter(t => {
      const date = parseISO(t.date);
      return date >= comparisonStart && date <= comparisonEnd;
    });
    
    const comparisonTotal = comparisonTransactions.reduce((sum, t) => sum + t.amount, 0);
    
    // Calculate percentage change
    let percentChange = 0;
    if (comparisonTotal > 0) {
      percentChange = ((totalExpenses - comparisonTotal) / comparisonTotal) * 100;
    }
    
    // Recent transactions
    const recentTransactions = [...timeframeTransactions]
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 3);
    
    return {
      totalExpenses,
      timeframeLabel,
      percentChange,
      isIncrease: percentChange > 0,
      recentTransactions,
    };
  }, [transactions, timeframe]);

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Total Expenses
          </CardTitle>
          <DollarSignIcon className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{formatCurrency(stats.totalExpenses)}</div>
          <p className="text-xs text-muted-foreground">{stats.timeframeLabel}</p>
        </CardContent>
        <CardFooter>
          <div className="flex items-center text-xs text-muted-foreground">
            {stats.isIncrease ? (
              <ArrowUpIcon className="mr-1 h-3 w-3 text-destructive" />
            ) : (
              <ArrowDownIcon className="mr-1 h-3 w-3 text-emerald-500" />
            )}
            <span className={stats.isIncrease ? "text-destructive" : "text-emerald-500"}>
              {Math.abs(stats.percentChange).toFixed(1)}%
            </span>
            <span className="ml-1">from previous period</span>
          </div>
        </CardFooter>
      </Card>
      
      {/* More cards can be added here when implementing Stage 2 features */}
    </div>
  );
}