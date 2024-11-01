"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PlusCircle } from 'lucide-react';
import { CategoryType } from '@/types';

interface CategoryManagementProps {
  onAddCategory: (type: CategoryType) => void;
}

export function CategoryManagement({ onAddCategory }: CategoryManagementProps) {
  return (
    <Card className="md:col-span-2">
      <CardHeader>
        <CardTitle>Управление Категориями</CardTitle>
        <CardDescription>
          Добавляйте и удаляйте категории доходов и расходов
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex gap-4">
          <Button 
            onClick={() => onAddCategory('income')}
            className="flex items-center gap-2"
          >
            <PlusCircle className="h-4 w-4" />
            Добавить доход
          </Button>
          <Button 
            variant="outline"
            onClick={() => onAddCategory('expense')}
            className="flex items-center gap-2"
          >
            <PlusCircle className="h-4 w-4" />
            Добавить расход
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}