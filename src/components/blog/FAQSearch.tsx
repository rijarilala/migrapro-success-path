
import { useState } from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useSearch } from '@/contexts/SearchContext';

const FAQSearch = () => {
  const [localQuery, setLocalQuery] = useState('');
  const { setIsOpen, setQuery } = useSearch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (localQuery.trim()) {
      setQuery(localQuery);
      setIsOpen(true);
    }
  };

  return (
    <div className="mb-8">
      <form onSubmit={handleSubmit} className="flex gap-2">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
          <Input 
            type="text"
            placeholder="Rechercher dans notre FAQ..." 
            value={localQuery}
            onChange={e => setLocalQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        <Button type="submit">Rechercher</Button>
      </form>
      <div className="mt-2 text-center text-xs text-gray-500">
        Utilisez notre barre de recherche pour trouver rapidement des réponses à vos questions.
      </div>
    </div>
  );
};

export default FAQSearch;
