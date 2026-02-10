import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";
import ServiceDetail from "./pages/ServiceDetail";
import FAQPage from "./pages/FAQ";
import ContactPage from "./pages/Contact";
import AboutPage from "./pages/About";
import BlogPage from "./pages/Blog";

const queryClient = new QueryClient();

// Placeholder pages for other routes
const LegalPlaceholder = ({ title }: { title: string }) => (
  <div className="flex flex-col w-full">
    <section className="bg-primary text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-3xl font-bold">{title}</h1>
      </div>
    </section>
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="prose prose-slate max-w-none">
          <p className="text-muted-foreground leading-relaxed mb-6 italic text-center">
            Este documento está em conformidade com a Lei Geral de Proteção de Dados (LGPD).
          </p>
          <div className="h-4 bg-secondary/50 rounded w-full mb-4 animate-pulse"></div>
          <div className="h-4 bg-secondary/50 rounded w-5/6 mb-4 animate-pulse"></div>
          <div className="h-4 bg-secondary/50 rounded w-4/6 mb-8 animate-pulse"></div>

          <h2 className="text-xl font-bold mb-4">1. Introdução</h2>
          <p className="text-muted-foreground mb-6">
            A Veritas Assessoria preza pela transparência e segurança dos dados de seus clientes e usuários. Este documento detalha nossas práticas e compromissos.
          </p>

          <div className="h-4 bg-secondary/50 rounded w-full mb-4 animate-pulse"></div>
          <div className="h-4 bg-secondary/50 rounded w-3/4 mb-4 animate-pulse"></div>

          <div className="mt-12 p-6 bg-secondary/30 border rounded-lg text-center">
            <p className="text-sm text-muted-foreground">
              Para obter o documento completo ou tirar dúvidas, entre em contato via <Link to="/contato" className="text-primary font-bold underline">nossa página de contato</Link>.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/servicos/:slug" element={<ServiceDetail />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/sobre" element={<AboutPage />} />
            <Route path="/contato" element={<ContactPage />} />
            <Route path="/politica-privacidade" element={<LegalPlaceholder title="Política de Privacidade" />} />
            <Route path="/politica-cookies" element={<LegalPlaceholder title="Política de Cookies" />} />
            <Route path="/termos-uso" element={<LegalPlaceholder title="Termos de Uso" />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
