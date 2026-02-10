import React from "react";
import { useParams, Link } from "react-router-dom";
import { Shield, Search, FileText, Home, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const servicesData = {
  "pericia-grafotecnica": {
    title: "Perícia Grafotécnica Extrajudicial",
    description: "Análise técnica de assinaturas, rubricas e manuscritos, com emissão de laudo técnico fundamentado.",
    icon: <Shield className="h-12 w-12 text-primary" />,
    image: "https://images.pexels.com/photos/175045/pexels-photo-175045.jpeg",
    details: "A perícia grafotécnica extrajudicial é fundamental para conferir segurança em transações que envolvam documentos manuscritos. Através de exames comparativos e técnicos, identificamos a autoria gráfica com precisão científica.",
    target: [
      "Pessoas físicas (fraudes, assinaturas contestadas, contratos)",
      "Empresas (fraudes internas, contratos, prevenção de litígios)",
      "Advogados e escritórios (análise prévia e apoio técnico)"
    ],
    features: [
      "Exame de autenticidade de assinaturas",
      "Identificação de falsificações",
      "Análise de evolução gráfica",
      "Emissão de laudo técnico fundamentado"
    ]
  },
  "assistencia-tecnica": {
    title: "Assistência Técnica Grafotécnica",
    description: "Atuação como assistente técnico em processos judiciais acompanhando perícias oficiais.",
    icon: <Search className="h-12 w-12 text-primary" />,
    image: "https://images.pexels.com/photos/8152742/pexels-photo-8152742.jpeg",
    details: "Atuamos como o braço técnico da parte no processo judicial. O assistente técnico garante que a perícia oficial siga os preceitos técnicos corretos e apresenta quesitos e pareceres que fundamentam a tese jurídica.",
    target: [
      "Advogados",
      "Escritórios de advocacia"
    ],
    features: [
      "Elaboração de quesitos iniciais e suplementares",
      "Acompanhamento da diligência pericial",
      "Análise crítica do laudo pericial oficial",
      "Elaboração de parecer técnico concordante ou divergente"
    ]
  },
  "documentoscopia": {
    title: "Perícia em Documentoscopia",
    description: "Análise técnica de documentos para identificação de fraudes e adulterações.",
    icon: <FileText className="h-12 w-12 text-primary" />,
    image: "https://images.pexels.com/photos/175045/pexels-photo-175045.jpeg",
    details: "A documentoscopia abrange o exame do suporte (papel), tintas, impressões e elementos de segurança. É essencial para detectar montagens, rasuras ou alterações materiais em documentos públicos ou particulares.",
    target: [
      "Empresas e Instituições",
      "Advogados",
      "Pessoas físicas em casos de fraude documental"
    ],
    features: [
      "Verificação de autenticidade documental",
      "Detecção de rasuras e acréscimos",
      "Análise de elementos de segurança",
      "Identificação de montagens fraudulentas"
    ]
  },
  "usucapiao": {
    title: "Investigação Técnica In Loco para Usucapião",
    description: "Serviço técnico de apoio à usucapião com diligência presencial no imóvel.",
    icon: <Home className="h-12 w-12 text-primary" />,
    image: "https://images.pexels.com/photos/8152742/pexels-photo-8152742.jpeg",
    details: "Realizamos o levantamento técnico necessário para fundamentar processos de usucapião. A diligência 'in loco' permite a coleta de evidências fáticas sobre a posse e a situação do imóvel, gerando um relatório circunstanciado.",
    target: [
      "Advogados imobiliários",
      "Escritórios de advocacia",
      "Empresas de regularização imobiliária",
      "Pessoas físicas em fase de preparação para usucapião"
    ],
    features: [
      "Diligência presencial no imóvel",
      "Análise documental da área",
      "Coleta de informações locais",
      "Relatório técnico circunstanciado (exclusivo para apoio técnico)"
    ]
  }
};

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? (servicesData as any)[slug] : null;

  if (!service) {
    return (
      <div className="container mx-auto py-24 px-4 text-center">
        <h1 className="text-3xl font-bold mb-4">Serviço não encontrado</h1>
        <Button asChild>
          <Link to="/">Voltar ao início</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="bg-primary text-white py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="mb-6">{service.icon}</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{service.title}</h1>
            <p className="text-xl text-white/70 leading-relaxed">
              {service.description}
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">Sobre o Serviço</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {service.details}
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Público-Alvo</h2>
                <ul className="space-y-3">
                  {service.target.map((item: string, i: number) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-8">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link to="/contato">Solicitar Orçamento</Link>
                </Button>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-secondary/50 p-8 rounded-lg border border-border">
                <h2 className="text-2xl font-bold mb-6">O que realizamos</h2>
                <div className="space-y-4">
                  {service.features.map((feature: string, i: number) => (
                    <div key={i} className="flex gap-4 p-4 bg-white rounded-md shadow-sm">
                      <div className="text-primary font-bold text-xl">{i + 1}</div>
                      <p className="font-medium">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative rounded-lg overflow-hidden h-64 shadow-xl">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover grayscale"
                />
                <div className="absolute inset-0 bg-primary/20"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary/30 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Precisa de suporte técnico especializado?</h2>
          <p className="text-muted-foreground mb-10 max-w-2xl mx-auto">
            Nossa equipe está pronta para analisar seu caso com a devida atenção técnica e imparcialidade.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg">
              <Link to="/contato">Enviar Mensagem</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="https://wa.me/5541996297915" target="_blank" rel="noopener noreferrer">
                WhatsApp: +55 41 99629-7915
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
