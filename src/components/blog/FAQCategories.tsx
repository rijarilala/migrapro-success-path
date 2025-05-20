
import { useState } from "react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useIsMobile } from "@/hooks/use-mobile";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
  const isMobile = useIsMobile();

  return (
    <div className="w-full flex justify-center mb-6 md:mb-8 overflow-x-auto pb-2">
      {isMobile ? (
        <Tabs 
          defaultValue={activeCategory} 
          onValueChange={value => {
            if (value) onCategoryChange(value);
          }}
          className="w-full"
        >
          <TabsList className="w-full h-auto flex overflow-x-auto py-1 bg-gray-50 gap-1">
            {categories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className={`flex-shrink-0 px-3 py-1.5 text-xs whitespace-nowrap ${
                  activeCategory === category.id 
                    ? "bg-migrapro-terre-cuite text-white"
                    : ""
                }`}
              >
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      ) : (
        <div className="bg-gray-50 rounded-lg p-2 inline-flex">
          <ToggleGroup 
            type="single" 
            value={activeCategory} 
            onValueChange={value => {
              if (value) onCategoryChange(value);
            }}
          >
            {categories.map((category) => (
              <ToggleGroupItem 
                key={category.id} 
                value={category.id}
                aria-label={`Filtrer par ${category.name}`}
                className={`px-4 md:px-6 py-2 rounded-md text-sm font-medium transition-all ${
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
      )}
    </div>
  );
};

export default FAQCategories;
