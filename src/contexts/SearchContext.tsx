
import { createContext, useContext, useState, ReactNode, useCallback } from 'react';
import { SearchResult, searchAll, groupSearchResults } from '@/services/searchService';
import { useDebounce } from '@/hooks/use-debounce';
import { useToast } from '@/components/ui/use-toast';

interface SearchContextType {
  isOpen: boolean;
  query: string;
  results: SearchResult[];
  groupedResults: Record<string, SearchResult[]>;
  isLoading: boolean;
  selectedCategory: string | null;
  setQuery: (query: string) => void;
  setIsOpen: (isOpen: boolean) => void;
  clearSearch: () => void;
  setSelectedCategory: (category: string | null) => void;
  handleResultClick: (result: SearchResult) => void;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export function SearchProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQueryRaw] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [groupedResults, setGroupedResults] = useState<Record<string, SearchResult[]>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const { toast } = useToast();

  // Utiliser useDebounce pour éviter trop de recherches pendant la frappe
  const debouncedSearch = useDebounce(async (searchQuery: string) => {
    if (!searchQuery.trim()) {
      setResults([]);
      setGroupedResults({});
      setIsLoading(false);
      return;
    }

    try {
      const searchResults = searchAll(searchQuery);
      setResults(searchResults);
      setGroupedResults(groupSearchResults(searchResults));
    } catch (error) {
      console.error('Error during search:', error);
    } finally {
      setIsLoading(false);
    }
  }, 150); // 150ms de debounce pour une expérience instantanée

  const setQuery = useCallback((newQuery: string) => {
    setQueryRaw(newQuery);
    if (newQuery.trim()) {
      setIsLoading(true);
      debouncedSearch(newQuery);
    } else {
      setResults([]);
      setGroupedResults({});
    }
  }, [debouncedSearch]);

  const clearSearch = useCallback(() => {
    setQueryRaw('');
    setResults([]);
    setGroupedResults({});
    setSelectedCategory(null);
  }, []);

  // Gestion simplifiée des clics sur les résultats, sans redirection spécifique
  const handleResultClick = useCallback((result: SearchResult) => {
    // Fermer la boîte de dialogue de recherche
    setIsOpen(false);
    
    // Effacer la recherche
    clearSearch();
    
    // Afficher un toast générique
    toast({
      title: "Information",
      description: "La fonctionnalité de redirection spécifique a été désactivée.",
      duration: 3000,
    });
  }, [clearSearch, toast]);

  return (
    <SearchContext.Provider
      value={{
        isOpen,
        query,
        results,
        groupedResults,
        isLoading,
        selectedCategory,
        setQuery,
        setIsOpen,
        clearSearch,
        setSelectedCategory,
        handleResultClick
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
};
