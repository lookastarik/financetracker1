"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import { CategoryList } from "@/components/CategoryList";
import { Category, CategoryType } from "@/types";

interface CategoryCardProps {
  title: string;
  type: CategoryType;
  total: number;
  percentageChange: number;
  categories: Category[];
  onDelete: (type: CategoryType, id: number) => void;
}

export function CategoryCard({
  title,
  type,
  total,
  percentageChange,
  categories,
  onDelete,
}: CategoryCardProps) {
  const Icon = type === 'income' ? ArrowUpRight : ArrowDownRight;
  const iconColor = type === 'income' ? 'text-green-500' : 'text-red-500';

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <Icon className={`h-4 w-4 ${iconColor}`} />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{total.toLocaleString()} ₽</div>
        <div className="text-xs text-muted-foreground">
          {percentageChange > 0 ? '+' : ''}{percentageChange}% с прошлого месяца
        </div>
        <CategoryList
          categories={categories}
          type={type}
          onDelete={onDelete}
        />
      </CardContent>
    </Card>
  );
}