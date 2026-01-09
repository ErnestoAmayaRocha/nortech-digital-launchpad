import { Search, PenTool, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Diagnóstico",
    description: "Analizamos tu negocio, objetivos y competencia para crear una estrategia digital.",
  },
  {
    number: "02",
    icon: PenTool,
    title: "Diseño",
    description: "Creamos el diseño de tu sitio con revisiones ilimitadas hasta que quedes 100% satisfecho. ",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Entrega",
    description: "Lanzamos tu proyecto optimizado, te capacitamos y brindamos soporte continuo.",
  },
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
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connection Line - Desktop */}
          <div className="hidden md:block absolute top-24 left-[20%] right-[20%] h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Step Card */}
              <div className="text-center p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 group">
                {/* Number Badge */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground font-display font-bold text-sm px-4 py-1 rounded-full">
                  {step.number}
                </div>
                
                {/* Icon */}
                <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <step.icon className="w-10 h-10 text-primary" />
                </div>
                
                {/* Content */}
                <h3 className="font-display text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
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
      </div>
    </section>
  );
};

export default ProcessSection;
