import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQPage = () => {
  const faqs = [
    {
      question: "O que é perícia grafotécnica extrajudicial?",
      answer: "É a análise técnica de assinaturas e manuscritos realizada fora de um processo judicial. É muito utilizada para confirmar a autenticidade de contratos, cheques e documentos particulares antes de qualquer disputa na justiça ou para fundamentar uma notificação extrajudicial."
    },
    {
      question: "Qual a validade do laudo extrajudicial?",
      answer: "O laudo extrajudicial é uma prova documental técnica robusta. Embora não tenha a mesma força de um laudo determinado por um juiz (perícia judicial), ele possui plena validade para negociações, acordos, procedimentos administrativos e como base para o ajuizamento de ações."
    },
    {
      question: "Qual a diferença entre perito e assistente técnico?",
      answer: "O perito judicial é um profissional de confiança do juiz, atuando de forma imparcial para auxiliá-lo. Já o assistente técnico é contratado por uma das partes para acompanhar o trabalho do perito, garantir que a técnica correta seja aplicada, elaborar quesitos e produzir um parecer técnico que apoie a tese da parte contratante."
    },
    {
      question: "O que é documentoscopia?",
      answer: "A documentoscopia é a área da criminalística que estuda os documentos para verificar sua autenticidade ou determinar sua falsidade. Ela analisa não apenas a escrita, mas também o papel, as tintas, as impressões e os diversos elementos de segurança do documento."
    },
    {
      question: "Quando a documentoscopia é necessária?",
      answer: "Sempre que houver suspeita de fraude em um documento, como rasuras, montagens (copia e cola de assinaturas), alterações de valores ou datas, ou quando for necessário verificar se o papel e a impressão são autênticos (como em CNHs, identidades ou papel moeda)."
    },
    {
      question: "O que é investigação técnica in loco para usucapião?",
      answer: "É uma diligência técnica realizada diretamente no imóvel objeto de usucapião. O objetivo é coletar evidências físicas da posse, entrevistar vizinhos (se necessário), analisar divisas e produzir um relatório que servirá de apoio técnico para o advogado no processo de regularização imobiliária."
    },
    {
      question: "O serviço de investigação garante a usucapião?",
      answer: "Não. É importante deixar claro que o nosso serviço é de apoio técnico. A decisão final sobre a usucapião é exclusiva do Poder Judiciário ou do Oficial de Registro de Imóveis (no caso extrajudicial). Nosso relatório fornece as bases técnicas e fáticas para subsidiar o pedido."
    },
    {
      question: "Como solicitar um orçamento?",
      answer: "Você pode entrar em contato conosco pelo formulário do site, por e-mail ou diretamente via WhatsApp. Para um orçamento preciso, é ideal que você tenha em mãos (ou em arquivo digital) o documento ou a situação que precisa de análise."
    }
  ];

  return (
    <div className="flex flex-col w-full">
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Perguntas Frequentes</h1>
          <p className="text-xl text-white/70 max-w-2xl">
            Respostas claras e técnicas sobre nossos serviços e como podemos auxiliar em seu caso.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6 bg-secondary/20">
                <AccordionTrigger className="text-left font-bold text-lg hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;
