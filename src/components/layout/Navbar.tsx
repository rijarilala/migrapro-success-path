
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, ChevronDown, User, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import { MobileNav } from './MobileNav';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isAuthenticated, user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
      toast.success('Déconnexion réussie');
      navigate('/');
    } catch (error) {
      console.error('Erreur lors de la déconnexion:', error);
      toast.error('Erreur lors de la déconnexion');
    }
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
                  Pack Réussite
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/services/immigration" className="w-full">
                  Immigration & Accompagnement
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/services/eligibility" className="w-full">
                  Test d'éligibilité
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

        {/* User Menu or CTA Button */}
        {isAuthenticated ? (
          <div className="hidden md:flex items-center gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span className="hidden lg:inline">{user?.email}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuItem asChild>
                  <Link to="/services/eligibility" className="w-full">
                    Test d'éligibilité
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout} className="text-red-600">
                  <LogOut className="mr-2 h-4 w-4" />
                  Déconnexion
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        ) : (
          <Link to="/auth">
            <Button className="hidden md:block bg-migrapro-terre-cuite hover:bg-opacity-90 text-white">
              Connexion
            </Button>
          </Link>
        )}

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
