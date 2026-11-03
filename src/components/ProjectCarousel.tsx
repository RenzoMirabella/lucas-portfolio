import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, X, ArrowLeft } from 'lucide-react';
import { Project, ProjectImage } from '../data/projects';

interface ProjectCarouselProps {
  project: Project;
  onClose: () => void;
}

const FOCUSABLE = 'a[href], button:not([disabled]), iframe, [tabindex]:not([tabindex="-1"])';

const ProjectCarousel = ({ project, onClose }: ProjectCarouselProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const hasMultiple = project.images.length > 1;

  // Función universal para renderizar media (imagen o video)
  const renderMedia = (media: ProjectImage, className: string = "") => {
    const mediaType = media.type || 'image';

    if (mediaType === 'video' && media.youtubeId) {
      return (
        <div className={`relative ${className}`}>
          <iframe
            src={`https://www.youtube.com/embed/${media.youtubeId}?rel=0&modestbranding=1&autoplay=0`}
            title={project.title}
            className="w-full aspect-video max-h-[75vh] rounded-lg"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
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

  // Bloquea el scroll de fondo, mueve el foco al modal y lo devuelve al cerrar
  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      previouslyFocused?.focus();
    };
  }, []);

  // Teclado: Esc cierra, flechas cambian de foto, Tab queda dentro del modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight' && hasMultiple) {
        nextImage();
      } else if (e.key === 'ArrowLeft' && hasMultiple) {
        prevImage();
      } else if (e.key === 'Tab' && dialogRef.current) {
        const focusable = dialogRef.current.querySelectorAll<HTMLElement>(FOCUSABLE);
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  });

  return (
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-dialog-title"
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm overflow-y-auto"
    >
      <div className="min-h-full flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between gap-4 p-4 sm:p-6 border-b border-portfolio-border/30">
          <button
            onClick={onClose}
            className="hidden sm:flex items-center gap-2 text-white hover:text-portfolio-accent transition-colors duration-300"
          >
            <ArrowLeft size={20} />
            <span>Volver</span>
          </button>

          <div className="text-center min-w-0 flex-1">
            <h2 id="project-dialog-title" className="text-lg sm:text-2xl font-bold text-white">{project.title}</h2>
            <p className="text-white/70 text-sm">{project.category}, {project.year}</p>
          </div>

          <button
            ref={closeButtonRef}
            onClick={onClose}
            aria-label="Cerrar"
            className="shrink-0 text-white hover:text-portfolio-accent transition-colors duration-300 p-2 hover:bg-white/10 rounded-lg"
          >
            <X size={24} />
          </button>
        </div>

        {/* Main Content - Full Width Carousel */}
        <div className="flex-1 flex flex-col items-center justify-center gap-6 p-4 sm:p-8">
          {project.images.length > 0 ? (
            <>
              {/* Main Media - Larger Size */}
              <div className="relative w-full max-w-6xl">
                {renderMedia(
                  project.images[currentImageIndex],
                  "w-full max-h-[75vh] object-contain rounded-lg"
                )}

                {/* Navigation Arrows */}
                {hasMultiple && (
                  <>
                    <button
                      onClick={prevImage}
                      aria-label="Foto anterior"
                      className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 sm:p-4 rounded-full transition-all duration-300 hover:scale-110"
                    >
                      <ChevronLeft size={28} />
                    </button>
                    <button
                      onClick={nextImage}
                      aria-label="Foto siguiente"
                      className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 sm:p-4 rounded-full transition-all duration-300 hover:scale-110"
                    >
                      <ChevronRight size={28} />
                    </button>
                  </>
                )}
              </div>

              {/* Thumbnail Navigation + Image Counter */}
              {hasMultiple && (
                <div className="flex items-center gap-3 bg-black/50 px-4 py-3 rounded-lg">
                  {project.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToImage(index)}
                      aria-label={`Ver foto ${index + 1}`}
                      aria-current={index === currentImageIndex ? 'true' : undefined}
                      className={`w-4 h-4 rounded-full transition-all duration-300 ${
                        index === currentImageIndex
                          ? 'bg-portfolio-accent'
                          : 'bg-white/30 hover:bg-white/50'
                      }`}
                    />
                  ))}
                  <span className="ml-1 text-white text-sm font-medium" aria-live="polite">
                    {currentImageIndex + 1} / {project.images.length}
                  </span>
                </div>
              )}

              {project.detailedDescription && (
                <p className="max-w-3xl text-center text-white/80 leading-relaxed">
                  {project.detailedDescription}
                </p>
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
