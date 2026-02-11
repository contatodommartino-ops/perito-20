import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, MessageCircle, ChevronDown, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import CookieBanner from "./CookieBanner";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { label: "Início", path: "/" },
    {
      label: "Serviços",
      subItems: [
        { label: "Perícia Grafotécnica Extrajudicial", path: "/servicos/pericia-grafotecnica" },
        { label: "Assistência Técnica Grafotécnica", path: "/servicos/assistencia-tecnica" },
        { label: "Perícia em Documentoscopia", path: "/servicos/documentoscopia" },
        { label: "Investigação Técnica In Loco para Usucapião", path: "/servicos/usucapiao" },
      ],
    },
    { label: "Blog", path: "/blog" },
    { label: "Perguntas Frequentes", path: "/faq" },
    { label: "Sobre o Perito", path: "/sobre" },
    { label: "Contato", path: "/contato" },
  ];

  const whatsappNumber = "+5541996297915";
  const whatsappMessage = encodeURIComponent("Olá, gostaria de informações sobre serviços periciais.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border shadow-sm">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold tracking-tighter text-primary">VERITAS</span>
            <span className="text-sm font-light uppercase tracking-[0.2em] text-muted-foreground border-l border-border pl-2">Assessoria</span>
          </Link>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] p-0 border-l border-border bg-white" translate="no">
              <div className="flex flex-col h-full">
                {/* Clean header to avoid any ghost text or automatic descriptions */}
                <div className="p-8 border-b border-border">
                  <h2 className="font-bold tracking-tighter text-xl uppercase text-primary">Menu</h2>
                </div>

                {/* Hidden components for accessibility without content that could be misread */}
                <div className="sr-only">
                  <SheetTitle>Menu de Navegação</SheetTitle>
                  <SheetDescription>Acesse as páginas da Veritas Assessoria</SheetDescription>
                </div>

                <nav className="flex-1 overflow-y-auto p-6">
                  <div className="space-y-4">
                    {menuItems.map((item, idx) => (
                      <div key={idx}>
                        {item.subItems ? (
                          <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="services" className="border-none">
                              <AccordionTrigger className="hover:no-underline py-2 text-lg font-medium">
                                {item.label}
                              </AccordionTrigger>
                              <AccordionContent>
                                <div className="pl-4 mt-2 space-y-3 border-l border-border/50">
                                  {item.subItems.map((sub, sIdx) => (
                                    <Link
                                      key={sIdx}
                                      to={sub.path}
                                      onClick={() => setIsOpen(false)}
                                      className={cn(
                                        "block text-sm text-muted-foreground hover:text-primary transition-colors",
                                        location.pathname === sub.path && "text-primary font-medium"
                                      )}
                                    >
                                      {sub.label}
                                    </Link>
                                  ))}
                                </div>
                              </AccordionContent>
                            </AccordionItem>
                          </Accordion>
                        ) : (
                          <Link
                            to={item.path}
                            onClick={() => setIsOpen(false)}
                            className={cn(
                              "block py-2 text-lg font-medium transition-colors hover:text-primary",
                              location.pathname === item.path ? "text-primary" : "text-muted-foreground"
                            )}
                          >
                            {item.label}
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                </nav>
                <div className="p-6 border-t border-border bg-muted/30">
                  <Button asChild className="w-full bg-primary hover:bg-primary/90">
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                      Falar pelo WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <span className="text-2xl font-bold tracking-tighter">VERITAS</span>
                <span className="text-sm font-light uppercase tracking-[0.2em] opacity-80 border-l border-white/20 pl-2">Assessoria</span>
              </div>
              <p className="text-white/60 text-sm max-w-xs">
                Excelência pericial e assistência técnica com foco em imparcialidade, técnica e autoridade jurídica.
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Links Úteis</h4>
              <nav className="flex flex-col space-y-2 text-sm text-white/60">
                <Link to="/sobre" className="hover:text-white transition-colors">Sobre o Perito</Link>
                <Link to="/contato" className="hover:text-white transition-colors">Contato</Link>
                <Link to="/legal/politica-privacidade" className="hover:text-white transition-colors">Política de Privacidade</Link>
                <Link to="/legal/politica-cookies" className="hover:text-white transition-colors">Política de Cookies</Link>
                <Link to="/legal/termos-uso" className="hover:text-white transition-colors">Termos de Uso</Link>
              </nav>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Contato</h4>
              <div className="flex flex-col space-y-2 text-sm text-white/60">
                <p>Curitiba - PR e Região</p>
                <p translate="no">contato.veritasassessoria@gmail.com</p>
                <p>+55 41 99629-7915</p>
              </div>
            </div>
          </div>
          <div className="mt-16 pt-8 border-t border-white/10 text-center text-xs text-white/40">
            <p>© {new Date().getFullYear()} Veritas Assessoria Pericial. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform flex items-center justify-center"
        aria-label="Falar pelo WhatsApp"
      >
        <MessageCircle className="h-6 w-6 fill-current" />
      </a>

      {/* Cookie Banner */}
      <CookieBanner />
    </div>
  );
};

export default Layout;
