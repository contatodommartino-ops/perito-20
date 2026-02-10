import React from "react";
import { Link } from "react-router-dom";
import { Calendar, User, ArrowRight } from "lucide-react";

const BlogPage = () => {
  const posts = [
    {
      title: "O papel do assistente técnico na perícia grafotécnica judicial",
      excerpt: "Entenda como a atuação de um assistente técnico pode ser determinante para o resultado de um processo envolvendo assinaturas contestadas.",
      date: "15 Mai, 2024",
      category: "Assistência Técnica",
    },
    {
      title: "Como identificar as fraudes documentais mais comuns em contratos",
      excerpt: "Rasuras, montagens e alterações de suporte. Conheça as técnicas utilizadas por fraudadores e como a documentoscopia atua para detectá-las.",
      date: "02 Mai, 2024",
      category: "Documentoscopia",
    },
    {
      title: "A validade da perícia grafotécnica realizada de forma extrajudicial",
      excerpt: "Muitos acreditam que o laudo só tem valor se for judicial. Neste artigo, desmistificamos o uso do laudo extrajudicial em negociações e acordos.",
      date: "20 Abr, 2024",
      category: "Grafotécnica",
    }
  ];

  return (
    <div className="flex flex-col w-full">
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog Técnico</h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Conteúdo educativo e atualizações sobre o mundo pericial, jurídico e técnico.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <div key={index} className="group flex flex-col h-full bg-white border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all">
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                    <span className="bg-primary/10 text-primary px-2 py-1 rounded-md font-medium uppercase tracking-wider">{post.category}</span>
                    <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {post.date}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-base mb-8 flex-grow">
                    {post.excerpt}
                  </p>
                  <Link to="#" className="inline-flex items-center text-sm font-bold text-primary group-hover:gap-2 transition-all p-3 border border-primary/20 rounded-md hover:bg-primary/5">
                    Ler artigo completo <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
