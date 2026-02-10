import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ShieldCheck } from "lucide-react";

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
  };

  const configureCookies = () => {
    // In a real app, this would open a modal
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] p-4 animate-in fade-in slide-in-from-bottom-full duration-700">
      <div className="container mx-auto max-w-5xl">
        <div className="bg-white border border-border shadow-2xl rounded-xl p-6 md:flex items-center justify-between gap-8">
          <div className="flex items-start gap-4 mb-4 md:mb-0">
            <div className="bg-primary/10 p-2 rounded-full hidden sm:block">
              <ShieldCheck className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-1">Privacidade e Cookies</h4>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
                Utilizamos cookies e tecnologias semelhantes para melhorar sua experiência em nosso site, analisar o tráfego e personalizar conteúdo, de acordo com nossa <a href="/politica-privacidade" className="underline hover:text-primary transition-colors">Política de Privacidade</a>.
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Button variant="outline" size="sm" onClick={configureCookies} className="text-xs uppercase tracking-wider">
              Configurar
            </Button>
            <Button size="sm" onClick={acceptCookies} className="text-xs uppercase tracking-wider bg-primary hover:bg-primary/90">
              Aceitar Todos
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
