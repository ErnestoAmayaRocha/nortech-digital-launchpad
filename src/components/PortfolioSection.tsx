import { ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const portfolioItems = [
  {
    category: "Landing Pages",
    projects: [
      {
        name: "Cognify",
        url: "https://ernestoamayarocha.github.io/cognify/",
        description: "Landing page moderna para empresa de inteligencia artificial y tecnología cognitiva.",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
      },
      {
        name: "Bebeleche",
        url: "https://ernestoamayarocha.github.io/Bebeleche-Front/",
        description: "Página de presentación para restaurante con diseño vibrante y apetitoso.",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop",
      },
      {
        name: "Bitravel",
        url: "https://www.bitravel.app/",
        description: "Plataforma de viajes con interfaz intuitiva para reservaciones y experiencias.",
        image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=400&fit=crop",
      },
      {
        name: "ADN Creativo",
        url: "https://adn-creativo-landing-page-vue.vercel.app/",
        description: "Agencia creativa con diseño bold y portafolio interactivo.",
        image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&h=400&fit=crop",
      },
    ],
  },
  {
    category: "Invitaciones Digitales",
    projects: [
      {
        name: "Baby Shower de Sofía",
        url: "https://www.babyshowerdesofia.online/",
        description: "Invitación digital interactiva para baby shower con animaciones y confirmación de asistencia.",
        image: "https://images.unsplash.com/photo-1519689680058-324335c77eba?w=600&h=400&fit=crop",
      },
    ],
  },
  {
    category: "Catálogos",
    projects: [
      {
        name: "HADAR Catálogo",
        url: "https://ernestoamayarocha.github.io/HADAR-CATALOGO/#sa",
        description: "Catálogo digital de productos con navegación fluida y diseño elegante.",
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop",
      },
    ],
  },
  {
    category: "Rediseños Web",
    projects: [
      {
        name: "Sparkly Project",
        url: "https://sparkly-licorice-be4a1e.netlify.app/",
        description: "Rediseño completo de sitio web con enfoque en experiencia de usuario moderna.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      },
      {
        name: "MGA Contratista",
        url: "https://www.mgacontratista.mx/",
        description: "Sitio profesional para empresa de construcción con galería de proyectos.",
        image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop",
      },
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

        {portfolioItems.map((category, categoryIdx) => (
          <div key={categoryIdx} className="mb-16 last:mb-0">
            <div className="flex items-center gap-4 mb-8">
              <Badge variant="outline" className="text-primary border-primary/50 px-4 py-1.5 text-sm">
                {category.category}
              </Badge>
              <div className="h-px flex-1 bg-border/50"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.projects.map((project, projectIdx) => (
                <a
                  key={projectIdx}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  <Card className="overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 h-full">
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                        <span className="flex items-center gap-2 text-sm font-medium text-primary">
                          Ver proyecto <ExternalLink className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                    <CardContent className="p-5">
                      <h3 className="text-lg font-display font-semibold mb-2 group-hover:text-primary transition-colors">
                        {project.name}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </CardContent>
                  </Card>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PortfolioSection;
