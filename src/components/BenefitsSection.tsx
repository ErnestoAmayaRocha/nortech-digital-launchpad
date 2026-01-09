import { Check, TrendingUp, Shield, Smartphone, MessageCircle, Rocket, Zap, Lock, HeadphonesIcon, Clock } from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    text: "Aumenta tus clientes potenciales",
  },
  {
    icon: Shield,
    text: "Diseño profesional que genera confianza",
  },
  {
    icon: Smartphone,
    text: "Optimizado para móviles",
  },
  {
    icon: MessageCircle,
    text: "Integración con WhatsApp",
  },
  {
    icon: Rocket,
    text: "Listos para publicar",
  },
  {
    icon: Zap,
    text: "Carga ultra rápida",
  },
  {
    icon: Lock,
    text: "Seguridad SSL incluida",
  },
  {
    icon: HeadphonesIcon,
    text: "Soporte continuo",
  },
  {
    icon: Clock,
    text: "Entrega en tiempo récord",
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-orange-glow/10" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 border border-primary/20 rounded-full animate-pulse" />
      <div className="absolute bottom-20 right-10 w-48 h-48 border border-orange-glow/20 rounded-full" />
      <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-primary rounded-full animate-pulse" />
      <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-orange-glow rounded-full animate-pulse" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-primary font-medium text-sm uppercase tracking-wider">
                Beneficios
              </span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold">
              ¿Por qué{" "}
              <span className="bg-gradient-to-r from-primary to-orange-glow bg-clip-text text-transparent">
                Nortech Digital
              </span>
              ?
            </h2>
          </div>
          
          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group relative p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-orange-glow/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10 flex items-start gap-4">
                  {/* Icon container */}
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-orange-glow flex items-center justify-center shadow-lg shadow-primary/25 group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  
                  {/* Text */}
                  <div className="flex-1 pt-2">
                    <div className="flex items-center gap-2 mb-1">
                      <Check className="w-5 h-5 text-primary" />
                    </div>
                    <p className="font-semibold text-foreground text-lg leading-tight">
                      {benefit.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Bottom CTA */}
          <div className="mt-16 text-center">
            <p className="text-muted-foreground text-lg">
              Todo lo que necesitas para{" "}
              <span className="text-primary font-semibold">destacar en línea</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
