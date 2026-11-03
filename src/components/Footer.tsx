import { Instagram, Youtube, Linkedin, Mail } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();

  const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/lucasovejero/", label: "Instagram" },
    { icon: Youtube, href: "https://www.youtube.com/@lucasovejero9", label: "YouTube" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/ovejerolucas/", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-portfolio-surface border-t border-portfolio-border mt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          {/* Social Links */}
          <div className="flex items-center space-x-2">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-portfolio-text-muted hover:text-portfolio-accent transition-colors duration-300"
                aria-label={label}
              >
                <Icon size={20} />
              </a>
            ))}
          </div>

          {/* Contact Button (no hace falta dentro de la propia página de contacto) */}
          {location.pathname !== "/contacto" && (
            <Link
              to="/contacto"
              className="flex items-center space-x-2 px-4 py-2 bg-portfolio-accent text-portfolio-bg font-medium rounded-lg hover:bg-portfolio-accent-hover transition-colors duration-300"
            >
              <Mail size={16} />
              <span>Contacto</span>
            </Link>
          )}
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-portfolio-text-muted mt-6 pt-6 border-t border-portfolio-border">
          © {new Date().getFullYear()} Lucas Ovejero. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;