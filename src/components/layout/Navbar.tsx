import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { MobileNav } from './MobileNav';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="font-heading font-bold text-2xl text-migrapro-bleu-ciel">
            <span className="text-migrapro-terre-cuite">Migra</span>Pro
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-gray-700 hover:text-migrapro-terre-cuite transition-colors">
            Accueil
          </Link>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-1 text-gray-700 hover:text-migrapro-terre-cuite transition-colors">
                Services <ChevronDown size={16} />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 bg-white">
              <DropdownMenuItem asChild>
                <Link to="/services/orientation" className="w-full">
                  Conseil & Orientation Professionnelle
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/services/formation" className="w-full">
                  Formation
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/services/coaching" className="w-full">
                  Coaching
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/services/pack-reussite" className="w-full">
                  Pack Réussite Pro
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/services/immigration" className="w-full">
                  Immigration & Accompagnement
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/services/recrutement" className="w-full">
                  Recrutement (Bientôt)
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link to="/a-propos" className="text-gray-700 hover:text-migrapro-terre-cuite transition-colors">
            À propos
          </Link>
          
          <Link to="/temoignages" className="text-gray-700 hover:text-migrapro-terre-cuite transition-colors">
            Témoignages
          </Link>
          
          <Link to="/blog" className="text-gray-700 hover:text-migrapro-terre-cuite transition-colors">
            Blog / Conseils
          </Link>
          
          <Link to="/contact" className="text-gray-700 hover:text-migrapro-terre-cuite transition-colors">
            Contact
          </Link>
        </div>

        {/* CTA Button */}
        <Button className="hidden md:block bg-migrapro-terre-cuite hover:bg-opacity-90 text-white">
          Réserver
        </Button>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          className="md:hidden"
          size="icon"
          onClick={() => setIsMenuOpen(true)}
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">Menu</span>
        </Button>
      </div>

      {/* Mobile Navigation */}
      <MobileNav isOpen={isMenuOpen} onOpenChange={setIsMenuOpen} />
    </nav>
  );
};

export default Navbar;
