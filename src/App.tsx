import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import MobileTyreFitting from "./pages/MobileTyreFitting";
import HomeTyreFitting from "./pages/HomeTyreFitting";
import MobileTyreRepair from "./pages/MobileTyreRepair";
import MobileTyreChange from "./pages/MobileTyreChange";
import LockingWheelNutRemoval from "./pages/LockingWheelNutRemoval";
import TPMSSensorReplacement from "./pages/TPMSSensorReplacement";
import VanTyreFitting from "./pages/VanTyreFitting";
import TruckTyreFitting from "./pages/TruckTyreFitting";
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
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/mobile-tyre-fitting" element={<MobileTyreFitting />} />
          <Route path="/home-tyre-fitting" element={<HomeTyreFitting />} />
          <Route path="/mobile-tyre-repair" element={<MobileTyreRepair />} />
          <Route path="/mobile-tyre-change" element={<MobileTyreChange />} />
          <Route path="/locking-wheel-nut-removal" element={<LockingWheelNutRemoval />} />
          <Route path="/tpms-sensor-replacement" element={<TPMSSensorReplacement />} />
          <Route path="/van-tyre-fitting" element={<VanTyreFitting />} />
          <Route path="/truck-tyre-fitting" element={<TruckTyreFitting />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
