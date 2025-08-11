import { useState } from 'react';
import { ChevronLeft, ChevronRight, X, ArrowLeft } from 'lucide-react';
import { Project, ProjectImage } from '../data/projects';

interface ProjectCarouselProps {
  project: Project;
  onClose: () => void;
}

const ProjectCarousel = ({ project, onClose }: ProjectCarouselProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Función universal para renderizar media (imagen o video)
  const renderMedia = (media: ProjectImage, className: string = "") => {
    const mediaType = media.type || 'image';
    
    if (mediaType === 'video' && media.youtubeId) {
      return (
        <div className={`relative ${className}`}>
          <iframe
            src={`https://www.youtube.com/embed/${media.youtubeId}?rel=0&modestbranding=1&autoplay=0`}
            title={media.alt}
            className="w-full h-full rounded-lg"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ aspectRatio: '16/9', minHeight: '400px' }}
          />
        </div>
      );
    }
    
    // Default: render as image
    return (
      <img
        src={media.url}
        alt={media.alt}
        className={className}
      />
    );
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm">
      <div className="h-full flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-portfolio-border/30">
          <button
            onClick={onClose}
            className="flex items-center gap-2 text-white hover:text-portfolio-accent transition-colors duration-300"
          >
            <ArrowLeft size={20} />
            <span>Volver a la galería</span>
          </button>
          
          <div className="text-center">
            <h1 className="text-2xl font-bold text-white">{project.title}</h1>
            <p className="text-white/70 text-sm">{project.category} • {project.year}</p>
          </div>

          <button
            onClick={onClose}
            className="text-white hover:text-portfolio-accent transition-colors duration-300 p-2 hover:bg-white/10 rounded-lg"
          >
            <X size={24} />
          </button>
        </div>

        {/* Main Content - Full Width Carousel */}
        <div className="flex-1 relative flex items-center justify-center p-8">
          {project.images.length > 0 ? (
            <>
              {/* Main Media - Larger Size */}
              <div className="relative w-full max-w-6xl max-h-full">
                {renderMedia(
                  project.images[currentImageIndex],
                  "w-full h-full max-h-[80vh] object-contain rounded-lg"
                )}
                  
                {/* Navigation Arrows */}
                {project.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-6 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-4 rounded-full transition-all duration-300 hover:scale-110"
                    >
                      <ChevronLeft size={28} />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-6 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-4 rounded-full transition-all duration-300 hover:scale-110"
                    >
                      <ChevronRight size={28} />
                    </button>
                  </>
                )}

                {/* Image Counter */}
                {project.images.length > 1 && (
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full text-sm font-medium">
                    {currentImageIndex + 1} / {project.images.length}
                  </div>
                )}
              </div>

              {/* Thumbnail Navigation */}
              {project.images.length > 1 && (
                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-3 bg-black/50 p-3 rounded-lg">
                  {project.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToImage(index)}
                      className={`w-4 h-4 rounded-full transition-all duration-300 ${
                        index === currentImageIndex
                          ? 'bg-portfolio-accent'
                          : 'bg-white/30 hover:bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              )}
            </>
          ) : (
            <div className="flex items-center justify-center h-full">
              <div className="text-center">
                <div className="w-32 h-32 bg-portfolio-accent/20 rounded-lg flex items-center justify-center mb-6 mx-auto">
                  <span className="text-portfolio-accent text-4xl font-bold">
                    {project.title.charAt(0)}
                  </span>
                </div>
                <p className="text-white/70 text-lg">No hay imágenes disponibles</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCarousel;
