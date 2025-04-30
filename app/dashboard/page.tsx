import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { TransactionsList } from "@/components/dashboard/transactions-list";
import { ExpensesChart } from "@/components/dashboard/expenses-chart";
import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { DashboardTabs } from "@/components/dashboard/dashboard-tabs";
import { Overview } from "@/components/dashboard/overview";
import { TransactionProvider } from "@/components/dashboard/transaction-provider";

export default function DashboardPage() {
  return (
    <TransactionProvider>
      <DashboardShell>
        <DashboardHeader
          heading="Dashboard"
          text="Track and manage your personal finances."
        />
        <div className="grid gap-6">
          <Overview />
          <DashboardTabs />
        </div>
      </DashboardShell>
    </TransactionProvider>
  );
}