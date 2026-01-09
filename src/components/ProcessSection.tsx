import { MessageCircle, Search, PenTool, Code, HeartHandshake, Clock, Lock } from "lucide-react";
import { Button } from "./ui/button";

const steps = [
  {
    number: "00",
    icon: MessageCircle,
    title: "Contacto",
    description: "Nos escribes, entendemos tu idea y definimos el mejor camino para tu proyecto.",
  },
  {
    number: "01",
    icon: Search,
    title: "Diagnóstico",
    description: "Analizamos tu negocio, objetivos y competencia para crear una estrategia digital clara.",
  },
  {
    number: "02",
    icon: PenTool,
    title: "Diseño",
    description: "Creamos el diseño de tu sitio enfocado en experiencia de usuario y conversión, con revisiones ilimitadas.",
  },
  {
    number: "03",
    icon: Code,
    title: "Desarrollo & Entrega",
    description: "Lanzamos tu proyecto optimizado, te capacitamos y te entregamos todo listo para operar.",
  },
  {
    number: "04",
    icon: HeartHandshake,
    title: "Acompañamiento",
    description: "Seguimos contigo después del lanzamiento para soporte, mejoras y crecimiento.",
  },
];

const trustBadges = [
  { icon: Clock, text: "Tiempo promedio de entrega: 7–14 días" },
  { icon: MessageCircle, text: "Comunicación directa" },
  { icon: Lock, text: "Proceso claro y sin sorpresas" },
];

const ProcessSection = () => {
  return (
    <section id="proceso" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 section-light" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Nuestro Proceso</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Así trabajamos contigo
          </h2>
          <p className="text-muted-foreground text-lg">
            Un proceso simple y transparente para que siempre sepas 
            en qué etapa está tu proyecto.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-5 gap-6 relative mb-16">
          {/* Connection Line - Desktop */}
          <div className="hidden md:block absolute top-24 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Step Card */}
              <div className="text-center p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 group h-full">
                {/* Number Badge */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground font-display font-bold text-sm px-4 py-1 rounded-full">
                  {step.number}
                </div>
                
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                
                {/* Content */}
                <h3 className="font-display text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
              </div>
              
              {/* Arrow - Mobile */}
              {index < steps.length - 1 && (
                <div className="md:hidden flex justify-center my-4">
                  <div className="w-0.5 h-8 bg-primary/30" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Button
            variant="hero"
            size="lg"
            className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300"
            asChild
          >
            <a
              href="https://wa.me/526141696587?text=Hola%2C%20quiero%20iniciar%20mi%20proyecto%20con%20Nortech%20Digital"
              target="_blank"
              rel="noopener noreferrer"
            >
              Inicia tu proyecto con Nortech Digital
            </a>
          </Button>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            {trustBadges.map((badge, index) => (
              <div key={index} className="flex items-center gap-2 text-muted-foreground">
                <badge.icon className="w-5 h-5 text-primary" />
                <span className="text-sm">{badge.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
