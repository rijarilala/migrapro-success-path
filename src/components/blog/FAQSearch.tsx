
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const FAQSearch = () => {
  return (
    <div className="mb-8">
      <div className="relative">
        <Input
          type="search"
          placeholder="Rechercher une question..."
          className="pl-10"
        />
        <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
      </div>
    </div>
  );
};

export default FAQSearch;
