import { useState } from 'react';
import { Maximize2 } from 'lucide-react';
import ProjectCarousel from './ProjectCarousel';
import { projects, Project, ProjectImage, getThumbnail, handleCardKeyDown } from '../data/projects';
import { usePageTitle } from '@/hooks/use-page-title';



const InteractiveGallery = () => {
  usePageTitle('Trabajos');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Portada de la tarjeta: imagen liviana; el reproductor de YouTube se carga recién en el modal
  const renderMedia = (media: ProjectImage, alt: string, className: string = "") => {
    return (
      <div className="relative w-full h-full">
        <img
          src={getThumbnail(media)}
          alt={alt}
          loading="lazy"
          decoding="async"
          className={`w-full h-full object-cover ${className}`}
        />
        {media.type === 'video' && (
          /* Play button overlay for visual indication */
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="bg-black/50 rounded-full p-4 opacity-70">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
          </div>
        )}
      </div>
    );
  };





  // Manejar click en proyecto
  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
  };

  // Volver a la galería
  const handleBackToGallery = () => {
    setSelectedProject(null);
  };

  // Vista de galería principal (el modal se abre encima, así no se pierde el scroll)
  return (
    <div className="min-h-screen bg-portfolio-bg relative">
      <div className="container mx-auto px-4 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-portfolio-text">
            Mis Proyectos
          </h1>
        </div>

        {/* Grid de proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.id}
              role="button"
              tabIndex={0}
              aria-label={`Ver ${project.title}`}
              className="group cursor-pointer animate-fade-in focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-portfolio-accent focus-visible:ring-offset-2 focus-visible:ring-offset-portfolio-bg"
              style={{ animationDelay: `${index * 100}ms` }}

              onClick={() => handleProjectClick(project)}
              onKeyDown={(e) => handleCardKeyDown(e, () => handleProjectClick(project))}
            >
              <div className="relative aspect-[4/3] rounded-none overflow-hidden bg-portfolio-surface border border-portfolio-border hover:border-portfolio-accent/50 transition-all duration-500 hover:shadow-portfolio-accent">
                {/* Media (Imagen o Video) */}
                {project.images && project.images.length > 0 ? (
                  <div className="w-full h-full overflow-hidden">
                    {renderMedia(
                      project.images[0],
                      project.title,
                      "group-hover:scale-110 transition-transform duration-700"
                    )}
                  </div>
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-portfolio-accent/20 to-portfolio-accent/5">
                    <div className="text-center space-y-3">
                      <div className="w-16 h-16 bg-portfolio-accent/30 rounded-full flex items-center justify-center mx-auto">
                        <span className="text-2xl text-portfolio-accent">📸</span>
                      </div>
                      <p className="text-portfolio-text-muted text-sm">Sin imagen</p>
                    </div>
                  </div>
                )}

                {/* Overlay con información básica (siempre visible en pantallas táctiles) */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-all duration-300 flex flex-col justify-end p-6 touch:opacity-100 touch:bg-transparent touch:bg-gradient-to-t touch:from-black/80 touch:via-transparent touch:to-transparent touch:p-4">
                  <div className="transform translate-y-4 group-hover:translate-y-0 group-focus-visible:translate-y-0 touch:translate-y-0 transition-transform duration-300">
                    <h2 className="text-white text-xl font-bold mb-2 touch:text-lg touch:mb-0">
                      {project.title}
                    </h2>
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

                {/* Indicador de categoría */}
                <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm rounded-lg px-3 py-1 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 touch:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-xs font-medium">{project.year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Vista de detalle del proyecto con carrusel */}
      {selectedProject && (
        <ProjectCarousel
          project={selectedProject}
          onClose={handleBackToGallery}
        />
      )}
    </div>
  );
};

export default InteractiveGallery;
