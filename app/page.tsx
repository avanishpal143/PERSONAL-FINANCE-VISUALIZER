import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { BarChart3Icon, PiggyBankIcon } from "lucide-react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-semibold">
            <PiggyBankIcon className="h-6 w-6 text-primary" />
            <span>Finance Tracker</span>
          </div>
          <div className="flex items-center gap-4">
            <ThemeToggle />
          </div>
        </div>
      </header>
      
      <div className="container flex-1 py-12 md:py-20 lg:py-24">
        <section className="mx-auto max-w-4xl space-y-8 text-center">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tighter">
            Track your finances with ease
          </h1>
          <p className="mx-auto max-w-[700px] text-lg text-muted-foreground md:text-xl">
            A simple and intuitive way to manage your personal finances, track expenses, and visualize your spending habits.
          </p>
          <div className="space-x-4">
            <Button asChild size="lg">
              <Link href="/dashboard">
                <BarChart3Icon className="mr-2 h-5 w-5" />
                Get Started
              </Link>
            </Button>
          </div>
        </section>
      </div>
      
      <footer className="border-t py-6 md:py-8">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Finance Tracker. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}