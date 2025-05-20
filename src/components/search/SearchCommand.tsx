
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSearch } from "@/contexts/SearchContext";

interface SearchCommandProps {
  className?: string;
}

const SearchCommand = ({ className }: SearchCommandProps) => {
  const { setIsOpen } = useSearch();

  return (
    <Button
      variant="ghost"
      size="icon"
      className={className}
      onClick={() => setIsOpen(true)}
      aria-label="Rechercher"
    >
      <Search className="h-5 w-5" />
    </Button>
  );
};

export default SearchCommand;
