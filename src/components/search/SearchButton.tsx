
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useSearch } from '@/contexts/SearchContext';

interface SearchButtonProps {
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  className?: string;
}

export function SearchButton({ variant = 'outline', size = 'icon', className }: SearchButtonProps) {
  const { setIsOpen } = useSearch();

  return (
    <Button
      variant={variant}
      size={size}
      className={className}
      onClick={() => setIsOpen(true)}
    >
      <Search className="h-4 w-4" />
      <span className="sr-only">Rechercher</span>
    </Button>
  );
}
