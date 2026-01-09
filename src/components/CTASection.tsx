import { MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  const whatsappLink = "https://wa.me/526181413614?text=Hola,%20me%20interesa%20cotizar%20un%20proyecto";

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-background" />
      
      {/* Floating Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-orange-500/15 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      
      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/40 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>
      
      {/* Geometric Shapes */}
      <div className="absolute top-20 left-10 w-20 h-20 border border-primary/20 rotate-45 animate-spin" style={{ animationDuration: '20s' }} />
      <div className="absolute bottom-20 right-10 w-16 h-16 border border-orange-500/20 rotate-12 animate-spin" style={{ animationDuration: '25s', animationDirection: 'reverse' }} />
      <div className="absolute top-1/3 right-1/4 w-12 h-12 border-2 border-primary/15 rounded-full animate-ping" style={{ animationDuration: '3s' }} />
      <div className="absolute bottom-1/3 left-1/4 w-8 h-8 border-2 border-orange-500/15 rounded-full animate-ping" style={{ animationDuration: '4s' }} />
      
      {/* Moving Lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent animate-pulse" style={{ animationDuration: '3s' }} />
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-orange-500/15 to-transparent animate-pulse" style={{ animationDuration: '4s', animationDelay: '1s' }} />
      </div>
      
      {/* Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full" 
           style={{ background: 'radial-gradient(circle, hsl(var(--primary) / 0.15) 0%, transparent 70%)' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Decorative Elements */}
          <div className="flex justify-center mb-6">
            <div className="flex items-center gap-2">
              <div className="w-12 h-px bg-gradient-to-r from-transparent to-primary/50" />
              <div className="w-3 h-3 border-2 border-primary/50 rotate-45 animate-pulse" />
              <div className="w-12 h-px bg-gradient-to-l from-transparent to-primary/50" />
            </div>
          </div>
          
          {/* Main Content */}
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 animate-fade-in">
            ¿Listo para llevar tu negocio al{" "}
            <span className="gradient-text relative">
              siguiente nivel?
              <span className="absolute -inset-1 bg-primary/10 blur-xl rounded-lg -z-10" />
            </span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl mb-10 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Cotiza tu proyecto sin compromiso. Responderemos en menos de 24 horas 
            con una propuesta personalizada.
          </p>

          {/* CTA Button with Glow Effect */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="relative group">
              {/* Button Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-orange-500 rounded-lg blur opacity-40 group-hover:opacity-75 transition duration-500 animate-pulse" />
              <Button variant="hero" size="lg" asChild className="relative">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <MessageCircle className="w-5 h-5" />
                  Cotiza por WhatsApp
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
          </div>

          {/* Trust Badges with Animation */}
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-muted-foreground text-sm animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="flex items-center gap-2 group">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="group-hover:text-foreground transition-colors">Respuesta en 24h</span>
            </div>
            <div className="flex items-center gap-2 group">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }} />
              <span className="group-hover:text-foreground transition-colors">Cotización gratis</span>
            </div>
            <div className="flex items-center gap-2 group">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '0.6s' }} />
              <span className="group-hover:text-foreground transition-colors">Sin compromisos</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
