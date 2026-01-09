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
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-orange-glow/10" />
      
      {/* Animated floating orbs */}
      <div className="absolute top-20 left-[10%] w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-[pulse_4s_ease-in-out_infinite]" />
      <div className="absolute bottom-20 right-[10%] w-96 h-96 bg-orange-glow/15 rounded-full blur-3xl animate-[pulse_5s_ease-in-out_infinite_1s]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl animate-[pulse_6s_ease-in-out_infinite_2s]" />
      
      {/* Floating geometric shapes */}
      <div className="absolute top-32 left-[15%] w-20 h-20 border-2 border-primary/30 rounded-2xl rotate-12 animate-[spin_20s_linear_infinite]" />
      <div className="absolute top-48 right-[20%] w-16 h-16 border-2 border-orange-glow/30 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
      <div className="absolute bottom-32 left-[25%] w-12 h-12 border-2 border-primary/20 rotate-45 animate-[spin_25s_linear_infinite]" />
      <div className="absolute bottom-48 right-[15%] w-24 h-24 border-2 border-orange-glow/20 rounded-3xl -rotate-12 animate-[spin_30s_linear_infinite_reverse]" />
      
      {/* Floating dots */}
      <div className="absolute top-[20%] left-[30%] w-3 h-3 bg-primary rounded-full animate-[bounce_3s_ease-in-out_infinite]" />
      <div className="absolute top-[40%] right-[25%] w-2 h-2 bg-orange-glow rounded-full animate-[bounce_2.5s_ease-in-out_infinite_0.5s]" />
      <div className="absolute bottom-[30%] left-[20%] w-4 h-4 bg-primary/60 rounded-full animate-[bounce_3.5s_ease-in-out_infinite_1s]" />
      <div className="absolute top-[60%] right-[10%] w-3 h-3 bg-orange-glow/60 rounded-full animate-[bounce_2s_ease-in-out_infinite_1.5s]" />
      <div className="absolute top-[15%] right-[40%] w-2 h-2 bg-primary/80 rounded-full animate-[bounce_4s_ease-in-out_infinite_0.3s]" />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 backdrop-blur-sm">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-primary font-medium text-sm uppercase tracking-wider">
                Beneficios
              </span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold">
              ¿Por qué{" "}
              <span className="bg-gradient-to-r from-primary to-orange-glow bg-clip-text text-transparent animate-[pulse_3s_ease-in-out_infinite]">
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
                className="group relative p-6 rounded-2xl bg-card/60 backdrop-blur-md border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 to-orange-glow/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Animated border gradient */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-[-1px] rounded-2xl bg-gradient-to-r from-primary via-orange-glow to-primary bg-[length:200%_100%] animate-[shimmer_2s_linear_infinite] p-[1px]">
                    <div className="w-full h-full rounded-2xl bg-card" />
                  </div>
                </div>
                
                <div className="relative z-10 flex items-start gap-4">
                  {/* Icon container */}
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-orange-glow flex items-center justify-center shadow-lg shadow-primary/25 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <benefit.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  
                  {/* Text */}
                  <div className="flex-1 pt-2">
                    <div className="flex items-center gap-2 mb-1">
                      <Check className="w-5 h-5 text-primary group-hover:scale-125 transition-transform duration-300" />
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
              <span className="text-primary font-semibold bg-gradient-to-r from-primary to-orange-glow bg-clip-text text-transparent">
                destacar en línea
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
