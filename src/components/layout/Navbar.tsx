
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
        <button
          className="md:hidden text-gray-700 p-2"
          onClick={toggleMenu}
          aria-label="Menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white pb-4 px-4 shadow-lg animate-fade-in">
          <div className="flex flex-col gap-4">
            <Link 
              to="/"
              className="py-2 border-b border-gray-100 text-gray-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Accueil
            </Link>
            
            <div className="py-2 border-b border-gray-100">
              <div className="font-medium text-gray-700 mb-2">Services</div>
              <div className="pl-4 flex flex-col gap-2">
                <Link 
                  to="/services/orientation" 
                  className="text-gray-600 py-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Conseil & Orientation
                </Link>
                <Link 
                  to="/services/formation" 
                  className="text-gray-600 py-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Formation
                </Link>
                <Link 
                  to="/services/coaching" 
                  className="text-gray-600 py-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Coaching
                </Link>
                <Link 
                  to="/services/pack-reussite" 
                  className="text-gray-600 py-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Pack Réussite Pro
                </Link>
                <Link 
                  to="/services/immigration" 
                  className="text-gray-600 py-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Immigration Canada
                </Link>
                <Link 
                  to="/services/recrutement" 
                  className="text-gray-600 py-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Recrutement (Bientôt)
                </Link>
              </div>
            </div>
            
            <Link 
              to="/a-propos" 
              className="py-2 border-b border-gray-100 text-gray-700"
              onClick={() => setIsMenuOpen(false)}
            >
              À propos
            </Link>
            
            <Link 
              to="/temoignages" 
              className="py-2 border-b border-gray-100 text-gray-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Témoignages
            </Link>
            
            <Link 
              to="/blog" 
              className="py-2 border-b border-gray-100 text-gray-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog / Conseils
            </Link>
            
            <Link 
              to="/contact" 
              className="py-2 border-b border-gray-100 text-gray-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            
            <Button className="bg-migrapro-terre-cuite hover:bg-opacity-90 text-white mt-2">
              Réserver
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
