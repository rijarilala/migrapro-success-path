
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
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);

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

  useEffect(() => {
    if (!query) {
      setFilteredResults(searchResults);
      return;
    }
    
    setIsSearching(true);
    
    const timer = setTimeout(() => {
      const results = searchResults.filter(
        item => 
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.description.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredResults(results);
      setIsSearching(false);
    }, 150);
    
    return () => clearTimeout(timer);
  }, [query]);

  const handleSelect = (item: SearchResult) => {
    setOpen(false);
    navigate(item.url);
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

      <CommandDialog open={open} onOpenChange={setOpen}>
        <div role="search">
          <CommandInput 
            placeholder="Rechercher un service, ex: 'CV', 'Immigration'..." 
            value={query}
            onValueChange={setQuery}
            ref={inputRef}
            aria-label="Tapez un mot-clé pour rechercher un service"
            aria-expanded={filteredResults.length > 0}
            aria-owns="search-results-listbox"
            role="combobox"
          />
        </div>
        
        <CommandList id="search-results-listbox" role="listbox">
          {isSearching ? (
            <div className="flex items-center justify-center py-6">
              <Loader2 className="h-6 w-6 animate-spin text-migrapro-terre-cuite" />
            </div>
          ) : filteredResults.length === 0 ? (
            <CommandEmpty>Aucun résultat trouvé.</CommandEmpty>
          ) : (
            <>
              <CommandGroup heading="Services">
                {filteredResults
                  .filter(item => item.category === 'service')
                  .map(item => (
                    <CommandItem 
                      key={item.id} 
                      onSelect={() => handleSelect(item)}
                      role="option"
                    >
                      <div className="flex flex-col">
                        <span>{item.title}</span>
                        <span className="text-sm text-muted-foreground">{item.description}</span>
                      </div>
                    </CommandItem>
                  ))
                }
              </CommandGroup>
              
              {filteredResults.some(item => item.category === 'pack') && (
                <>
                  <CommandSeparator />
                  <CommandGroup heading="Packs">
                    {filteredResults
                      .filter(item => item.category === 'pack')
                      .map(item => (
                        <CommandItem 
                          key={item.id} 
                          onSelect={() => handleSelect(item)}
                          role="option"
                        >
                          <div className="flex flex-col">
                            <span>{item.title}</span>
                            <span className="text-sm text-muted-foreground">{item.description}</span>
                          </div>
                        </CommandItem>
                      ))
                    }
                  </CommandGroup>
                </>
              )}
              
              {filteredResults.some(item => item.category === 'formation') && (
                <>
                  <CommandSeparator />
                  <CommandGroup heading="Formations">
                    {filteredResults
                      .filter(item => item.category === 'formation')
                      .map(item => (
                        <CommandItem 
                          key={item.id} 
                          onSelect={() => handleSelect(item)}
                          role="option"
                        >
                          <div className="flex flex-col">
                            <span>{item.title}</span>
                            <span className="text-sm text-muted-foreground">{item.description}</span>
                          </div>
                        </CommandItem>
                      ))
                    }
                  </CommandGroup>
                </>
              )}
              
              {filteredResults.some(item => item.category === 'coaching' || item.category === 'immigration' || item.category === 'autre') && (
                <>
                  <CommandSeparator />
                  <CommandGroup heading="Autres">
                    {filteredResults
                      .filter(item => ['coaching', 'immigration', 'autre'].includes(item.category))
                      .map(item => (
                        <CommandItem 
                          key={item.id} 
                          onSelect={() => handleSelect(item)}
                          role="option"
                        >
                          <div className="flex flex-col">
                            <span>{item.title}</span>
                            <span className="text-sm text-muted-foreground">{item.description}</span>
                          </div>
                        </CommandItem>
                      ))
                    }
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
