import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Shield, Search, FileText, Home, ArrowRight, MessageCircle, Mail, User, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const Index = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("https://formspree.io/f/xpzvbeow", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        setIsSuccess(true);
        toast.success("Mensagem enviada com sucesso!");
        (e.target as HTMLFormElement).reset();
      } else {
        toast.error("Ocorreu um erro ao enviar. Tente novamente.");
      }
    } catch (error) {
      toast.error("Erro de conexão. Verifique sua internet.");
    } finally {
      setIsSubmitting(false);
    }
  };
  const services = [
    {
      title: "Perícia Grafotécnica Extrajudicial",
      description: "Análise técnica de assinaturas, rubricas e manuscritos, com emissão de laudo técnico fundamentado.",
      icon: <Shield className="h-10 w-10 text-primary" />,
      path: "/servicos/pericia-grafotecnica",
    },
    {
      title: "Assistência Técnica Grafotécnica",
      description: "Atuação como assistente técnico em processos judiciais, acompanhando perícias oficiais e elaborando quesitos.",
      icon: <Search className="h-10 w-10 text-primary" />,
      path: "/servicos/assistencia-tecnica",
    },
    {
      title: "Perícia em Documentoscopia",
      description: "Análise técnica de documentos para identificação de fraudes, adulterações, rasuras e montagens.",
      icon: <FileText className="h-10 w-10 text-primary" />,
      path: "/servicos/documentoscopia",
    },
    {
      title: "Investigação Técnica In Loco para Usucapião",
      description: "Diligência presencial no imóvel, análise documental e coleta de informações para apoio técnico.",
      icon: <Home className="h-10 w-10 text-primary" />,
      path: "/servicos/usucapiao",
    },
  ];

  const faqs = [
    {
      question: "O que é perícia grafotécnica extrajudicial?",
      answer: "É a análise técnica realizada fora do âmbito judicial, visando confirmar a autenticidade ou falsidade de punhos escritores em documentos diversos, resultando em um laudo técnico fundamentado.",
    },
    {
      question: "Qual a validade do laudo extrajudicial?",
      answer: "O laudo extrajudicial possui validade técnica e pode ser utilizado como prova documental robusta em negociações, processos administrativos ou como base para ações judiciais futuras.",
    },
    {
      question: "Diferença entre perito e assistente técnico?",
      answer: "O perito é nomeado pelo juiz para atuar de forma imparcial no processo. O assistente técnico é contratado por uma das partes para acompanhar o trabalho pericial, elaborar quesitos e garantir o contraditório técnico.",
    },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-primary text-white border-b-8 border-accent">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/175045/pexels-photo-175045.jpeg"
            alt="Fundo Institucional"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container relative z-10 px-4 text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            Autoridade Técnica, <br />
            <span className="text-white/80 font-light italic">Imparcialidade e Confiança</span>
          </h1>
          <p className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-200">
            Assessoria pericial especializada em grafotécnica, documentoscopia e apoio técnico jurídico com foco em resultados fundamentados.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-16 duration-1000 delay-500">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 px-8">
              <Link to="/contato">Solicitar Orçamento</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-white border-white/20 hover:bg-white/10 bg-transparent px-8">
              <Link to="/servicos/pericia-grafotecnica">Conhecer Serviços</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-primary mb-4">Veritas Assessoria</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-8">Credibilidade em Análise Técnica</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Atuamos com rigor científico e ética profissional para fornecer soluções técnicas em disputas judiciais e extrajudiciais. Nosso compromisso é com a verdade estampada nos documentos, garantindo segurança jurídica para advogados, empresas e particulares.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-primary mb-2">Especialidades</h2>
              <h3 className="text-3xl md:text-4xl font-bold">Nossas Áreas de Atuação</h3>
            </div>
            <Link to="/servicos/pericia-grafotecnica" className="hidden md:flex items-center text-sm font-medium hover:text-primary transition-colors group">
              Ver todos os serviços <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Link key={index} to={service.path} className="group">
                <Card className="h-full border-none shadow-sm hover:shadow-md transition-all duration-300 group-hover:-translate-y-1 bg-white">
                  <CardHeader>
                    <div className="mb-4">{service.icon}</div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audience / Callouts */}
      <section className="py-24 bg-white border-y border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <h3 className="text-3xl font-bold leading-tight text-center mb-12">Suporte Técnico Estratégico para Profissionais do Direito</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center text-center gap-4 p-6 bg-secondary/30 rounded-lg">
                  <div className="bg-primary/10 p-4 rounded-full">
                    <Shield className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Para Advogados</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">Elaboração de quesitos estratégicos e pareceres técnicos fundamentados para fortalecer a tese defensiva.</p>
                  </div>
                </div>
                <div className="flex flex-col items-center text-center gap-4 p-6 bg-secondary/30 rounded-lg">
                  <div className="bg-primary/10 p-4 rounded-full">
                    <Search className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Para Empresas</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">Prevenção e detecção de fraudes internas e externas através de análise documental rigorosa.</p>
                  </div>
                </div>
                <div className="flex flex-col items-center text-center gap-4 p-6 bg-secondary/30 rounded-lg">
                  <div className="bg-primary/10 p-4 rounded-full">
                    <User className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Para Particulares</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">Análise de autenticidade em contratos, cheques e documentos particulares em situações de litígio.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section Preview */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-primary mb-2">FAQ</h2>
            <h3 className="text-3xl font-bold">Dúvidas Frequentes</h3>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-border/50">
                <h4 className="font-bold text-lg mb-3">{faq.question}</h4>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild variant="outline">
              <Link to="/faq">Ver todas as perguntas</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">Entre em Contato</h2>
              <p className="text-white/70 max-w-md">
                Solicite uma análise preliminar ou tire suas dúvidas sobre nossos serviços periciais. Atendimento profissional e sigiloso.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Mail className="h-6 w-6 opacity-60" />
                  <span translate="no">contato.veritasassessoria@gmail.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <MessageCircle className="h-6 w-6 opacity-60" />
                  <span>+55 41 99629-7915</span>
                </div>
              </div>
              <Button asChild size="lg" className="bg-[#25D366] hover:bg-[#25D366]/90 text-white border-none mt-4">
                <a href="https://wa.me/5541996297915?text=Olá, gostaria de informações sobre serviços periciais." target="_blank" rel="noopener noreferrer">
                  Falar pelo WhatsApp
                </a>
              </Button>
            </div>
            
            <div className="bg-white text-foreground p-8 rounded-lg shadow-xl min-h-[400px] flex flex-col justify-center">
              {isSuccess ? (
                <div className="flex flex-col items-center justify-center text-center space-y-4 animate-in fade-in zoom-in">
                  <div className="bg-green-100 p-4 rounded-full">
                    <CheckCircle className="h-12 w-12 text-green-600" />
                  </div>
                  <h4 className="text-xl font-bold">Mensagem Enviada!</h4>
                  <p className="text-muted-foreground">Obrigado. Responderemos em breve.</p>
                  <Button variant="outline" onClick={() => setIsSuccess(false)}>Enviar outra mensagem</Button>
                </div>
              ) : (
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Nome</label>
                      <Input name="name" required placeholder="Seu nome completo" className="bg-secondary/50 border-none" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">E-mail</label>
                      <Input name="email" required placeholder="seu@email.com" type="email" className="bg-secondary/50 border-none" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Assunto</label>
                    <Input name="subject" required placeholder="Como podemos ajudar?" className="bg-secondary/50 border-none" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Mensagem</label>
                    <Textarea name="message" required placeholder="Descreva brevemente sua necessidade..." className="bg-secondary/50 border-none min-h-[120px]" />
                  </div>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 text-white py-6 text-lg flex items-center justify-center gap-2"
                    translate="no"
                  >
                    {isSubmitting ? "Enviando..." : (
                      <>
                        Enviar Mensagem <Send className="h-5 w-5" />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
