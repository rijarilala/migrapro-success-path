
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, ChevronDown, Home, Briefcase, Info, MessageSquare, Blog, Mail, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { MobileNav } from './MobileNav';

const navLinks = [
  {
    label: "Accueil",
    to: "/",
    icon: Home,
  },
  {
    label: "Services",
    submenu: [
      { label: "Conseil & Orientation Professionnelle", to: "/services/orientation" },
      { label: "Formation", to: "/services/formation" },
      { label: "Coaching", to: "/services/coaching" },
      { label: "Pack Réussite Pro", to: "/services/pack-reussite" },
      { label: "Immigration & Accompagnement", to: "/services/immigration" },
      { label: "Recrutement (Bientôt)", to: "/services/recrutement" },
    ],
    icon: Briefcase,
  },
  {
    label: "À propos",
    to: "/a-propos",
    icon: Info,
  },
  {
    label: "Témoignages",
    to: "/temoignages",
    icon: MessageSquare,
  },
  {
    label: "Blog / Conseils",
    to: "/blog",
    icon: Blog,
  },
  {
    label: "Contact",
    to: "/contact",
    icon: Mail,
  },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md transition-all duration-200">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="font-heading font-extrabold text-2xl select-none tracking-wide">
            <span className="text-migrapro-terre-cuite transition-colors group-hover:text-migrapro-terre-cuite/80">Great</span>
            <span className="text-migrapro-bleu-ciel ml-1 transition-colors group-hover:text-migrapro-bleu-ciel/70">Pathway</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-2 lg:gap-6">
          {/* Accueil */}
          <Link
            to="/"
            className={`flex items-center gap-1 px-3 py-1 text-[1rem] font-medium relative transition-colors 
              group
              ${location.pathname === "/" ? "text-migrapro-terre-cuite" : "text-gray-700 hover:text-migrapro-terre-cuite"}
              `}
          >
            <Home size={18} className="opacity-80" />
            Accueil
            <span className="absolute left-0 -bottom-0.5 w-full h-0.5 bg-migrapro-terre-cuite scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200
              ${location.pathname === "/" ? "scale-x-100" : ""}
            " />
          </Link>

          {/* Services Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                className={`flex items-center gap-1 px-3 py-1 text-[1rem] font-medium relative transition-colors group
                  ${location.pathname.startsWith("/services") ? "text-migrapro-terre-cuite" : "text-gray-700 hover:text-migrapro-terre-cuite"}
                `}
              >
                <Briefcase size={18} className="opacity-80" />
                Services
                <ChevronDown size={16} className="ml-1 mt-[1px]" />
                <span className={`absolute left-0 -bottom-0.5 w-full h-0.5 bg-migrapro-terre-cuite scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200
                  ${location.pathname.startsWith("/services") ? "scale-x-100" : ""}`} />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-60 bg-white z-50 rounded-md border mt-2 animate-slide-in-right shadow-lg">
              {navLinks.find(l => l.label === "Services")?.submenu?.map((service, i) => (
                <DropdownMenuItem asChild key={i}>
                  <Link
                    to={service.to}
                    className="text-gray-700 hover:text-migrapro-terre-cuite w-full px-2 py-2 rounded transition-colors"
                  >
                    {service.label}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Autres liens */}
          <Link
            to="/a-propos"
            className={`flex items-center gap-1 px-3 py-1 text-[1rem] font-medium relative transition-colors group
                ${location.pathname.startsWith("/a-propos") ? "text-migrapro-terre-cuite" : "text-gray-700 hover:text-migrapro-terre-cuite"}
              `}
          >
            <Info size={18} className="opacity-80" />
            À propos
            <span className={`absolute left-0 -bottom-0.5 w-full h-0.5 bg-migrapro-terre-cuite scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200
                  ${location.pathname.startsWith("/a-propos") ? "scale-x-100" : ""}`} />
          </Link>

          <Link
            to="/temoignages"
            className={`flex items-center gap-1 px-3 py-1 text-[1rem] font-medium relative transition-colors group
                ${location.pathname.startsWith("/temoignages") ? "text-migrapro-terre-cuite" : "text-gray-700 hover:text-migrapro-terre-cuite"}
              `}
          >
            <MessageSquare size={18} className="opacity-80" />
            Témoignages
            <span className={`absolute left-0 -bottom-0.5 w-full h-0.5 bg-migrapro-terre-cuite scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200
                  ${location.pathname.startsWith("/temoignages") ? "scale-x-100" : ""}`} />
          </Link>

          <Link
            to="/blog"
            className={`flex items-center gap-1 px-3 py-1 text-[1rem] font-medium relative transition-colors group
                ${location.pathname.startsWith("/blog") ? "text-migrapro-terre-cuite" : "text-gray-700 hover:text-migrapro-terre-cuite"}
              `}
          >
            <Blog size={18} className="opacity-80" />
            Blog / Conseils
            <span className={`absolute left-0 -bottom-0.5 w-full h-0.5 bg-migrapro-terre-cuite scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200
                  ${location.pathname.startsWith("/blog") ? "scale-x-100" : ""}`} />
          </Link>

          <Link
            to="/contact"
            className={`flex items-center gap-1 px-3 py-1 text-[1rem] font-medium relative transition-colors group
                ${location.pathname.startsWith("/contact") ? "text-migrapro-terre-cuite" : "text-gray-700 hover:text-migrapro-terre-cuite"}
              `}
          >
            <Mail size={18} className="opacity-80" />
            Contact
            <span className={`absolute left-0 -bottom-0.5 w-full h-0.5 bg-migrapro-terre-cuite scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200
                  ${location.pathname.startsWith("/contact") ? "scale-x-100" : ""}`} />
          </Link>
        </div>

        {/* CTA Button */}
        <Button className="hidden md:block bg-migrapro-terre-cuite hover:bg-migrapro-terre-cuite/90 text-white font-semibold px-6 py-2 text-base rounded-lg shadow transition hover:scale-105 duration-200 ml-2">
          <Calendar size={17} className="mr-1" />
          Réserver
        </Button>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          className="md:hidden ml-2 p-2 rounded-lg"
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

