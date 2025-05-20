
import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { searchData } from "@/services/searchService";
import type { SearchResult } from "@/types/search";

interface SearchContextType {
  query: string;
  results: SearchResult[];
  isLoading: boolean;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  updateQuery: (query: string) => void;
  clearSearch: () => void;
  selectedCategory: string | null;
  setSelectedCategory: (category: string | null) => void;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const SearchProvider = ({ children }: { children: ReactNode }) => {
  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Logique de recherche avec effet de bord et debounce plus court pour une réactivité instantanée
  useEffect(() => {
    if (!query || query.length < 1) { // Recherche dès le premier caractère
      setResults([]);
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    
    // Délai très court pour une recherche quasi-instantanée (50ms)
    const timer = setTimeout(() => {
      try {
        const searchResults = searchData(query, selectedCategory);
        setResults(searchResults);
      } catch (error) {
        console.error("Erreur de recherche:", error);
        setResults([]);
      } finally {
        setIsLoading(false);
      }
    }, 50); // Délai encore plus court pour une expérience totalement instantanée

    return () => clearTimeout(timer);
  }, [query, selectedCategory]);

  // Mise à jour de la requête de recherche
  const updateQuery = (newQuery: string) => {
    setQuery(newQuery);
    if (newQuery.trim()) {
      setIsOpen(true);
    } else if (newQuery.trim() === '') {
      setResults([]);
    }
  };

  // Réinitialisation de la recherche
  const clearSearch = () => {
    setQuery("");
    setResults([]);
    setSelectedCategory(null);
  };

  return (
    <SearchContext.Provider
      value={{
        query,
        results,
        isLoading,
        isOpen,
        setIsOpen,
        updateQuery,
        clearSearch,
        selectedCategory,
        setSelectedCategory
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => {
  const context = useContext(SearchContext);
  
  if (context === undefined) {
    throw new Error("useSearch must be used within a SearchProvider");
  }
  
  return context;
};
