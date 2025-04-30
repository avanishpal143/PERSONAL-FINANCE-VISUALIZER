"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TransactionsList } from "./transactions-list";
import { ExpensesChart } from "./expenses-chart";

export function DashboardTabs() {
  return (
    <Tabs defaultValue="transactions" className="space-y-4">
      <TabsList>
        <TabsTrigger value="transactions">Transactions</TabsTrigger>
        <TabsTrigger value="charts">Charts</TabsTrigger>
      </TabsList>
      <TabsContent value="transactions" className="space-y-4">
        <TransactionsList />
      </TabsContent>
      <TabsContent value="charts" className="space-y-4">
        <ExpensesChart />
      </TabsContent>
    </Tabs>
  );
}