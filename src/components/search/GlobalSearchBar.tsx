
import { useEffect, useRef } from "react";
import { Search, X, Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useSearch } from "@/contexts/SearchContext";
import { 
  Dialog, 
  DialogContent,
  DialogTrigger
} from "@/components/ui/dialog";
import { CommandDialog, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem } from "@/components/ui/command";
import { useTranslation } from "react-i18next";

export const GlobalSearchBar = () => {
  const {
    query,
    results,
    isLoading,
    isOpen,
    setIsOpen,
    updateQuery,
    clearSearch
  } = useSearch();
  
  const navigate = useNavigate();
  const { t } = useTranslation();
  const inputRef = useRef<HTMLInputElement>(null);

  // Gestion du raccourci clavier (Ctrl+K / Cmd+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen(true);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [setIsOpen]);

  // Gestion de la fermeture
  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (!open) {
      clearSearch();
    }
  };

  // Navigation vers le résultat sélectionné
  const handleResultClick = (url: string) => {
    navigate(url);
    setIsOpen(false);
    clearSearch();
  };

  // Regroupement des résultats par catégorie
  const serviceResults = results.filter(result => result.category === "service");
  const formationResults = results.filter(result => result.category === "formation");
  const pageResults = results.filter(result => result.category === "page");
  const faqResults = results.filter(result => result.category === "faq");

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
        <CommandList>
          <CommandEmpty>
            {isLoading ? (
              <div className="py-6 text-center flex flex-col items-center">
                <Loader2 className="h-8 w-8 animate-spin opacity-60 mb-2" />
                <p>{t("search.searching")}</p>
              </div>
            ) : (
              <p>{t("search.no_results")}</p>
            )}
          </CommandEmpty>

          {/* Services */}
          {serviceResults.length > 0 && (
            <CommandGroup heading={t("search.categories.services")}>
              {serviceResults.map((result) => (
                <CommandItem 
                  key={result.id} 
                  onSelect={() => result.url && handleResultClick(result.url)}
                  className="cursor-pointer"
                >
                  <div className="flex flex-col">
                    <p className="font-medium">{result.title}</p>
                    <p className="text-sm text-muted-foreground">{result.description}</p>
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
          )}

          {/* Formations */}
          {formationResults.length > 0 && (
            <CommandGroup heading={t("search.categories.formations")}>
              {formationResults.map((result) => (
                <CommandItem 
                  key={result.id} 
                  onSelect={() => result.url && handleResultClick(result.url)}
                  className="cursor-pointer"
                >
                  <div className="flex flex-col">
                    <p className="font-medium">{result.title}</p>
                    <p className="text-sm text-muted-foreground">{result.description}</p>
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
          )}

          {/* Pages */}
          {pageResults.length > 0 && (
            <CommandGroup heading={t("search.categories.pages")}>
              {pageResults.map((result) => (
                <CommandItem 
                  key={result.id} 
                  onSelect={() => result.url && handleResultClick(result.url)}
                  className="cursor-pointer"
                >
                  <div className="flex flex-col">
                    <p className="font-medium">{result.title}</p>
                    <p className="text-sm text-muted-foreground">{result.description}</p>
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
          )}

          {/* FAQ */}
          {faqResults.length > 0 && (
            <CommandGroup heading={t("search.categories.faq")}>
              {faqResults.map((result) => (
                <CommandItem 
                  key={result.id} 
                  onSelect={() => result.url && handleResultClick(result.url)}
                  className="cursor-pointer"
                >
                  <div className="flex flex-col">
                    <p className="font-medium">{result.title}</p>
                    <p className="text-sm text-muted-foreground">{result.description}</p>
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
          )}
        </CommandList>
      </CommandDialog>
    </>
  );
};

export default GlobalSearchBar;
