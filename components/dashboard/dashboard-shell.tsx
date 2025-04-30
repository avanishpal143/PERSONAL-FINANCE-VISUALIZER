import { cn } from "@/lib/utils";
import { DashboardNav } from "@/components/dashboard/dashboard-nav";

interface DashboardShellProps {
  children?: React.ReactNode;
  className?: string;
}

export function DashboardShell({ children, className }: DashboardShellProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <DashboardNav />
      <main className="flex-1 p-6 md:p-8 pt-6">
        <div className={cn("mx-auto max-w-6xl", className)}>
          {children}
        </div>
      </main>
    </div>
  );
}