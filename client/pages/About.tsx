import React from "react";
import { Award, BookOpen, Scale, ShieldCheck } from "lucide-react";

const AboutPage = () => {
  return (
    <div className="flex flex-col w-full">
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Sobre o Perito</h1>
          <p className="text-xl text-white/70 max-w-2xl">
            Conheça a trajetória e a formação técnica por trás da Veritas Assessoria.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-[4/5] bg-secondary rounded-lg overflow-hidden grayscale">
                <img
                  src="https://images.pexels.com/photos/8731037/pexels-photo-8731037.jpeg"
                  alt="Escritório Pericial"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6">Excelência e Imparcialidade</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    A Veritas Assessoria nasceu do compromisso com a verdade técnica e a ciência pericial. Atuamos em casos complexos de grafotécnica e documentoscopia, sempre pautados pelo rigor metodológico.
                  </p>
                  <p>
                    Nossa atuação é voltada para a prestação de serviços de alta qualidade, garantindo que a prova técnica seja apresentada de forma clara e objetiva, seja no âmbito judicial ou extrajudicial.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex gap-4">
                  <div className="bg-primary/5 p-2 rounded-full h-fit">
                    <Award className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">Formação Técnica</h4>
                    <p className="text-xs text-muted-foreground">Perito certificado em Perícia Grafotécnica e Documentoscopia.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-primary/5 p-2 rounded-full h-fit">
                    <Scale className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">Atuação Jurídica</h4>
                    <p className="text-xs text-muted-foreground">Experiência como assistente técnico em processos judiciais e extrajudiciais.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-primary/5 p-2 rounded-full h-fit">
                    <ShieldCheck className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">Ética Profissional</h4>
                    <p className="text-xs text-muted-foreground">Compromisso inabalável com o rigor técnico e imparcialidade.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
