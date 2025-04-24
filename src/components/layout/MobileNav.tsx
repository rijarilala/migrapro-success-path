import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { 
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { 
  Home, 
  BookOpen, 
  GraduationCap, 
  Target, 
  PackageCheck, 
  Plane, 
  Users,
  Info,
  MessageSquare,
  NewspaperIcon,
  ChevronDown,
  X,
  LogOut
} from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { useAuth } from '@/hooks/useAuth';

export const MobileNav = ({ isOpen, onOpenChange }: { isOpen: boolean; onOpenChange: (open: boolean) => void }) => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
      toast.success('Déconnexion réussie');
      onOpenChange(false);
      navigate('/');
    } catch (error) {
      console.error('Erreur lors de la déconnexion:', error);
      toast.error('Erreur lors de la déconnexion');
    }
  };

  return (
    <Sheet open={isOpen} onOpenChange={onOpenChange}>
      <SheetContent 
        side="right" 
        className="w-[300px] sm:w-[400px] bg-white dark:bg-gray-950 overflow-y-auto"
      >
        <SheetHeader className="border-b pb-4 mb-4">
          <SheetTitle className="font-heading text-2xl text-left">
            <span className="text-migrapro-terre-cuite">Migra</span>Pro
          </SheetTitle>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => onOpenChange(false)}
            className="absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100"
          >
            <X className="h-6 w-6" />
          </Button>
        </SheetHeader>

        <nav className="space-y-2">
          <Link 
            to="/" 
            onClick={() => onOpenChange(false)}
            className="flex items-center space-x-3 rounded-md px-3 py-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            <Home className="h-5 w-5" />
            <span>Accueil</span>
          </Link>

          <Collapsible 
            open={isServicesOpen} 
            onOpenChange={setIsServicesOpen}
            className="space-y-2"
          >
            <CollapsibleTrigger asChild>
              <Button
                variant="ghost"
                className="flex w-full items-center justify-between rounded-md px-3 py-2 text-sm font-normal transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                <div className="flex items-center space-x-3">
                  <BookOpen className="h-5 w-5" />
                  <span>Services</span>
                </div>
                <ChevronDown 
                  className={`h-4 w-4 transition-transform duration-200 ${
                    isServicesOpen ? "rotate-180" : ""
                  }`}
                />
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="space-y-2 pl-8">
              <Link
                to="/services/orientation"
                onClick={() => onOpenChange(false)}
                className="flex items-center space-x-3 rounded-md px-3 py-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                <Target className="h-5 w-5" />
                <span>Conseil & Orientation</span>
              </Link>
              <Link
                to="/services/formation"
                onClick={() => onOpenChange(false)}
                className="flex items-center space-x-3 rounded-md px-3 py-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                <GraduationCap className="h-5 w-5" />
                <span>Formation</span>
              </Link>
              <Link
                to="/services/coaching"
                onClick={() => onOpenChange(false)}
                className="flex items-center space-x-3 rounded-md px-3 py-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                <Target className="h-5 w-5" />
                <span>Coaching</span>
              </Link>
              <Link
                to="/services/pack-reussite"
                onClick={() => onOpenChange(false)}
                className="flex items-center space-x-3 rounded-md px-3 py-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                <PackageCheck className="h-5 w-5" />
                <span>Pack Réussite Pro</span>
              </Link>
              <Link
                to="/services/immigration"
                onClick={() => onOpenChange(false)}
                className="flex items-center space-x-3 rounded-md px-3 py-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                <Plane className="h-5 w-5" />
                <span>Immigration Canada</span>
              </Link>
              <Link
                to="/services/recrutement"
                onClick={() => onOpenChange(false)}
                className="flex items-center space-x-3 rounded-md px-3 py-2 text-sm opacity-70 transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                <Users className="h-5 w-5" />
                <span>Recrutement (Bientôt)</span>
              </Link>
            </CollapsibleContent>
          </Collapsible>

          <Link
            to="/a-propos"
            onClick={() => onOpenChange(false)}
            className="flex items-center space-x-3 rounded-md px-3 py-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            <Info className="h-5 w-5" />
            <span>À propos</span>
          </Link>

          <Link
            to="/temoignages"
            onClick={() => onOpenChange(false)}
            className="flex items-center space-x-3 rounded-md px-3 py-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            <MessageSquare className="h-5 w-5" />
            <span>Témoignages</span>
          </Link>

          <Link
            to="/blog"
            onClick={() => onOpenChange(false)}
            className="flex items-center space-x-3 rounded-md px-3 py-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            <NewspaperIcon className="h-5 w-5" />
            <span>Blog / Conseils</span>
          </Link>
        </nav>

        {user && (
          <div className="space-y-2 border-t pt-2">
            <Button 
              variant="ghost"
              onClick={handleLogout}
              className="flex w-full items-center justify-start space-x-3 rounded-md px-3 py-2 text-sm text-red-600 hover:bg-red-50"
            >
              <LogOut className="h-5 w-5" />
              <span>Déconnexion</span>
            </Button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};
