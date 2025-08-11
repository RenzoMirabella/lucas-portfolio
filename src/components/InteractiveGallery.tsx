import { useState, useEffect } from 'react';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import ProjectCarousel from './ProjectCarousel';
import { projects, Project, ProjectImage } from '../data/projects';



const InteractiveGallery = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Función universal para renderizar media (imagen o video)
  const renderMedia = (media: ProjectImage, className: string = "") => {
    const mediaType = media.type || 'image';
    
    if (mediaType === 'video' && media.youtubeId) {
      return (
        <div className={`relative w-full h-full ${className}`}>
          <iframe
            src={`https://www.youtube.com/embed/${media.youtubeId}?rel=0&modestbranding=1`}
            title={media.alt}
            className="w-full h-full object-cover"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          {/* Play button overlay for visual indication */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="bg-black/50 rounded-full p-4 opacity-70">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
          </div>
        </div>
      );
    }
    
    // Default: render as image
    return (
      <img
        src={media.url}
        alt={media.alt}
        className={`w-full h-full object-cover ${className}`}
      />
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

  // Vista de detalle del proyecto con carrusel
  if (selectedProject) {
    return (
      <ProjectCarousel 
        project={selectedProject} 
        onClose={handleBackToGallery} 
      />
    );
  }

  // Vista de galería principal
  return (
    <div className="min-h-screen bg-portfolio-bg font-['Ancona_CD',_'Inter',_sans-serif] relative">
      <div className="container mx-auto px-4 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-portfolio-text mb-6">
            Mis Proyectos
          </h1>
          <p className="text-xl text-portfolio-text-muted max-w-3xl mx-auto">
             
          </p>
        </div>

        {/* Grid de proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}

              onClick={() => handleProjectClick(project)}
            >
              <div className="relative aspect-[4/3] rounded-none overflow-hidden bg-portfolio-surface border border-portfolio-border hover:border-portfolio-accent/50 transition-all duration-500 hover:shadow-portfolio-accent">
                {/* Media (Imagen o Video) */}
                {project.images && project.images.length > 0 ? (
                  <div className="w-full h-full overflow-hidden">
                    {renderMedia(
                      project.images[0], 
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

                {/* Overlay con información básica */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-white text-xl font-bold mb-2">
                      {project.title}
                    </h3>
                    <p className="text-white/80 text-sm mb-3">
                      {project.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-portfolio-accent text-sm font-medium">
                        {project.category}
                      </span>
                      <ExternalLink size={16} className="text-white/60" />
                    </div>
                  </div>
                </div>

                {/* Indicador de categoría */}
                <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm rounded-lg px-3 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-xs font-medium">{project.year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>


    </div>
  );
};

export default InteractiveGallery;