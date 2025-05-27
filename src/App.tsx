import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Analytics } from '@vercel/analytics/react';
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import UnderstandingMLBasics from "./pages/blogs/UnderstandingMLBasics";
import AIInLeadGeneration from "./pages/blogs/AILeadGeneration";
import Cybersecurityimportance from "./pages/blogs/CybersecurityImportance";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="flex flex-col min-h-screen bg-background">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/blogs/understanding-ml-basics" element={<UnderstandingMLBasics />} />
              <Route path="/blogs/ai-in-lead-generation" element={<AIInLeadGeneration />} />
              <Route path="/blogs/cybersecurity-importance" element={<Cybersecurityimportance />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
          <Analytics />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
