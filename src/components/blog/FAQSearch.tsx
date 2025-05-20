
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

const FAQSearch = () => {
  return (
    <div className="mb-8">
      <div className="text-center">
        <Button variant="outline" className="w-full max-w-md" disabled>
          <Search className="mr-2 h-4 w-4" />
          <span>La recherche de FAQ est temporairement indisponible</span>
        </Button>
      </div>
    </div>
  );
};

export default FAQSearch;
