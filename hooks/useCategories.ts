"use client";

import { useState } from 'react';
import { Categories, CategoryType, Category } from '@/types';

const initialCategories: Categories = {
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
};

export function useCategories() {
  const [categories, setCategories] = useState<Categories>(initialCategories);

  const deleteCategory = (type: CategoryType, id: number) => {
    setCategories((prev) => ({
      ...prev,
      [type]: prev[type].filter((category) => category.id !== id),
    }));
  };

  const addCategory = (type: CategoryType, name: string, amount: number) => {
    setCategories((prev) => ({
      ...prev,
      [type]: [...prev[type], { id: Date.now(), name, amount }],
    }));
  };

  const getTotalAmount = (type: CategoryType) => 
    categories[type].reduce((sum, category) => sum + category.amount, 0);

  return {
    categories,
    deleteCategory,
    addCategory,
    getTotalAmount,
  };
}