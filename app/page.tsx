"use client";

import { useState } from 'react';
import { CategoryCard } from '@/components/CategoryCard';
import { PieChart } from '@/components/PieChart';
import { LineChart } from '@/components/LineChart';
import { ThemeToggle } from '@/components/ThemeToggle';
import { AddCategoryDialog } from '@/components/AddCategoryDialog';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { CategoryType, Categories } from '@/types';

export default function Home() {
  const [categories, setCategories] = useState<Categories>({
    income: [
      { id: 1, name: 'Зарплата', amount: 150000 },
      { id: 2, name: 'Фриланс', amount: 50000 },
    ],
    expense: [
      { id: 1, name: 'Продукты', amount: 30000 },
      { id: 2, name: 'Транспорт', amount: 15000 },
      { id: 3, name: 'Развлечения', amount: 20000 },
      { id: 4, name: 'Коммунальные услуги', amount: 10000 },
      { id: 5, name: 'Прочее', amount: 5000 },
    ],
  });

  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedType, setSelectedType] = useState<CategoryType>('income');

  const totalIncome = categories.income.reduce((sum, category) => sum + category.amount, 0);
  const totalExpense = categories.expense.reduce((sum, category) => sum + category.amount, 0);

  const deleteCategory = (type: CategoryType, id: number) => {
    setCategories((prev) => ({
      ...prev,
      [type]: prev[type].filter((category) => category.id !== id),
    }));
  };

  const addCategory = (type: CategoryType, name: string, amount: number) => {
    setCategories((prev) => ({
      ...prev,
      [type]: [
        ...prev[type],
        {
          id: Math.max(0, ...prev[type].map((c) => c.id)) + 1,
          name,
          amount,
        },
      ],
    }));
  };

  const balanceData = [
    { month: 'Янв', balance: 50000 },
    { month: 'Фев', balance: 65000 },
    { month: 'Мар', balance: 55000 },
    { month: 'Апр', balance: 80000 },
    { month: 'Май', balance: 95000 },
    { month: 'Июн', balance: 85000 },
  ];

  const openAddDialog = (type: CategoryType) => {
    setSelectedType(type);
    setDialogOpen(true);
  };

  return (
    <div className="flex min-h-screen bg-background">
      <div className="flex-1 p-6">
        <header className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold">Финансовый Дашборд</h1>
            <p className="text-muted-foreground">Управляйте своими финансами эффективно</p>
          </div>
          <ThemeToggle />
        </header>

        <div className="grid gap-6 md:grid-cols-2">
          <CategoryCard
            title="Доходы"
            type="income"
            total={totalIncome}
            percentageChange={2.1}
            categories={categories.income}
            onDelete={deleteCategory}
          />

          <CategoryCard
            title="Расходы"
            type="expense"
            total={totalExpense}
            percentageChange={-4.5}
            categories={categories.expense}
            onDelete={deleteCategory}
          />

          <PieChart data={categories.expense} />
          <LineChart data={balanceData} />

          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Управление Категориями</CardTitle>
              <CardDescription>
                Добавляйте и удаляйте категории доходов и расходов
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4">
                <Button onClick={() => openAddDialog('income')}>
                  Добавить доход
                </Button>
                <Button onClick={() => openAddDialog('expense')}>
                  Добавить расход
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <AddCategoryDialog
          open={dialogOpen}
          onOpenChange={setDialogOpen}
          type={selectedType}
          onAdd={addCategory}
        />
      </div>
    </div>
  );
}