import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-portfolio-bg py-20">
      <div className="text-center max-w-lg mx-auto px-4">
        <div className="mb-8">
          <span className="text-8xl font-bold text-portfolio-accent">404</span>
        </div>
        
        <h1 className="text-3xl font-bold text-portfolio-text mb-4">
          Página no encontrada
        </h1>
        
        <p className="text-portfolio-text-muted mb-8 leading-relaxed">
          Lo siento, la página que estás buscando no existe o ha sido movida.
        </p>
        
        <Link 
          to="/" 
          className="inline-flex items-center space-x-2 px-6 py-3 bg-portfolio-accent text-portfolio-bg font-medium rounded-lg hover:bg-portfolio-accent-hover transition-all duration-300 hover:shadow-portfolio-accent"
        >
          <Home size={20} />
          <span>Volver al inicio</span>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
