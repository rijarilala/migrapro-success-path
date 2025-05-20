
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
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const SearchProvider = ({ children }: { children: ReactNode }) => {
  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // Logique de recherche avec effet de bord
  useEffect(() => {
    if (!query || query.length < 2) {
      setResults([]);
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    
    // Délai pour éviter trop de requêtes pendant la saisie (debounce)
    const timer = setTimeout(() => {
      try {
        const searchResults = searchData(query);
        setResults(searchResults);
      } catch (error) {
        console.error("Erreur de recherche:", error);
        setResults([]);
      } finally {
        setIsLoading(false);
      }
    }, 200);

    return () => clearTimeout(timer);
  }, [query]);

  // Mise à jour de la requête de recherche
  const updateQuery = (newQuery: string) => {
    setQuery(newQuery);
    if (newQuery.trim()) {
      setIsOpen(true);
    }
  };

  // Réinitialisation de la recherche
  const clearSearch = () => {
    setQuery("");
    setResults([]);
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
        clearSearch
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
