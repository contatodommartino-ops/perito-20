import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Link, useParams } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";
import ServiceDetail from "./pages/ServiceDetail";
import FAQPage from "./pages/FAQ";
import ContactPage from "./pages/Contact";
import AboutPage from "./pages/About";
import BlogPage from "./pages/Blog";
import BlogArticlePage from "./pages/BlogArticle";

const queryClient = new QueryClient();

const legalContent: Record<string, { title: string; content: React.ReactNode }> = {
  "politica-privacidade": {
    title: "Política de Privacidade",
    content: (
      <div className="space-y-6">
        <p>A Veritas Assessoria está comprometida com a proteção de sua privacidade e de seus dados pessoais, em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018).</p>

        <h3 className="text-xl font-bold">1. Coleta de Dados</h3>
        <p>Coletamos dados pessoais (nome, e-mail e telefone) apenas quando você os fornece voluntariamente através de nossos formulários de contato ou WhatsApp, com a finalidade exclusiva de atender sua solicitação.</p>

        <h3 className="text-xl font-bold">2. Uso das Informações</h3>
        <p>As informações coletadas são utilizadas para:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Responder a dúvidas e solicitações de orçamento;</li>
          <li>Prestação dos serviços periciais contratados;</li>
          <li>Comunicação técnica e administrativa.</li>
        </ul>

        <h3 className="text-xl font-bold">3. Armazenamento e Segurança</h3>
        <p>Seus dados são armazenados em ambientes seguros e não são compartilhados com terceiros, exceto quando necessário para o cumprimento de obrigações legais ou judiciais.</p>

        <h3 className="text-xl font-bold">4. Seus Direitos</h3>
        <p>Você tem o direito de solicitar a confirmação da existência de tratamento, o acesso aos dados, a correção de dados incompletos ou a exclusão de seus dados de nossa base a qualquer momento.</p>
      </div>
    )
  },
  "politica-cookies": {
    title: "Política de Cookies",
    content: (
      <div className="space-y-6">
        <p>Este site utiliza cookies para melhorar sua experiência de navegação e analisar como nossos serviços são utilizados.</p>

        <h3 className="text-xl font-bold">1. O que são Cookies?</h3>
        <p>Cookies são pequenos arquivos de texto enviados pelo site ao seu navegador para lembrar informações sobre sua visita, como seu idioma preferido e outras configurações.</p>

        <h3 className="text-xl font-bold">2. Tipos de Cookies que utilizamos</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Cookies Essenciais:</strong> Necessários para o funcionamento básico do site.</li>
          <li><strong>Cookies Analíticos:</strong> Nos ajudam a entender como os visitantes interagem com o site, coletando informações de forma anônima.</li>
        </ul>

        <h3 className="text-xl font-bold">3. Como gerenciar Cookies</h3>
        <p>Você pode configurar seu navegador para recusar todos os cookies ou para indicar quando um cookie está sendo enviado. No entanto, algumas funcionalidades do site podem não operar corretamente sem cookies.</p>
      </div>
    )
  },
  "termos-uso": {
    title: "Termos de Uso",
    content: (
      <div className="space-y-6">
        <p>Ao acessar o site da Veritas Assessoria, você concorda em cumprir estes termos de serviço e todas as leis e regulamentos aplicáveis.</p>

        <h3 className="text-xl font-bold">1. Uso do Conteúdo</h3>
        <p>O conteúdo deste site (textos, imagens, logotipos) é de propriedade exclusiva da Veritas Assessoria e está protegido pelas leis de direitos autorais. É proibida a reprodução sem autorização prévia.</p>

        <h3 className="text-xl font-bold">2. Natureza dos Serviços</h3>
        <p>As informações contidas no site têm caráter institucional e informativo. O suporte pericial é prestado mediante contratação específica e análise individualizada de cada caso.</p>

        <h3 className="text-xl font-bold">3. Isenção de Responsabilidade</h3>
        <p>A Veritas Assessoria não se responsabiliza por decisões tomadas com base exclusivamente nas informações gerais do site. A consultoria pericial técnica exige a análise formal de documentos.</p>
      </div>
    )
  }
};

const LegalPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const page = slug ? legalContent[slug] : null;

  if (!page) return <NotFound />;

  return (
    <div className="flex flex-col w-full">
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold">{page.title}</h1>
        </div>
      </section>
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="prose prose-slate max-w-none">
            {page.content}
            <div className="mt-12 p-6 bg-secondary/30 border rounded-lg text-center">
              <p className="text-sm text-muted-foreground">
                Última atualização: {new Date().toLocaleDateString("pt-BR")}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

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
            <Route path="/blog/:slug" element={<BlogArticlePage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/sobre" element={<AboutPage />} />
            <Route path="/contato" element={<ContactPage />} />
            <Route path="/legal/:slug" element={<LegalPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
