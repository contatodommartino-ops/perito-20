import { Link, useParams } from "react-router-dom";
import { Calendar, ArrowLeft } from "lucide-react";
import NotFound from "./NotFound";
import SEO from "@/components/SEO";

const articles: Record<
  string,
  {
    title: string;
    date: string;
    publishedAt: string;
    category: string;
    intro: string;
    content: { heading: string; body: string[] }[];
  }
> = {
  "assistente-tecnico-pericia-grafotecnica": {
    title: "O papel do assistente técnico na perícia grafotécnica judicial",
    date: "15 Mai, 2024",
    publishedAt: "2024-05-15",
    category: "Assistência Técnica",
    intro:
      "Entenda como a atuação de um assistente técnico pode ser determinante para o resultado de um processo envolvendo assinaturas contestadas.",
    content: [
      {
        heading: "O que faz o assistente técnico",
        body: [
          "O assistente técnico atua como apoio especializado à parte contratante, acompanhando a análise pericial e avaliando tecnicamente os pontos relevantes do caso.",
          "Sua função é observar o procedimento, revisar elementos do material questionado e contribuir com uma leitura técnica independente.",
        ],
      },
      {
        heading: "Por que sua atuação é importante",
        body: [
          "Em disputas envolvendo assinaturas ou preenchimentos, a presença de um assistente técnico ajuda a fortalecer a compreensão do processo e a organização dos quesitos.",
          "Isso permite que a parte interessada acompanhe a prova técnica com mais clareza e embasamento.",
        ],
      },
    ],
  },
  "fraudes-documentais-contratos": {
    title: "Como identificar as fraudes documentais mais comuns em contratos",
    date: "02 Mai, 2024",
    publishedAt: "2024-05-02",
    category: "Documentoscopia",
    intro:
      "Rasuras, montagens e alterações de suporte. Conheça as técnicas utilizadas por fraudadores e como a documentoscopia atua para detectá-las.",
    content: [
      {
        heading: "Alterações mais frequentes",
        body: [
          "Fraudes documentais podem incluir adulteração de datas, substituição de páginas, rasuras, sobreposição de textos e montagem de assinaturas.",
          "Essas alterações nem sempre são perceptíveis em uma leitura superficial, por isso a análise técnica é essencial.",
        ],
      },
      {
        heading: "Como a análise técnica ajuda",
        body: [
          "A documentoscopia avalia suporte, impressão, escrita, uniformidade e demais vestígios que indicam manipulação.",
          "Com isso, é possível identificar inconsistências e apontar elementos relevantes para a tomada de decisão.",
        ],
      },
    ],
  },
  "validade-pericia-grafotecnica-extrajudicial": {
    title: "A validade da perícia grafotécnica realizada de forma extrajudicial",
    date: "20 Abr, 2024",
    publishedAt: "2024-04-20",
    category: "Grafotécnica",
    intro:
      "Muitos acreditam que o laudo só tem valor se for judicial. Neste artigo, desmistificamos o uso do laudo extrajudicial em negociações e acordos.",
    content: [
      {
        heading: "Quando o laudo extrajudicial é útil",
        body: [
          "A perícia extrajudicial pode ser utilizada como instrumento técnico de apoio em negociações, análises internas e prevenção de litígios.",
          "Ela oferece um parecer especializado para orientar decisões antes mesmo da judicialização.",
        ],
      },
      {
        heading: "Valor técnico e objetivo",
        body: [
          "Embora não substitua uma perícia judicial em todos os contextos, o laudo extrajudicial possui valor técnico e pode contribuir para acordos e esclarecimentos.",
          "Seu uso depende da finalidade e da necessidade de cada caso.",
        ],
      },
    ],
  },
};

const BlogArticlePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? articles[slug] : null;

  if (!article) return <NotFound />;

  const description = `${article.intro} Conteúdo técnico e objetivo sobre ${article.category.toLowerCase()}.`;
  const canonicalPath = `/blog/${slug}`;
  const canonicalUrl = typeof window !== "undefined" ? `${window.location.origin}${canonicalPath}` : canonicalPath;
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description,
    datePublished: article.publishedAt,
    dateModified: article.publishedAt,
    author: {
      "@type": "Organization",
      name: "Veritas Assessoria Pericial",
    },
    publisher: {
      "@type": "Organization",
      name: "Veritas Assessoria Pericial",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonicalUrl,
    },
  };

  return (
    <div className="flex flex-col w-full">
      <SEO
        title={article.title}
        description={description}
        canonicalPath={canonicalPath}
        ogType="article"
        structuredData={articleSchema}
      />
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white mb-6">
            <ArrowLeft className="h-4 w-4" /> Voltar ao blog
          </Link>
          <div className="space-y-4">
            <span className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full text-sm font-medium w-fit">
              {article.category}
            </span>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight max-w-3xl">{article.title}</h1>
            <div className="flex items-center gap-2 text-white/70 text-sm">
              <Calendar className="h-4 w-4" /> {article.date}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="prose prose-slate max-w-none">
            <p className="text-xl text-muted-foreground leading-8">{article.intro}</p>

            {article.content.map((block) => (
              <div key={block.heading} className="mt-10">
                <h2>{block.heading}</h2>
                {block.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            ))}
          </div>

          <div className="mt-12">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 rounded-md border border-primary/20 px-4 py-3 text-sm font-bold text-primary hover:bg-primary/5"
            >
              <ArrowLeft className="h-4 w-4" /> Ver outros artigos
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogArticlePage;
