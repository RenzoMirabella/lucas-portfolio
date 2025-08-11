import { useState } from "react";
import { ExternalLink, Play } from "lucide-react";
import ProjectCarousel from "../components/ProjectCarousel";
import { getFeaturedProjects, FEATURED_PROJECT_IDS, Project } from "../data/projects";
const Home = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  // Obtener proyectos destacados dinámicamente desde los datos compartidos
  const featuredProjects = getFeaturedProjects(FEATURED_PROJECT_IDS);
  
  const handleProjectClick = (projectId: number) => {
    // Find the project directly from featured projects (already in correct format)
    const project = featuredProjects.find(p => p.id === projectId);
    if (project) {
      setSelectedProject(project);
    }
  };

  const handleCloseCarousel = () => {
    setSelectedProject(null);
  };
  return (
    <div className="min-h-screen bg-portfolio-bg">
      {/* Featured Projects */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-portfolio-text mb-4">Proyectos Destacados</h2>
            <p className="text-portfolio-text-muted"></p>
          </div>
          
          {/* Projects Grid - Matching Trabajos section style */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {featuredProjects.map((project, index) => (
              <div 
                key={project.id} 
                className="animate-fade-in group cursor-pointer" 
                style={{ animationDelay: `${index * 150}ms` }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                onClick={() => handleProjectClick(project.id)}
              >
                <div className="relative aspect-[4/3] bg-portfolio-surface border border-portfolio-border rounded-lg overflow-hidden hover:border-portfolio-accent/50 transition-all duration-300 hover:shadow-lg">
                  {/* Media content - Image or Video */}
                  {project.images && project.images.length > 0 ? (
                    project.images[0].type === 'video' ? (
                      <video
                        className="w-full h-full object-cover"
                        poster={project.images[0].poster}
                        muted
                        loop
                        onMouseEnter={(e) => {
                          if (hoveredProject === project.id) {
                            e.currentTarget.play();
                          }
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.pause();
                          e.currentTarget.currentTime = 0;
                        }}
                      >
                        <source src={project.images[0].url} type="video/mp4" />
                        <source src={project.images[0].url.replace('.mp4', '.webm')} type="video/webm" />
                        {/* Fallback para navegadores que no soportan video */}
                        <div className="w-full h-full bg-gradient-to-br from-portfolio-accent/10 to-portfolio-accent/5 flex items-center justify-center">
                          <div className="w-16 h-16 bg-portfolio-accent/20 rounded-lg flex items-center justify-center">
                            <span className="text-portfolio-accent text-2xl font-bold">
                              {project.title.charAt(0)}
                            </span>
                          </div>
                        </div>
                      </video>
                    ) : (
                      <img
                        src={project.images[0].url}
                        alt={project.images[0].alt}
                        className="w-full h-full object-cover"
                      />
                    )
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-portfolio-accent/10 to-portfolio-accent/5 flex items-center justify-center">
                      <div className="w-16 h-16 bg-portfolio-accent/20 rounded-lg flex items-center justify-center">
                        <span className="text-portfolio-accent text-2xl font-bold">
                          {project.title.charAt(0)}
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Hover Overlay with Description */}
                  <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
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

                  {/* Category and media type indicators */}
                  <div className="absolute top-4 left-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-black/70 backdrop-blur-sm rounded-lg px-3 py-1">
                      <span className="text-white text-xs font-medium">{project.year}</span>
                    </div>
                    {project.images && project.images.length > 0 && project.images[0].type === 'video' && (
                      <div className="bg-black/70 backdrop-blur-sm rounded-lg px-2 py-1 flex items-center gap-1">
                        <Play size={12} className="text-white" />
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
            <a 
              href="/trabajos" 
              className="px-8 py-3 border border-portfolio-accent text-portfolio-accent hover:bg-portfolio-accent hover:text-portfolio-bg transition-all duration-300 rounded-lg font-medium hover:shadow-lg inline-block"
            >
              Ver todos los proyectos
            </a>
          </div>
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