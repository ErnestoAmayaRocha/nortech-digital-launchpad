import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import nortechIcon from "@/assets/nortech-icon.png";

const HeroSection = () => {
  const whatsappLink = "https://wa.me/526181413614?text=Hola,%20me%20interesa%20cotizar%20un%20proyecto";

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy via-background to-background" />
      <div className="absolute inset-0 geometric-pattern" />
      
      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-orange/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-muted/50 border border-border rounded-full px-4 py-2 mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm text-muted-foreground">Agencia Digital en México</span>
          </div>

          {/* Main Title */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight animate-slide-up">
            Llevamos tu negocio al{" "}
            <span className="gradient-text">mundo digital</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Creamos sitios web, tiendas en línea y soluciones digitales que 
            <span className="text-foreground font-medium"> convierten visitantes en clientes</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <Button variant="hero" size="lg" asChild>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5" />
                Cotiza por WhatsApp
              </a>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <a href="#servicios" className="flex items-center gap-2">
                Ver servicios
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
          </div>

          {/* Floating Logo */}
          <div className="relative mx-auto w-48 h-48 md:w-64 md:h-64 animate-float">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl" />
            <img
              src={nortechIcon}
              alt="Nortech Digital Fox"
              className="relative w-full h-full object-contain drop-shadow-2xl"
            />
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-xl mx-auto mt-12 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            {[
              { number: "50+", label: "Proyectos" },
              { number: "98%", label: "Satisfacción" },
              { number: "24h", label: "Respuesta" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl md:text-3xl font-display font-bold text-primary">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
