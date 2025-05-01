
import { Button } from "@/components/ui/button";

const categories = [
  { name: "Immigration", count: 12 },
  { name: "Études", count: 8 },
  { name: "Orientation carrière", count: 9 },
  { name: "Documents & formulaires", count: 6 },
  { name: "Installation", count: 7 }
];

const FAQCategories = () => {
  return (
    <div className="bg-gray-50 p-6 rounded-lg">
      <h2 className="text-lg font-semibold mb-4">Catégories</h2>
      <div className="space-y-2">
        {categories.map((category) => (
          <Button
            key={category.name}
            variant="ghost"
            className="w-full justify-between"
          >
            <span>{category.name}</span>
            <span className="bg-gray-200 text-gray-600 px-2 py-1 rounded-full text-xs">
              {category.count}
            </span>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default FAQCategories;
