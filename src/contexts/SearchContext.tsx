
import { createContext, useContext, useState, ReactNode, useCallback } from 'react';
import { SearchResult, searchAll, groupSearchResults } from '@/services/searchService';
import { useDebounce } from '@/hooks/use-debounce';
import { useNavigate } from 'react-router-dom';
import { toast } from '@/hooks/use-toast';

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
  handleResultClick: (result: SearchResult) => void; // Méthode pour gérer les clics sur les résultats
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export function SearchProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQueryRaw] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [groupedResults, setGroupedResults] = useState<Record<string, SearchResult[]>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const navigate = useNavigate();

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

  // Méthode améliorée pour gérer les clics sur les résultats avec navigation intelligente
  const handleResultClick = useCallback((result: SearchResult) => {
    // Déterminer l'URL en fonction du type de résultat et naviguer
    let url = '';
    let toastMessage = '';
    
    switch (result.type) {
      case 'formation':
        // Pour les formations, naviguer vers la page de formation avec l'ID dans le hash
        url = `/services/formation#${(result as any).formationId}`;
        toastMessage = `Redirection vers la formation: ${result.title}`;
        break;
      case 'page':
        url = (result as any).path;
        break;
      case 'faq':
        url = `/blog?category=${(result as any).faqCategory}&question=${result.id}`;
        toastMessage = `Redirection vers la FAQ: ${(result as any).question}`;
        break;
      default:
        url = '/';
    }

    // Fermer le dialogue de recherche
    setIsOpen(false);
    
    // Effacer la recherche
    clearSearch();
    
    // Afficher un toast informatif
    if (toastMessage) {
      toast({
        title: "Redirection en cours",
        description: toastMessage,
        duration: 3000,
      });
    }
    
    // Naviguer vers l'URL
    navigate(url);
  }, [navigate, clearSearch, toast]);

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
