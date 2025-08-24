import { useState } from "react";
import { Mail, MapPin, Phone, Instagram, Youtube, Linkedin, Twitter, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contacto = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validaciones básicas
    if (!formData.nombre.trim() || !formData.email.trim() || !formData.mensaje.trim()) {
      toast({
        title: "Error",
        description: "Por favor completa todos los campos obligatorios.",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);

    try {
      // Preparar datos para Google Sheets
      const dataToSend = {
        timestamp: new Date().toLocaleString('es-AR', {
          timeZone: 'America/Argentina/Buenos_Aires',
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit'
        }),
        nombre: formData.nombre.trim(),
        email: formData.email.trim(),
        telefono: formData.telefono.trim() || 'No proporcionado',
        mensaje: formData.mensaje.trim()
      };

      // Enviar a Google Sheets
      // IMPORTANTE: Reemplaza esta URL con tu URL de Google Apps Script
      const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwxl0L9Dj5xeyHPYK4hXmv05SXYe71N95gt9SRZs08qhcQbCq9svbSgy9ZbD25lF3Gk/exec';
      
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend)
      });

      // Como usamos no-cors, no podemos verificar la respuesta
      // Asumimos que fue exitoso si no hubo error
      toast({
        title: "¡Mensaje enviado!",
        description: "Gracias por tu mensaje. Te responderé pronto.",
      });

      // Reset form
      setFormData({
        nombre: "",
        email: "",
        telefono: "",
        mensaje: ""
      });

    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      toast({
        title: "Error al enviar",
        description: "Hubo un problema al enviar tu mensaje. Por favor intenta nuevamente.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/lucasovejero/", label: "Instagram", color: "hover:text-gray-400" },
    { icon: Youtube, href: "https://www.youtube.com/@lucasovejero9", label: "Youtube", color: "hover:text-blue-300" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/ovejerolucas/", label: "LinkedIn", color: "hover:text-blue-400" },    
  ];

  const contactInfo = [
    { icon: Mail, label: "Email", value: "lucasovejero9@gmail.com" },
    { icon: Phone, label: "Teléfono", value: "+54 9 2234 39-3154" },
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

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="animate-fade-in">
            <div className="bg-portfolio-surface p-8 rounded-2xl border border-portfolio-border">
              <h2 className="text-2xl font-bold text-portfolio-text mb-6">
                Envíame un mensaje
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="nombre" className="block text-sm font-medium text-portfolio-text mb-2">
                    Nombre
                  </label>
                  <Input
                    id="nombre"
                    name="nombre"
                    type="text"
                    value={formData.nombre}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-portfolio-bg border-portfolio-border text-portfolio-text focus:border-portfolio-accent focus:ring-portfolio-accent"
                    placeholder="Tu nombre completo"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-portfolio-text mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-portfolio-bg border-portfolio-border text-portfolio-text focus:border-portfolio-accent focus:ring-portfolio-accent"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="telefono" className="block text-sm font-medium text-portfolio-text mb-2">
                    Teléfono <span className="text-portfolio-text-muted text-xs">(opcional)</span>
                  </label>
                  <Input
                    id="telefono"
                    name="telefono"
                    type="tel"
                    value={formData.telefono}
                    onChange={handleInputChange}
                    className="w-full bg-portfolio-bg border-portfolio-border text-portfolio-text focus:border-portfolio-accent focus:ring-portfolio-accent"
                    placeholder="+54 9 11 1234-5678"
                  />
                </div>

                <div>
                  <label htmlFor="mensaje" className="block text-sm font-medium text-portfolio-text mb-2">
                    Mensaje
                  </label>
                  <Textarea
                    id="mensaje"
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full bg-portfolio-bg border-portfolio-border text-portfolio-text focus:border-portfolio-accent focus:ring-portfolio-accent resize-none"
                    placeholder="Cuéntame sobre tu proyecto..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-portfolio-accent hover:bg-portfolio-accent-hover text-portfolio-bg font-semibold py-3 transition-all duration-300 hover:shadow-portfolio-accent disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    "Enviar mensaje"
                  )}
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Info & Social */}
          <div className="space-y-8 animate-slide-up">
            {/* Contact Information */}
            <div className="bg-portfolio-surface p-8 rounded-2xl border border-portfolio-border">
              <h3 className="text-xl font-bold text-portfolio-text mb-6">
                Información de contacto
              </h3>

              <div className="space-y-4">
                {contactInfo.map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-portfolio-accent/20 rounded-lg flex items-center justify-center">
                      <Icon size={20} className="text-portfolio-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-portfolio-text-muted">{label}</p>
                      <p className="text-portfolio-text font-medium">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-portfolio-surface p-8 rounded-2xl border border-portfolio-border">
              <h3 className="text-xl font-bold text-portfolio-text mb-6">
                Sígueme en redes
              </h3>

              <div className="grid grid-cols-3 gap-4">
                {socialLinks.map(({ icon: Icon, href, label, color }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`
                      flex flex-col items-center p-4 rounded-lg border border-portfolio-border
                      hover:border-portfolio-accent transition-all duration-300 group
                      ${color}
                    `}
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
    </div>
  );
};

export default Contacto;