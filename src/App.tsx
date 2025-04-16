import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Services from "./pages/Services";
import OrientationPro from "./pages/services/OrientationPro";
import CoachingPro from "./pages/services/CoachingPro";
import Immigration from "./pages/services/Immigration";
import Recrutement from "./pages/services/Recrutement";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* Services Routes */}
          <Route path="/services" element={<Services />} />
          <Route path="/services/orientation" element={<OrientationPro />} />
          <Route path="/services/coaching" element={<CoachingPro />} />
          <Route path="/services/immigration" element={<Immigration />} />
          <Route path="/services/recrutement" element={<Recrutement />} />
          {/* Other Routes */}
          <Route path="/a-propos" element={<NotFound />} />
          <Route path="/temoignages" element={<NotFound />} />
          <Route path="/blog" element={<NotFound />} />
          <Route path="/contact" element={<NotFound />} />
          {/* Catch-all Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
