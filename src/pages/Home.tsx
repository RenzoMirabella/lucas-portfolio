import { useState } from "react";
import { Link } from "react-router-dom";
import { Maximize2, Play } from "lucide-react";
import ProjectCarousel from "../components/ProjectCarousel";
import { getFeaturedProjects, getThumbnail, handleCardKeyDown, FEATURED_PROJECT_IDS, Project } from "../data/projects";

const Home = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Obtener proyectos destacados dinámicamente desde los datos compartidos
  const featuredProjects = getFeaturedProjects(FEATURED_PROJECT_IDS);

  const handleCloseCarousel = () => {
    setSelectedProject(null);
  };
  return (
    <div className="min-h-screen bg-portfolio-bg">
      {/* Featured Projects */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Título principal para buscadores y lectores de pantalla; visualmente el inicio arranca con los proyectos */}
          <h1 className="sr-only">Lucas Ovejero, filmmaker y fotógrafo en Mar del Plata</h1>

          <div className="mb-8">
            <h2 className="text-3xl font-bold text-portfolio-text">Proyectos Destacados</h2>
          </div>

          {/* Projects Grid - Matching Trabajos section style */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {featuredProjects.map((project, index) => (
              <div
                key={project.id}
                role="button"
                tabIndex={0}
                aria-label={`Ver ${project.title}`}
                className="animate-fade-in group cursor-pointer rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-portfolio-accent focus-visible:ring-offset-2 focus-visible:ring-offset-portfolio-bg"
                style={{ animationDelay: `${index * 150}ms` }}
                onClick={() => setSelectedProject(project)}
                onKeyDown={(e) => handleCardKeyDown(e, () => setSelectedProject(project))}
              >
                <div className="relative aspect-[4/3] bg-portfolio-surface border border-portfolio-border rounded-lg overflow-hidden hover:border-portfolio-accent/50 transition-all duration-300 hover:shadow-lg">
                  {/* Media content */}
                  {project.images && project.images.length > 0 ? (
                    <img
                      src={getThumbnail(project.images[0])}
                      alt={project.title}
                      loading={index < 2 ? "eager" : "lazy"}
                      decoding="async"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-portfolio-accent/10 to-portfolio-accent/5 flex items-center justify-center">
                      <div className="w-16 h-16 bg-portfolio-accent/20 rounded-lg flex items-center justify-center">
                        <span className="text-portfolio-accent text-2xl font-bold">
                          {project.title.charAt(0)}
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Hover Overlay with Description (always visible on touch screens) */}
                  <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-all duration-300 flex flex-col justify-end p-6 touch:opacity-100 touch:bg-transparent touch:bg-gradient-to-t touch:from-black/80 touch:via-transparent touch:to-transparent touch:p-4">
                    <div className="transform translate-y-4 group-hover:translate-y-0 group-focus-visible:translate-y-0 touch:translate-y-0 transition-transform duration-300">
                      <h3 className="text-white text-xl font-bold mb-2 touch:text-lg touch:mb-0">
                        {project.title}
                      </h3>
                      <p className="text-white/80 text-sm mb-3 touch:hidden">
                        {project.description}
                      </p>
                      <div className="flex items-center justify-between touch:hidden">
                        <span className="text-portfolio-accent text-sm font-medium">
                          {project.category}
                        </span>
                        <Maximize2 size={16} className="text-white/60" aria-hidden="true" />
                      </div>
                    </div>
                  </div>

                  {/* Category and media type indicators */}
                  <div className="absolute top-4 left-4 flex gap-2 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 touch:opacity-100 transition-opacity duration-300">
                    <div className="bg-black/70 backdrop-blur-sm rounded-lg px-3 py-1">
                      <span className="text-white text-xs font-medium">{project.year}</span>
                    </div>
                    {project.images && project.images.length > 0 && project.images[0].type === 'video' && (
                      <div className="bg-black/70 backdrop-blur-sm rounded-lg px-2 py-1 flex items-center gap-1">
                        <Play size={12} className="text-white" aria-hidden="true" />
                        <span className="text-white text-xs font-medium">Video</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All Projects Button - Fixed positioning */}
          <div className="flex justify-center">
            <Link
              to="/trabajos"
              className="px-8 py-3 border border-portfolio-accent text-portfolio-accent hover:bg-portfolio-accent hover:text-portfolio-bg transition-all duration-300 rounded-lg font-medium hover:shadow-lg inline-block"
            >
              Ver todos los proyectos
            </Link>
          </div>

          {/* Presentación breve al pie: quién, qué y dónde, en texto que Google y las IA puedan leer */}
          <p className="mt-16 max-w-2xl mx-auto text-center text-sm leading-relaxed text-portfolio-text-muted">
            Lucas Ovejero, filmmaker y fotógrafo en Mar del Plata. Video publicitario y fotografía para marcas como
            Hotel Meliá y PedidosYa, grandes eventos y proyectos de autor en todo el país.
          </p>
        </div>
      </section>

      {/* Project Carousel Modal */}
      {selectedProject && (
        <ProjectCarousel
          project={selectedProject}
          onClose={handleCloseCarousel}
        />
      )}
    </div>
  );
};
export default Home;
