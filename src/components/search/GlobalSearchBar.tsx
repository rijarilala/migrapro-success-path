
import { useEffect, useRef, useState } from "react";
import { Search, X, Loader2, Filter } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useSearch } from "@/contexts/SearchContext";
import { CommandDialog, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem } from "@/components/ui/command";
import { useTranslation } from "react-i18next";
import { Badge } from "@/components/ui/badge";

export const GlobalSearchBar = () => {
  const {
    query,
    results,
    isLoading,
    isOpen,
    setIsOpen,
    updateQuery,
    clearSearch,
    selectedCategory,
    setSelectedCategory
  } = useSearch();
  
  const navigate = useNavigate();
  const { t } = useTranslation();
  const inputRef = useRef<HTMLInputElement>(null);
  const [activeIndex, setActiveIndex] = useState<number>(-1);

  // Gestion du raccourci clavier (Ctrl+K / Cmd+K) et navigation avec flèches
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen(true);
      }

      if (isOpen) {
        // Navigation avec flèches
        if (e.key === 'ArrowDown') {
          e.preventDefault();
          setActiveIndex((prev) => Math.min(prev + 1, results.length - 1));
        } else if (e.key === 'ArrowUp') {
          e.preventDefault();
          setActiveIndex((prev) => Math.max(prev - 1, -1));
        } else if (e.key === 'Enter' && activeIndex >= 0 && activeIndex < results.length) {
          e.preventDefault();
          const selectedResult = results[activeIndex];
          if (selectedResult && selectedResult.url) {
            handleResultClick(selectedResult.url);
          }
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, setIsOpen, results, activeIndex]);

  // Focus automatique sur le champ de recherche lors de l'ouverture
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 10);
    } else {
      setActiveIndex(-1); // Réinitialisation de l'index actif
    }
  }, [isOpen]);

  // Navigation vers le résultat sélectionné
  const handleResultClick = (url: string) => {
    navigate(url);
    setIsOpen(false);
    clearSearch();
  };

  // Gestion de la fermeture sans suppression des résultats
  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (!open && !query) {
      clearSearch();
    }
  };

  // Gestion du filtrage par catégorie
  const handleCategoryFilter = (category: string | null) => {
    if (selectedCategory === category) {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(category);
    }
    // Refocus sur le champ de recherche après le filtrage
    setTimeout(() => {
      inputRef.current?.focus();
    }, 10);
  };

  // Regroupement des résultats par catégorie
  const serviceResults = results.filter(result => result.category === "service");
  const formationResults = results.filter(result => result.category === "formation");
  const pageResults = results.filter(result => result.category === "page");
  const faqResults = results.filter(result => result.category === "faq");

  // Calcul des indices pour la navigation clavier
  const calculateGlobalIndex = (categoryIndex: number, itemIndex: number): number => {
    let globalIndex = 0;
    
    if (categoryIndex > 0) globalIndex += serviceResults.length;
    if (categoryIndex > 1) globalIndex += formationResults.length;
    if (categoryIndex > 2) globalIndex += pageResults.length;
    
    return globalIndex + itemIndex;
  };

  return (
    <>
      {/* Bouton déclencheur de la recherche */}
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 text-sm px-3 py-2 rounded-md border hover:bg-accent"
        aria-label={t("search.search")}
      >
        <Search className="h-4 w-4" />
        <span className="hidden md:inline">{t("search.search")}</span>
        <kbd className="hidden md:inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground ml-auto">
          <span className="text-xs">⌘</span>K
        </kbd>
      </button>

      {/* Dialog de recherche avec CommandDialog */}
      <CommandDialog open={isOpen} onOpenChange={handleOpenChange}>
        <div className="flex items-center border-b px-3" cmdk-input-wrapper="">
          {isLoading ? (
            <Loader2 className="mr-2 h-4 w-4 shrink-0 opacity-50 animate-spin" />
          ) : (
            <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
          )}
          <CommandInput 
            ref={inputRef}
            placeholder={t("search.placeholder")} 
            value={query} 
            onValueChange={updateQuery} 
            className="flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
          />
          {query && (
            <button 
              onClick={clearSearch}
              className="rounded-md p-1 opacity-70 hover:opacity-100"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
        
        {/* Filtres de catégorie */}
        {query && (
          <div className="flex flex-wrap gap-2 p-2 border-b">
            <span className="flex items-center text-xs text-muted-foreground mr-1">
              <Filter className="h-3 w-3 mr-1" />
              {t("search.filter")}:
            </span>
            <Badge 
              variant={selectedCategory === "formation" ? "default" : "outline"} 
              className="cursor-pointer hover:bg-secondary/80"
              onClick={() => handleCategoryFilter("formation")}
            >
              {t("search.categories.formations")}
            </Badge>
            <Badge 
              variant={selectedCategory === "service" ? "default" : "outline"} 
              className="cursor-pointer hover:bg-secondary/80"
              onClick={() => handleCategoryFilter("service")}
            >
              {t("search.categories.services")}
            </Badge>
            <Badge 
              variant={selectedCategory === "page" ? "default" : "outline"} 
              className="cursor-pointer hover:bg-secondary/80"
              onClick={() => handleCategoryFilter("page")}
            >
              {t("search.categories.pages")}
            </Badge>
            <Badge 
              variant={selectedCategory === "faq" ? "default" : "outline"} 
              className="cursor-pointer hover:bg-secondary/80"
              onClick={() => handleCategoryFilter("faq")}
            >
              {t("search.categories.faq")}
            </Badge>
          </div>
        )}

        <CommandList>
          <CommandEmpty>
            {isLoading ? (
              <div className="py-6 text-center flex flex-col items-center">
                <Loader2 className="h-8 w-8 animate-spin opacity-60 mb-2" />
                <p>{t("search.searching")}</p>
              </div>
            ) : (
              <p className="py-6 text-center">{t("search.no_results")}</p>
            )}
          </CommandEmpty>

          {/* Formations (prioritaires) */}
          {formationResults.length > 0 && (
            <CommandGroup heading={t("search.categories.formations")}>
              {formationResults.map((result, index) => {
                const globalIndex = calculateGlobalIndex(1, index);
                return (
                  <CommandItem 
                    key={result.id} 
                    onSelect={() => result.url && handleResultClick(result.url)}
                    className={`cursor-pointer ${activeIndex === globalIndex ? 'bg-accent' : ''}`}
                  >
                    <div className="flex flex-col w-full">
                      <p className="font-medium">{result.title}</p>
                      <p className="text-sm text-muted-foreground">{result.description}</p>
                    </div>
                  </CommandItem>
                );
              })}
            </CommandGroup>
          )}

          {/* Services */}
          {serviceResults.length > 0 && (
            <CommandGroup heading={t("search.categories.services")}>
              {serviceResults.map((result, index) => {
                const globalIndex = calculateGlobalIndex(0, index);
                return (
                  <CommandItem 
                    key={result.id} 
                    onSelect={() => result.url && handleResultClick(result.url)}
                    className={`cursor-pointer ${activeIndex === globalIndex ? 'bg-accent' : ''}`}
                  >
                    <div className="flex flex-col">
                      <p className="font-medium">{result.title}</p>
                      <p className="text-sm text-muted-foreground">{result.description}</p>
                    </div>
                  </CommandItem>
                );
              })}
            </CommandGroup>
          )}

          {/* Pages */}
          {pageResults.length > 0 && (
            <CommandGroup heading={t("search.categories.pages")}>
              {pageResults.map((result, index) => {
                const globalIndex = calculateGlobalIndex(2, index);
                return (
                  <CommandItem 
                    key={result.id} 
                    onSelect={() => result.url && handleResultClick(result.url)}
                    className={`cursor-pointer ${activeIndex === globalIndex ? 'bg-accent' : ''}`}
                  >
                    <div className="flex flex-col">
                      <p className="font-medium">{result.title}</p>
                      <p className="text-sm text-muted-foreground">{result.description}</p>
                    </div>
                  </CommandItem>
                );
              })}
            </CommandGroup>
          )}

          {/* FAQ */}
          {faqResults.length > 0 && (
            <CommandGroup heading={t("search.categories.faq")}>
              {faqResults.map((result, index) => {
                const globalIndex = calculateGlobalIndex(3, index);
                return (
                  <CommandItem 
                    key={result.id} 
                    onSelect={() => result.url && handleResultClick(result.url)}
                    className={`cursor-pointer ${activeIndex === globalIndex ? 'bg-accent' : ''}`}
                  >
                    <div className="flex flex-col">
                      <p className="font-medium">{result.title}</p>
                      <p className="text-sm text-muted-foreground">{result.description}</p>
                    </div>
                  </CommandItem>
                );
              })}
            </CommandGroup>
          )}
        </CommandList>
      </CommandDialog>
    </>
  );
};

export default GlobalSearchBar;
