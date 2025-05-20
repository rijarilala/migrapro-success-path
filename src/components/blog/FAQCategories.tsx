
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const categories = [
  { id: "general", name: "Général" },
  { id: "orientation", name: "Orientation" },
  { id: "formation", name: "Formation" },
  { id: "immigration", name: "Immigration" },
  { id: "etudes", name: "Études" },
  { id: "coaching", name: "Coaching" }
];

interface FAQCategoriesProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const FAQCategories = ({ activeCategory, onCategoryChange }: FAQCategoriesProps) => {
  return (
    <div className="w-full flex justify-center mb-8 overflow-x-auto">
      <div className="bg-gray-50 rounded-lg p-2 inline-flex">
        <ToggleGroup type="single" value={activeCategory} onValueChange={value => {
          if (value) onCategoryChange(value);
        }}>
          {categories.map((category) => (
            <ToggleGroupItem 
              key={category.id} 
              value={category.id}
              aria-label={`Filtrer par ${category.name}`}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                activeCategory === category.id 
                  ? "bg-migrapro-terre-cuite text-white"
                  : "hover:bg-gray-100"
              }`}
            >
              {category.name}
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
      </div>
    </div>
  );
};

export default FAQCategories;
