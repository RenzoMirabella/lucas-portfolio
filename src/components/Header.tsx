import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Instagram, Youtube, Linkedin } from "lucide-react";

const Header = () => {
  const location = useLocation();

  const navItems = [
    { path: "/trabajos", label: "Trabajos" },
    { path: "/sobre-mi", label: "Sobre mí" },
    { path: "/contacto", label: "Contacto" },
  ];

  const isActive = (path: string) => location.pathname === path;

  const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/lucasovejero/", label: "Instagram" },
    { icon: Youtube, href: "https://www.youtube.com/@lucasovejero9", label: "YouTube" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/ovejerolucas/", label: "LinkedIn" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-portfolio-bg/80 backdrop-blur-md border-b border-portfolio-border">
      <div className="container mx-auto px-4 py-4">
        {/* Three-column layout */}
        <div className="grid grid-cols-3 items-center">
          {/* Left: Navigation */}
          <nav className="flex items-center space-x-6 justify-start">
            {navItems.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={cn(
                  "relative text-sm font-medium transition-all duration-300 hover:text-portfolio-accent",
                  isActive(path) 
                    ? "text-portfolio-accent" 
                    : "text-portfolio-text-muted"
                )}
              >
                {label}
                {isActive(path) && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-portfolio-accent rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          {/* Center: Logo/Name */}
          <div className="flex justify-center">
            <Link 
              to="/" 
              className="text-2xl font-bold text-portfolio-text hover:text-portfolio-accent transition-colors duration-300"
              style={{ fontFamily: 'Michroma, sans-serif' }}
            >
              Lucas Ovejero
            </Link>
          </div>

          {/* Right: Social Icons */}
          <div className="flex items-center space-x-4 justify-end">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-portfolio-text-muted hover:text-portfolio-accent transition-colors duration-300 p-2 hover:bg-portfolio-surface rounded-lg"
                aria-label={label}
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;