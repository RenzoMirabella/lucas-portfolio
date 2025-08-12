const SobreMi = () => {
  return (
    <div className="min-h-screen bg-portfolio-bg">
      {/* Hero Section with Background */}
      <section className="relative py-32 overflow-hidden">
        {/* Background Image/Gradient */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-portfolio-accent/20 via-portfolio-bg to-portfolio-surface" />
          <div className="absolute inset-0 bg-gradient-overlay" />
        </div>

        <div className="relative container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8 animate-fade-in">
              <div>
                <h1 className="text-4xl md:text-6xl font-bold text-portfolio-text mb-6">
                  Hola, soy
                  <span className="block text-portfolio-accent">Lucas Ovejero</span>
                </h1>
                
                <p className="text-xl text-portfolio-text-muted leading-relaxed">
                Desde chico siempre fui el que estaba detrás de cámara, tratando de capturar momentos que no quería olvidar. Con el tiempo, esa curiosidad se transformó en una pasión que hoy es parte de mi día a día. La fotografía y el cine me enseñaron a mirar distinto, a encontrar belleza en lo cotidiano y a contar historias sin necesidad de palabras. Cada proyecto es una excusa para explorar, aprender y conectar con otras personas. 
                Hoy me dedico al filmmaking y a la fotografía, con la misma pasión por capturar momentos que digan algo. Disfruto tanto de filmar una historia como de encontrar una en una sola imagen. Trabajo para crear piezas que no solo se vean bien, sino que digan algo. Porque cuando una historia está bien contada, no se olvida.
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-portfolio-text mb-3"></h3>
                  <p className="text-portfolio-text-muted leading-relaxed">                  
                  </p>
                </div>

              </div>
            </div>

            {/* Image/Visual Element */}
            <div className="animate-slide-up">
              <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-portfolio-accent/30 to-portfolio-accent/10 rounded-2xl overflow-hidden">
                  <img 
                    src="/images/forro.jpeg" 
                    alt="Lucas Ovejero" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-portfolio-accent/20 rounded-full animate-glow" />
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-portfolio-accent/15 rounded-full animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mi Equipo Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-4xl font-bold text-portfolio-text text-center mb-16">
              Mi Equipo
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Mis Cámaras",
                  description: (
                    <>
                      Sony FX3.<br />
                      Sony A7III.
                    </>
                  ),
                  imageUrl: "/images/camara.png" // Cambia por tu imagen
                },
                {
                  title: "Drone",
                  description: "DJI Mavic 3 Pro.",
                  imageUrl: "/images/drone.png" // Cambia por tu imagen
                },
                {
                  title: "Software de Edición",
                  description: "Davinci Resolve Studio.",
                  imageUrl: "/images/davinci.png" // Cambia por tu imagen
                },
                {
                  title: "Lentes",
                  description: (
                    <>
                      Sony 16-35 GM 2.8<br />
                     Tamron 28-75 2.8
                    </>
                  ),
                  imageUrl: "/images/lentes.png" // Cambia por tu imagen
                }
              ].map((equipment, index) => (
                <div 
                  key={index}
                  className="text-center space-y-4 animate-scale-in"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="w-48 h-48 bg-portfolio-accent/20 rounded-lg flex items-center justify-center mx-auto overflow-hidden">
                    <img 
                      src={equipment.imageUrl} 
                      alt={equipment.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // Fallback al emoji si la imagen no carga
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.parentElement!.innerHTML = '<span class="text-2xl text-portfolio-accent">📷</span>';
                      }}
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-portfolio-text">
                    {equipment.title}
                  </h3>
                  <p className="text-portfolio-text-muted">
                    {equipment.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>



    </div>
  );
};

export default SobreMi;