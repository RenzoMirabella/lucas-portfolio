import { Mail, MapPin, Phone, MessageCircle, Instagram, Youtube, Linkedin } from "lucide-react";

const Contacto = () => {

  const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/lucasovejero/", label: "Instagram" },
    { icon: Youtube, href: "https://www.youtube.com/@lucasovejero9", label: "YouTube" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/ovejerolucas/", label: "LinkedIn" },
  ];

  const contactInfo = [
    { icon: MessageCircle, label: "WhatsApp", value: "+54 9 2234 39-3154", href: "https://wa.me/5492234393154" },
    { icon: Mail, label: "Email", value: "lucasovejero9@gmail.com", href: "mailto:lucasovejero9@gmail.com" },
    { icon: Phone, label: "Teléfono", value: "+54 9 2234 39-3154", href: "tel:+5492234393154" },
    { icon: MapPin, label: "Ubicación", value: "Mar del Plata, Buenos Aires" },
  ];

  return (
    <div className="min-h-screen bg-portfolio-bg py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-portfolio-text mb-6 animate-fade-in">
            Hablemos
          </h1>
          <p className="text-xl text-portfolio-text-muted max-w-3xl mx-auto animate-slide-up">
            ¿Tenés un proyecto en mente? Me encantaría escuchar tu idea y
            ayudarte a convertirla en realidad.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-8 animate-slide-up">
          {/* Contact Information */}
          <div className="bg-portfolio-surface p-8 rounded-2xl border border-portfolio-border">
            <h2 className="text-xl font-bold text-portfolio-text mb-6">
              Escribime
            </h2>

            <ul className="space-y-2">
              {contactInfo.map(({ icon: Icon, label, value, href }) => {
                const content = (
                  <>
                    <div className="w-10 h-10 shrink-0 bg-portfolio-accent/20 rounded-lg flex items-center justify-center">
                      <Icon size={20} className="text-portfolio-accent" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm text-portfolio-text-muted">{label}</p>
                      <p className="text-portfolio-text font-medium break-words">{value}</p>
                    </div>
                  </>
                );

                return (
                  <li key={label}>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="flex items-center space-x-4 -mx-3 px-3 py-2 rounded-lg hover:bg-portfolio-surface-hover transition-colors duration-300"
                      >
                        {content}
                      </a>
                    ) : (
                      <div className="flex items-center space-x-4 -mx-3 px-3 py-2">{content}</div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Social Media */}
          <div className="bg-portfolio-surface p-8 rounded-2xl border border-portfolio-border">
            <h2 className="text-xl font-bold text-portfolio-text mb-6">
              Seguime en redes
            </h2>

            <div className="grid grid-cols-3 gap-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center p-4 rounded-lg border border-portfolio-border hover:border-portfolio-accent transition-all duration-300 group"
                >
                  <Icon size={24} className="text-portfolio-text-muted group-hover:text-portfolio-accent transition-colors duration-300" />
                  <span className="text-xs text-portfolio-text-muted mt-2 group-hover:text-portfolio-text transition-colors duration-300">
                    {label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
