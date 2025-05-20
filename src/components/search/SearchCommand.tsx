
import { useState, useEffect, useRef, KeyboardEvent } from 'react';
import { Command } from 'cmdk';
import { Search, Loader2, X } from 'lucide-react';
import { useSearch } from '@/contexts/SearchContext';
import { cn } from '@/lib/utils';
import { highlightMatch, getAvailableCategories } from '@/services/searchService';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';
import { SearchableFormation, SearchableFAQ, SearchablePage } from '@/services/searchService';

interface SearchCommandProps {
  className?: string;
}

const SearchCommand = ({ className }: SearchCommandProps) => {
  const { t } = useTranslation();
  const { 
    isOpen, 
    setIsOpen, 
    query, 
    setQuery, 
    results, 
    groupedResults, 
    isLoading, 
    clearSearch,
    selectedCategory,
    setSelectedCategory,
    handleResultClick
  } = useSearch();
  const inputRef = useRef<HTMLInputElement>(null);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [availableCategories, setAvailableCategories] = useState<string[]>([]);

  // Extraire les catégories disponibles des résultats
  useEffect(() => {
    if (results.length > 0) {
      setAvailableCategories(getAvailableCategories(results));
    } else {
      setAvailableCategories([]);
    }
  }, [results]);

  // Réinitialiser l'index sélectionné lorsque les résultats changent
  useEffect(() => {
    setSelectedIndex(-1);
  }, [results]);

  // Focus sur l'input quand le dialog s'ouvre
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  // Type guard functions to check result types
  const isFormation = (result: any): result is SearchableFormation => {
    return result.type === 'formation';
  };

  const isPage = (result: any): result is SearchablePage => {
    return result.type === 'page';
  };

  const isFAQ = (result: any): result is SearchableFAQ => {
    return result.type === 'faq';
  };

  // Get displayable title for any type of result
  const getDisplayTitle = (result: any) => {
    if (isFAQ(result)) {
      return result.question;
    } else if (isFormation(result) || isPage(result)) {
      return result.title;
    }
    return '';
  };

  // Obtenir une description détaillée pour les toasts
  const getResultDescription = (result: any) => {
    if (isFormation(result)) {
      return `Formation: ${result.title} (${result.category})`;
    } else if (isFAQ(result)) {
      return `FAQ: ${result.question}`;
    } else if (isPage(result)) {
      return `Page: ${result.title}`;
    }
    return 'Élément trouvé';
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    // Navigation avec les flèches
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault();
      
      const flatResults = Object.values(groupedResults).flat();
      if (flatResults.length === 0) return;
      
      if (e.key === 'ArrowDown') {
        setSelectedIndex(prev => (prev + 1) % flatResults.length);
      } else {
        setSelectedIndex(prev => (prev <= 0 ? flatResults.length - 1 : prev - 1));
      }
    }
    
    // Sélection avec Entrée
    if (e.key === 'Enter' && selectedIndex >= 0) {
      const flatResults = Object.values(groupedResults).flat();
      if (flatResults[selectedIndex]) {
        handleResultClick(flatResults[selectedIndex]);
      }
    }
  };

  const filteredResults = selectedCategory 
    ? Object.fromEntries(
        Object.entries(groupedResults).map(([type, items]) => [
          type,
          items.filter(item => 
            (isFormation(item) || isFAQ(item)) && item.category === selectedCategory
          )
        ])
      )
    : groupedResults;
  
  // Compter le nombre total de résultats
  const totalResults = Object.values(filteredResults).reduce(
    (sum, items) => sum + items.length, 
    0
  );

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            "relative w-full justify-start text-sm text-muted-foreground md:w-64 lg:w-80",
            className
          )}
          onClick={() => setIsOpen(true)}
        >
          <Search className="mr-2 h-4 w-4" />
          <span>{t('hero.searchPlaceholder')}</span>
        </Button>
      </DialogTrigger>
      <DialogContent 
        className="p-0 gap-0" 
        onKeyDown={handleKeyDown}
        aria-describedby="search-description"
      >
        <DialogTitle className="sr-only">Recherche</DialogTitle>
        <DialogDescription id="search-description" className="sr-only">
          Recherchez des formations, des pages ou des FAQ
        </DialogDescription>
        
        <div className="flex flex-col">
          <Command className="rounded-lg border shadow-md">
            <div className="flex items-center px-3 border-b">
              <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
                placeholder={t('hero.searchPlaceholder')}
              />
              {isLoading && <Loader2 className="h-4 w-4 animate-spin" />}
              {query && !isLoading && (
                <X 
                  className="h-4 w-4 opacity-50 cursor-pointer hover:opacity-100" 
                  onClick={clearSearch}
                />
              )}
            </div>

            {query.length > 0 && (
              <div className="max-h-[80vh] overflow-y-auto">
                {/* Affichage des filtres de catégorie */}
                {availableCategories.length > 0 && (
                  <div className="border-b px-3 py-2">
                    <div className="flex gap-2 flex-wrap">
                      <Button
                        size="sm"
                        variant={selectedCategory === null ? "secondary" : "outline"}
                        className="text-xs h-7 rounded-full"
                        onClick={() => setSelectedCategory(null)}
                      >
                        Tous
                      </Button>
                      {availableCategories.map((category) => (
                        <Button
                          key={category}
                          size="sm"
                          variant={selectedCategory === category ? "secondary" : "outline"}
                          className="text-xs h-7 rounded-full"
                          onClick={() => setSelectedCategory(category)}
                        >
                          {category}
                        </Button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Message indiquant le nombre de résultats */}
                <div className="py-2 px-3 text-xs text-muted-foreground">
                  {totalResults === 0 ? (
                    <p>Aucun résultat trouvé</p>
                  ) : (
                    <p>{totalResults} résultat{totalResults > 1 ? 's' : ''} trouvé{totalResults > 1 ? 's' : ''}</p>
                  )}
                </div>

                {/* Section Formations */}
                {filteredResults.formation && filteredResults.formation.length > 0 && (
                  <div className="px-1 py-1.5">
                    <div className="px-2 py-1.5 text-xs font-semibold">Formations</div>
                    {filteredResults.formation.map((item, index) => {
                      const globalIndex = Object.values(filteredResults)
                        .flat()
                        .findIndex(r => r === item);
                      
                      return (
                        <div
                          key={`formation-${index}`}
                          className={cn(
                            "px-2 py-1.5 text-sm rounded-sm cursor-pointer flex flex-col relative",
                            selectedIndex === globalIndex ? "bg-accent text-accent-foreground" : "hover:bg-accent hover:text-accent-foreground"
                          )}
                          onClick={() => handleResultClick(item)}
                          title={`Cliquez pour ouvrir la formation "${getDisplayTitle(item)}"`}
                        >
                          <div dangerouslySetInnerHTML={{ __html: highlightMatch(getDisplayTitle(item), query) }} />
                          {isFormation(item) && (
                            <div className="text-xs text-muted-foreground">
                              Catégorie: {item.category}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}

                {/* Section Pages */}
                {filteredResults.page && filteredResults.page.length > 0 && (
                  <div className="px-1 py-1.5">
                    <div className="px-2 py-1.5 text-xs font-semibold">Pages</div>
                    {filteredResults.page.map((item, index) => {
                      const globalIndex = Object.values(filteredResults)
                        .flat()
                        .findIndex(r => r === item);
                      
                      return (
                        <div
                          key={`page-${index}`}
                          className={cn(
                            "px-2 py-1.5 text-sm rounded-sm cursor-pointer",
                            selectedIndex === globalIndex ? "bg-accent text-accent-foreground" : "hover:bg-accent hover:text-accent-foreground"
                          )}
                          onClick={() => handleResultClick(item)}
                          title={`Cliquez pour accéder à la page "${getDisplayTitle(item)}"`}
                        >
                          <div dangerouslySetInnerHTML={{ __html: highlightMatch(getDisplayTitle(item), query) }} />
                        </div>
                      );
                    })}
                  </div>
                )}

                {/* Section FAQ */}
                {filteredResults.faq && filteredResults.faq.length > 0 && (
                  <div className="px-1 py-1.5">
                    <div className="px-2 py-1.5 text-xs font-semibold">FAQ</div>
                    {filteredResults.faq.map((item, index) => {
                      const globalIndex = Object.values(filteredResults)
                        .flat()
                        .findIndex(r => r === item);
                      
                      return (
                        <div
                          key={`faq-${index}`}
                          className={cn(
                            "px-2 py-1.5 text-sm rounded-sm cursor-pointer flex flex-col",
                            selectedIndex === globalIndex ? "bg-accent text-accent-foreground" : "hover:bg-accent hover:text-accent-foreground"
                          )}
                          onClick={() => handleResultClick(item)}
                          title={`Cliquez pour accéder à la FAQ "${getDisplayTitle(item)}"`}
                        >
                          <div dangerouslySetInnerHTML={{ __html: highlightMatch(getDisplayTitle(item), query) }} />
                          {isFAQ(item) && (
                            <div className="text-xs text-muted-foreground">
                              {item.answer.length > 70 
                                ? item.answer.substring(0, 70) + '...' 
                                : item.answer}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}

                {/* Message si aucun résultat après filtrage */}
                {totalResults === 0 && (
                  <div className="py-6 text-center">
                    <p className="text-sm text-muted-foreground">Aucun résultat trouvé</p>
                    {selectedCategory && (
                      <Button 
                        variant="link" 
                        className="mt-2" 
                        onClick={() => setSelectedCategory(null)}
                      >
                        Voir tous les résultats
                      </Button>
                    )}
                  </div>
                )}
              </div>
            )}
          </Command>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SearchCommand;
