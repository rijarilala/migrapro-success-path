
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, ChevronDown, User, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator } from '@/components/ui/dropdown-menu';
import { MobileNav } from './MobileNav';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import SearchCommand from '@/components/search/SearchCommand';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isAuthenticated, user } = useAuth();
  const navigate = useNavigate();
  const { t } = useTranslation();

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

  return <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="font-heading font-bold text-2xl text-succespath-bleu-ciel">
            <span className="text-migrapro-terre-cuite">UMEGREAT</span>Pro
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-gray-700 hover:text-migrapro-terre-cuite transition-colors">
            {t('navbar.home')}
          </Link>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-1 text-gray-700 hover:text-migrapro-terre-cuite transition-colors">
                {t('navbar.services')} <ChevronDown size={16} />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 bg-white">
              {/* Keep existing menu items */}
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
                <Link to="/services/etudes-canada" className="w-full">
                  Études au Canada
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
                <Link to="/services/recrutement" className="w-full">
                  Recrutement (Bientôt)
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link to="/a-propos" className="text-gray-700 hover:text-migrapro-terre-cuite transition-colors">
            {t('navbar.about')}
          </Link>
          
          <Link to="/temoignages" className="text-gray-700 hover:text-migrapro-terre-cuite transition-colors">
            {t('navbar.testimonials')}
          </Link>
          
          <Link to="/blog" className="text-gray-700 hover:text-migrapro-terre-cuite transition-colors">
            {t('navbar.faq')}
          </Link>
          
          <Link to="/contact" className="text-gray-700 hover:text-migrapro-terre-cuite transition-colors">
            {t('navbar.contact')}
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-4">
          {/* Language Switcher */}
          <LanguageSwitcher />
          
          {/* Search Component - réduction de la taille */}
          <SearchCommand className="w-40" />

          {/* User Menu or CTA Button */}
          {isAuthenticated ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span className="hidden lg:inline">{user?.email}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout} className="text-red-600">
                  <LogOut className="mr-2 h-4 w-4" />
                  Déconnexion
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link to="/auth">
              <Button className="bg-migrapro-terre-cuite hover:bg-opacity-90 text-white">
                {t('navbar.login')}
              </Button>
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          {/* Language Switcher for Mobile */}
          <LanguageSwitcher variant="minimal" />
          
          <SearchCommand />
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(true)}>
            <Menu className="h-6 w-6" />
            <span className="sr-only">Menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <MobileNav isOpen={isMenuOpen} onOpenChange={setIsMenuOpen} />
    </nav>;
};

export default Navbar;
