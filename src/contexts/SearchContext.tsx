
import { createContext, useContext, useState, ReactNode, useCallback } from 'react';
import { SearchResult, searchAll, groupSearchResults } from '@/services/searchService';
import { useDebounce } from '@/hooks/use-debounce';
import { useToast } from '@/components/ui/use-toast';
import { useNavigate } from 'react-router-dom';

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

  // Enhanced result click handler with navigation
  const handleResultClick = useCallback((result: SearchResult) => {
    // Close the search dialog
    setIsOpen(false);
    
    // Clear the search
    clearSearch();
    
    // Handle navigation based on result type
    setTimeout(() => {
      switch (result.type) {
        case 'formation':
          // Navigate to formation page with modal parameter
          toast({
            title: "Redirection",
            description: `Navigation vers la formation: ${result.title}`,
            duration: 2000,
          });
          navigate(`/services/formation?showModal=${result.formationId}`);
          break;
          
        case 'faq':
          // Navigate to FAQ page with category and question parameters
          toast({
            title: "Redirection",
            description: `Navigation vers la FAQ: ${result.question}`,
            duration: 2000,
          });
          navigate(`/blog?category=${result.faqCategory}&question=${result.id}`);
          break;
          
        case 'page':
          // Simple page navigation
          toast({
            title: "Redirection",
            description: `Navigation vers: ${result.title}`,
            duration: 2000,
          });
          navigate(result.path);
          break;
          
        default:
          toast({
            title: "Information",
            description: "Redirection non disponible pour ce type de résultat.",
            duration: 3000,
          });
      }
    }, 100); // Small delay to ensure the dialog closes first
  }, [clearSearch, navigate, toast]);

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
