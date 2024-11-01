export type CategoryType = 'income' | 'expense';

export interface Category {
  id: number;
  name: string;
  amount: number;
}

export interface BalanceData {
  month: string;
  balance: number;
}

export interface Categories {
  income: Category[];
  expense: Category[];
}