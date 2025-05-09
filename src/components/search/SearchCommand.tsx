
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Loader2 } from 'lucide-react';
import {
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandSeparator
} from '@/components/ui/command';
import { Button } from '@/components/ui/button';

type SearchResult = {
  id: string;
  title: string;
  description: string;
  category: 'service' | 'pack' | 'formation' | 'coaching' | 'immigration' | 'autre';
  url: string;
}

const searchResults: SearchResult[] = [
  {
    id: '1',
    title: 'Conseil & Orientation Professionnelle',
    description: 'Trouvez votre voie professionnelle avec nos conseillers experts',
    category: 'service',
    url: '/services/orientation',
  },
  {
    id: '2',
    title: 'Formation',
    description: 'Développez vos compétences avec nos modules de formation',
    category: 'service',
    url: '/services/formation',
  },
  {
    id: '3',
    title: 'Coaching',
    description: 'Sessions personnalisées pour booster votre carrière',
    category: 'coaching',
    url: '/services/coaching',
  },
  {
    id: '4',
    title: 'Études au Canada',
    description: 'Programmes pour étudier dans les meilleures institutions canadiennes',
    category: 'service',
    url: '/services/etudes-canada',
  },
  {
    id: '5',
    title: 'Pack Réussite',
    description: 'Solution complète pour réussir votre projet professionnel',
    category: 'pack',
    url: '/services/pack-reussite',
  },
  {
    id: '6',
    title: 'Immigration & Accompagnement',
    description: 'Services complets pour votre immigration au Canada',
    category: 'immigration',
    url: '/services/immigration',
  },
  {
    id: '7',
    title: 'Recrutement',
    description: 'Opportunités d\'emploi au Canada (bientôt disponible)',
    category: 'service',
    url: '/services/recrutement',
  },
  {
    id: '8',
    title: 'CV',
    description: 'Formation pour créer un CV percutant',
    category: 'formation',
    url: '/services/formation',
  },
  {
    id: '9',
    title: 'Lettre de motivation',
    description: 'Apprenez à rédiger une lettre qui fait la différence',
    category: 'formation',
    url: '/services/formation',
  },
  {
    id: '10',
    title: 'Pack Insertion Pro',
    description: 'Ensemble complet pour préparer votre insertion professionnelle',
    category: 'pack',
    url: '/services/formation',
  },
  {
    id: '11',
    title: 'Test d\'éligibilité',
    description: 'Vérifiez votre éligibilité à l\'immigration canadienne',
    category: 'immigration',
    url: '/services/eligibility',
  }
];

interface SearchCommandProps {
  className?: string;
}

export default function SearchCommand({ className }: SearchCommandProps) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [filteredResults, setFilteredResults] = useState<SearchResult[]>([]);
  const [activeItemIndex, setActiveItemIndex] = useState<number>(-1);
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  // Initialize with all results
  useEffect(() => {
    setFilteredResults(searchResults);
  }, []);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.key === 'k' && (e.metaKey || e.ctrlKey)) || e.key === '/') {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  // Handle filtering results in real-time
  useEffect(() => {
    // Always show all results when query is empty
    if (!query) {
      setFilteredResults(searchResults);
      setIsSearching(false);
      return;
    }
    
    setIsSearching(true);
    
    // Use debounce for better performance
    const timer = setTimeout(() => {
      const results = searchResults.filter(
        item => 
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.description.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredResults(results);
      setIsSearching(false);
      
      // Reset active item when results change
      setActiveItemIndex(-1);
    }, 150); // Short debounce for responsive feel
    
    return () => clearTimeout(timer);
  }, [query]);

  const handleSelect = (item: SearchResult) => {
    setOpen(false);
    setQuery("");
    navigate(item.url);
  };

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!filteredResults.length) return;
    
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setActiveItemIndex(prev => 
          prev < filteredResults.length - 1 ? prev + 1 : 0
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        setActiveItemIndex(prev => 
          prev > 0 ? prev - 1 : filteredResults.length - 1
        );
        break;
      case 'Enter':
        e.preventDefault();
        if (activeItemIndex >= 0) {
          handleSelect(filteredResults[activeItemIndex]);
        }
        break;
      case 'Escape':
        // Let CommandDialog handle this
        setActiveItemIndex(-1);
        break;
    }
  };

  // When dialog opens, reset state and focus input
  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
    if (newOpen) {
      setQuery("");
      setFilteredResults(searchResults);
      setActiveItemIndex(-1);
      // Focus the input when dialog opens
      setTimeout(() => {
        inputRef.current?.focus();
      }, 0);
    }
  };

  // Helper function to determine if an item should be visually selected
  const isItemActive = (index: number): boolean => {
    return index === activeItemIndex;
  };

  // Group results by category
  const serviceResults = filteredResults.filter(item => item.category === 'service');
  const packResults = filteredResults.filter(item => item.category === 'pack');
  const formationResults = filteredResults.filter(item => item.category === 'formation');
  const otherResults = filteredResults.filter(item => 
    ['coaching', 'immigration', 'autre'].includes(item.category)
  );

  // Handle input changes with debounce
  const handleInputChange = (value: string) => {
    setQuery(value);
  };

  return (
    <>
      <Button 
        variant="outline" 
        className={`items-center gap-2 text-sm ${className}`}
        onClick={() => setOpen(true)}
        aria-label="Rechercher sur le site"
      >
        <Search className="h-4 w-4" />
        <span className="hidden md:inline">Rechercher...</span>
        <kbd className="hidden pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-xs font-medium text-muted-foreground md:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>

      <CommandDialog open={open} onOpenChange={handleOpenChange}>
        <div role="search" onKeyDown={handleKeyDown}>
          <CommandInput 
            placeholder="Rechercher un service, ex: 'CV', 'Immigration'..." 
            value={query}
            onValueChange={handleInputChange}
            ref={inputRef}
            aria-label="Tapez un mot-clé pour rechercher un service"
            aria-expanded={open}
            aria-owns="search-results-listbox"
            aria-activedescendant={activeItemIndex >= 0 ? `search-result-${activeItemIndex}` : undefined}
            role="combobox"
            autoFocus
          />
        </div>
        
        <CommandList 
          id="search-results-listbox" 
          role="listbox"
          ref={listRef}
          className="transition-all duration-200"
        >
          {isSearching ? (
            <div className="flex items-center justify-center py-6">
              <Loader2 className="h-6 w-6 animate-spin text-migrapro-terre-cuite" />
            </div>
          ) : filteredResults.length === 0 ? (
            <CommandEmpty>Aucun service trouvé pour "{query}".</CommandEmpty>
          ) : (
            <>
              {serviceResults.length > 0 && (
                <CommandGroup heading="Services">
                  {serviceResults.map((item, index) => {
                    const globalIndex = filteredResults.indexOf(item);
                    return (
                      <CommandItem 
                        key={item.id} 
                        onSelect={() => handleSelect(item)}
                        role="option"
                        id={`search-result-${globalIndex}`}
                        aria-selected={isItemActive(globalIndex)}
                        data-selected={isItemActive(globalIndex)}
                        className={`transition-colors duration-100 ${isItemActive(globalIndex) ? 'bg-accent text-accent-foreground' : ''}`}
                      >
                        <div className="flex flex-col">
                          <span>{item.title}</span>
                          <span className="text-sm text-muted-foreground">{item.description}</span>
                        </div>
                      </CommandItem>
                    );
                  })}
                </CommandGroup>
              )}
              
              {packResults.length > 0 && (
                <>
                  <CommandSeparator />
                  <CommandGroup heading="Packs">
                    {packResults.map((item) => {
                      const globalIndex = filteredResults.indexOf(item);
                      return (
                        <CommandItem 
                          key={item.id} 
                          onSelect={() => handleSelect(item)}
                          role="option"
                          id={`search-result-${globalIndex}`}
                          aria-selected={isItemActive(globalIndex)}
                          data-selected={isItemActive(globalIndex)}
                          className={`transition-colors duration-100 ${isItemActive(globalIndex) ? 'bg-accent text-accent-foreground' : ''}`}
                        >
                          <div className="flex flex-col">
                            <span>{item.title}</span>
                            <span className="text-sm text-muted-foreground">{item.description}</span>
                          </div>
                        </CommandItem>
                      );
                    })}
                  </CommandGroup>
                </>
              )}
              
              {formationResults.length > 0 && (
                <>
                  <CommandSeparator />
                  <CommandGroup heading="Formations">
                    {formationResults.map((item) => {
                      const globalIndex = filteredResults.indexOf(item);
                      return (
                        <CommandItem 
                          key={item.id} 
                          onSelect={() => handleSelect(item)}
                          role="option"
                          id={`search-result-${globalIndex}`}
                          aria-selected={isItemActive(globalIndex)}
                          data-selected={isItemActive(globalIndex)}
                          className={`transition-colors duration-100 ${isItemActive(globalIndex) ? 'bg-accent text-accent-foreground' : ''}`}
                        >
                          <div className="flex flex-col">
                            <span>{item.title}</span>
                            <span className="text-sm text-muted-foreground">{item.description}</span>
                          </div>
                        </CommandItem>
                      );
                    })}
                  </CommandGroup>
                </>
              )}
              
              {otherResults.length > 0 && (
                <>
                  <CommandSeparator />
                  <CommandGroup heading="Autres">
                    {otherResults.map((item) => {
                      const globalIndex = filteredResults.indexOf(item);
                      return (
                        <CommandItem 
                          key={item.id} 
                          onSelect={() => handleSelect(item)}
                          role="option" 
                          id={`search-result-${globalIndex}`}
                          aria-selected={isItemActive(globalIndex)}
                          data-selected={isItemActive(globalIndex)}
                          className={`transition-colors duration-100 ${isItemActive(globalIndex) ? 'bg-accent text-accent-foreground' : ''}`}
                        >
                          <div className="flex flex-col">
                            <span>{item.title}</span>
                            <span className="text-sm text-muted-foreground">{item.description}</span>
                          </div>
                        </CommandItem>
                      );
                    })}
                  </CommandGroup>
                </>
              )}
            </>
          )}
        </CommandList>
      </CommandDialog>
    </>
  );
}
