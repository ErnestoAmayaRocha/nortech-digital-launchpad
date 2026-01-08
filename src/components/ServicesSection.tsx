import { Globe, RefreshCw, ShoppingCart, Store, PartyPopper } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Landing Pages",
    description: "Páginas web profesionales diseñadas para convertir visitantes en clientes. Ideales si tu negocio aún no tiene presencia digital.",
  },
  {
    icon: RefreshCw,
    title: "Rediseño Web",
    description: "Renovamos tu sitio web actual con un diseño moderno, optimizado para móviles y enfocado en resultados.",
  },
  {
    icon: ShoppingCart,
    title: "Catálogos Digitales",
    description: "Catálogos interactivos perfectos para vender por WhatsApp. Tus clientes podrán ver productos y hacer pedidos fácilmente.",
  },
  {
    icon: Store,
    title: "Tiendas Shopify",
    description: "E-commerce completo con Shopify. Vende en línea con pagos seguros, inventario automatizado y envíos integrados.",
  },
  {
    icon: PartyPopper,
    title: "Invitaciones Digitales",
    description: "Invitaciones elegantes y personalizadas para bodas, XV años, bautizos y eventos corporativos.",
  },
];

const ServicesSection = () => {
  return (
    <section id="servicios" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 section-light" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Nuestros Servicios</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Soluciones digitales para tu negocio
          </h2>
          <p className="text-muted-foreground text-lg">
            Desde una página web sencilla hasta una tienda en línea completa, 
            tenemos la solución perfecta para ti.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group p-8 rounded-2xl card-gradient border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              
              {/* Content */}
              <h3 className="font-display text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
