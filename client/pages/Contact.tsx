import React from "react";
import { Mail, MessageCircle, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactPage = () => {
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
              <form className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Nome Completo</label>
                  <Input placeholder="Como devemos chamar você?" className="bg-white" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">E-mail</label>
                  <Input placeholder="seu@email.com" type="email" className="bg-white" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Assunto</label>
                  <Input placeholder="Ex: Orçamento Perícia Grafotécnica" className="bg-white" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Mensagem</label>
                  <Textarea placeholder="Descreva brevemente sua necessidade..." className="bg-white min-h-[150px]" />
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 text-white py-6 text-lg" translate="no">
                  Enviar Solicitação
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
