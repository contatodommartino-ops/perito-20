import React, { useState } from "react";
import { Mail, MessageCircle, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const ContactPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      // Usando Formspree (Serviço gratuito para sites estáticos no GitHub)
      // Substitua 'xpzvbeow' pelo seu ID do Formspree se desejar personalizar
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

  return (
    <div className="flex flex-col w-full">
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contato</h1>
          <p className="text-xl text-white/70 max-w-2xl">
            Estamos à disposição para atender advogados, empresas e particulares com excelência técnica e sigilo.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">Informações de Contato</h2>
                <p className="text-muted-foreground mb-8">
                  Escolha o canal de sua preferência. Para casos urgentes ou orçamentos rápidos, recomendamos o contato via WhatsApp.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/5 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold">E-mail</h4>
                    <p className="text-muted-foreground" translate="no">contato.veritasassessoria@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/5 p-3 rounded-full">
                    <MessageCircle className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold">WhatsApp</h4>
                    <p className="text-muted-foreground">+55 41 99629-7915</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/5 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold">Localização</h4>
                    <p className="text-muted-foreground">Curitiba - PR (Atendimento presencial e remoto)</p>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <Button asChild size="lg" className="bg-[#25D366] hover:bg-[#25D366]/90 text-white border-none">
                  <a href="https://wa.me/5541996297915?text=Olá, gostaria de informações sobre serviços periciais." target="_blank" rel="noopener noreferrer">
                    Falar pelo WhatsApp Agora
                  </a>
                </Button>
              </div>
            </div>

            <div className="bg-secondary/30 p-8 rounded-xl border border-border shadow-sm">
              <h3 className="text-2xl font-bold mb-6">Envie uma Mensagem</h3>

              {isSuccess ? (
                <div className="flex flex-col items-center justify-center py-12 text-center space-y-4 animate-in fade-in zoom-in">
                  <div className="bg-green-100 p-4 rounded-full">
                    <CheckCircle className="h-12 w-12 text-green-600" />
                  </div>
                  <h4 className="text-xl font-bold">Mensagem Enviada!</h4>
                  <p className="text-muted-foreground">Obrigado pelo contato. Responderemos em breve.</p>
                  <Button variant="outline" onClick={() => setIsSuccess(false)}>Enviar outra mensagem</Button>
                </div>
              ) : (
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Nome Completo</label>
                    <Input name="name" required placeholder="Como devemos chamar você?" className="bg-white" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">E-mail</label>
                    <Input name="email" required placeholder="seu@email.com" type="email" className="bg-white" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Assunto</label>
                    <Input name="subject" required placeholder="Ex: Orçamento Perícia Grafotécnica" className="bg-white" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Mensagem</label>
                    <Textarea name="message" required placeholder="Descreva brevemente sua necessidade..." className="bg-white min-h-[150px]" />
                  </div>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 text-white py-6 text-lg flex items-center justify-center gap-2"
                    translate="no"
                  >
                    {isSubmitting ? "Enviando..." : (
                      <>
                        Enviar Solicitação <Send className="h-5 w-5" />
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

export default ContactPage;
