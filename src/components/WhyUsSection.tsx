import { Palette, Target, Smartphone, HeadphonesIcon } from "lucide-react";

const benefits = [
  {
    icon: Palette,
    title: "Diseño Profesional",
    description: "Sitios web con diseño moderno y único que reflejan la identidad de tu marca.",
  },
  {
    icon: Target,
    title: "Enfoque en Resultados",
    description: "Cada proyecto está diseñado para generar leads, ventas y crecimiento real.",
  },
  {
    icon: Smartphone,
    title: "Optimización Móvil",
    description: "Todos nuestros sitios se ven perfectos en celulares, tablets y computadoras.",
  },
  {
    icon: HeadphonesIcon,
    title: "Atención Personalizada",
    description: "Comunicación directa por WhatsApp. Respondemos rápido y entendemos tus necesidades.",
  },
];

const WhyUsSection = () => {
  return (
    <section id="nosotros" className="py-24 relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="text-primary font-medium text-sm uppercase tracking-wider">¿Por qué elegirnos?</span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
              Tu éxito digital es nuestra prioridad
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              En Nortech Digital combinamos creatividad, tecnología y estrategia 
              para crear soluciones que realmente funcionan. No solo hacemos sitios web bonitos, 
              hacemos herramientas de negocio.
            </p>
            
            {/* CTA */}
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-orange-glow border-2 border-background flex items-center justify-center text-xs font-bold text-primary-foreground"
                  >
                    {i}
                  </div>
                ))}
              </div>
              <div className="text-sm">
                <span className="font-semibold text-foreground">+50 clientes</span>
                <span className="text-muted-foreground"> confían en nosotros</span>
              </div>
            </div>
          </div>

          {/* Right - Benefits Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
