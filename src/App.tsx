import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { BackToTop } from "./components/ui/back-to-top";
import Index from "./pages/Index";
import Services from "./pages/Services";
import OrientationPro from "./pages/services/OrientationPro";
import Formation from "./pages/services/Formation";
import Coaching from "./pages/services/Coaching";
import PackReussite from "./pages/services/PackReussitePro";
import Immigration from "./pages/services/Immigration";
import Eligibility from "./pages/services/Eligibility";
import Recrutement from "./pages/services/Recrutement";
import About from "./pages/About";
import Testimonials from "./pages/Testimonials";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Auth from "./pages/Auth";
import { useEffect } from "react";

// Create a client
const queryClient = new QueryClient();

// ScrollToTop component to ensure proper scroll behavior
const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    // Force immediate scroll to top on route change with no animation
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
};

// Define AppContent as a separate component
const AppContent = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Index />} />
        {/* Services Routes */}
        <Route path="/services" element={<Services />} />
        <Route path="/services/orientation" element={<OrientationPro />} />
        <Route path="/services/formation" element={<Formation />} />
        <Route path="/services/coaching" element={<Coaching />} />
        <Route path="/services/pack-reussite" element={<PackReussite />} />
        <Route path="/services/immigration" element={<Immigration />} />
        <Route path="/services/eligibility" element={<Eligibility />} />
        <Route path="/services/recrutement" element={<Recrutement />} />
        {/* Main Routes */}
        <Route path="/a-propos" element={<About />} />
        <Route path="/temoignages" element={<Testimonials />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        {/* Catch-all Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <BackToTop />
    </>
  );
};

// Main App component
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
