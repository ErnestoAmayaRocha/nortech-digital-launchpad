import { ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const portfolioItems = [
  {
    category: "Landing Pages",
    projects: [
      { name: "Cognify", url: "https://ernestoamayarocha.github.io/cognify/" },
      { name: "Bebeleche", url: "https://ernestoamayarocha.github.io/Bebeleche-Front/" },
      { name: "Bitravel", url: "https://www.bitravel.app/" },
      { name: "ADN Creativo", url: "https://adn-creativo-landing-page-vue.vercel.app/" },
    ],
  },
  {
    category: "Invitaciones Digitales",
    projects: [
      { name: "Baby Shower de Sofía", url: "https://www.babyshowerdesofia.online/" },
    ],
  },
  {
    category: "Catálogos",
    projects: [
      { name: "HADAR Catálogo", url: "https://ernestoamayarocha.github.io/HADAR-CATALOGO/#sa" },
    ],
  },
  {
    category: "Rediseños Web",
    projects: [
      { name: "Sparkly Project", url: "https://sparkly-licorice-be4a1e.netlify.app/" },
      { name: "MGA Contratista", url: "https://www.mgacontratista.mx/" },
    ],
  },
];

const PortfolioSection = () => {
  return (
    <section id="portafolio" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium bg-primary/10 text-primary rounded-full">
            Portafolio
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            Revisa Nuestros{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">
              Trabajos
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explora algunos de los proyectos que hemos desarrollado para nuestros clientes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioItems.map((category, idx) => (
            <Card
              key={idx}
              className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-300"
            >
              <CardContent className="p-6">
                <h3 className="text-xl font-display font-semibold mb-4 text-primary">
                  {category.category}
                </h3>
                <ul className="space-y-3">
                  {category.projects.map((project, projectIdx) => (
                    <li key={projectIdx}>
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-foreground hover:text-primary transition-colors group"
                      >
                        <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                        <span>{project.name}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
