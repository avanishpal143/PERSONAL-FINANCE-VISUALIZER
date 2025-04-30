import { Transaction } from './types';
import { subDays, subWeeks, subMonths } from 'date-fns';

// Function to generate random amount between min and max
function randomAmount(min: number, max: number): number {
  return +(Math.random() * (max - min) + min).toFixed(2);
}

export function generateSampleTransactions(): Transaction[] {
  const now = new Date();
  
  const sampleTransactions: Transaction[] = [
    {
      id: '1',
      description: 'Groceries',
      amount: randomAmount(50, 150),
      date: subDays(now, 2).toISOString(),
      type: 'expense',
    },
    {
      id: '2',
      description: 'Dinner with friends',
      amount: randomAmount(30, 80),
      date: subDays(now, 5).toISOString(),
      type: 'expense',
    },
    {
      id: '3',
      description: 'Monthly rent',
      amount: randomAmount(800, 1500),
      date: subWeeks(now, 1).toISOString(),
      type: 'expense',
    },
    {
      id: '4',
      description: 'Utilities',
      amount: randomAmount(80, 200),
      date: subWeeks(now, 1).toISOString(),
      type: 'expense',
    },
    {
      id: '5',
      description: 'Internet bill',
      amount: randomAmount(50, 100),
      date: subWeeks(now, 2).toISOString(),
      type: 'expense',
    },
    {
      id: '6',
      description: 'Gym membership',
      amount: randomAmount(20, 70),
      date: subMonths(now, 1).toISOString(),
      type: 'expense',
    },
    {
      id: '7',
      description: 'Public transportation',
      amount: randomAmount(30, 80),
      date: subMonths(now, 1).toISOString(),
      type: 'expense',
    },
    {
      id: '8',
      description: 'Office supplies',
      amount: randomAmount(20, 50),
      date: subMonths(now, 2).toISOString(),
      type: 'expense',
    },
    {
      id: '9',
      description: 'Clothing purchase',
      amount: randomAmount(70, 200),
      date: subMonths(now, 2).toISOString(),
      type: 'expense',
    },
    {
      id: '10',
      description: 'Electronics',
      amount: randomAmount(100, 500),
      date: subMonths(now, 3).toISOString(),
      type: 'expense',
    },
    {
      id: '11',
      description: 'Streaming services',
      amount: randomAmount(10, 30),
      date: subMonths(now, 3).toISOString(),
      type: 'expense',
    },
    {
      id: '12',
      description: 'Car maintenance',
      amount: randomAmount(100, 300),
      date: subMonths(now, 4).toISOString(),
      type: 'expense',
    },
    {
      id: '13',
      description: 'Healthcare',
      amount: randomAmount(50, 200),
      date: subMonths(now, 4).toISOString(),
      type: 'expense',
    },
    {
      id: '14',
      description: 'Restaurant',
      amount: randomAmount(40, 120),
      date: subMonths(now, 5).toISOString(),
      type: 'expense',
    },
    {
      id: '15',
      description: 'Software subscription',
      amount: randomAmount(15, 50),
      date: subMonths(now, 5).toISOString(),
      type: 'expense',
    },
  ];
  
  return sampleTransactions;
}