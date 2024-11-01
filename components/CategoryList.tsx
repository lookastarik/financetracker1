"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { Category, CategoryType } from "@/types";

interface CategoryListProps {
  categories: Category[];
  type: CategoryType;
  onDelete: (type: CategoryType, id: number) => void;
}

export function CategoryList({ categories, type, onDelete }: CategoryListProps) {
  return (
    <ScrollArea className="h-[200px] mt-4">
      {categories.map((category) => (
        <div key={category.id} className="flex items-center justify-between py-2">
          <span>{category.name}</span>
          <div className="flex items-center gap-2">
            <span className={type === 'income' ? 'text-green-500' : 'text-red-500'}>
              {category.amount.toLocaleString()} ₽
            </span>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              onClick={() => onDelete(type, category.id)}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      ))}
    </ScrollArea>
  );
}