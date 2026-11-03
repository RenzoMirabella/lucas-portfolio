import { Link } from "react-router-dom";
import BrandMarquee from "@/components/BrandMarquee";
import { brands } from "@/data/brands";

const equipment = [
  {
    title: "Cámaras",
    items: ["Sony FX3", "Sony A7III"],
    imageUrl: "/images/camara.png"
  },
  {
    title: "Drone",
    items: ["DJI Mavic 3 Pro"],
    imageUrl: "/images/drone.png"
  },
  {
    title: "Lentes",
    items: ["Sony 16-35 GM 2.8", "Tamron 28-75 2.8"],
    imageUrl: "/images/lentes.png"
  },
  {
    title: "Edición",
    items: ["DaVinci Resolve Studio"],
    imageUrl: "/images/davinci.png"
  }
];

const SobreMi = () => {

  return (
    <div className="min-h-screen bg-portfolio-bg">
      {/* Presentación */}
      {/* En celular: nombre, foto, texto. En escritorio: nombre y texto a la izquierda, foto a la derecha */}
      <section className="container mx-auto px-4 pt-12 pb-16 md:pt-20 md:pb-24">
        <div className="grid gap-8 md:grid-cols-12 md:gap-x-12 lg:gap-x-16">
          <div className="md:col-span-7">
            <h1 className="text-portfolio-text">
              <span className="block text-lg md:text-xl font-medium text-portfolio-text-muted mb-3">
                Hola, soy
              </span>
              <span className="block font-display text-[clamp(1.75rem,7vw,3.75rem)] leading-tight">
                Lucas Ovejero
              </span>
            </h1>
            <p className="mt-4 text-lg text-portfolio-text-muted">
              Filmmaker, fotógrafo y editor de video. Con base en Mar del Plata, trabajo en todo el país.
            </p>
          </div>

          <div className="md:col-span-5 md:col-start-8 md:row-start-1 md:row-span-2 md:self-start md:mt-2 overflow-hidden rounded-lg border border-portfolio-border">
            <img
              src="/images/lucas_ovejero.jpeg"
              alt="Lucas Ovejero filmando con su cámara en una cocina"
              width={2048}
              height={1365}
              decoding="async"
              className="w-full aspect-[3/2] md:aspect-[4/5] object-cover object-[28%_center]"
            />
          </div>

          <div className="md:col-span-7 space-y-5 max-w-[65ch] text-lg leading-relaxed text-portfolio-text-muted">
            <p>
              Desde chico siempre fui el que estaba detrás de cámara, tratando de capturar momentos que no quería olvidar. Con el tiempo, esa curiosidad se transformó en una pasión que hoy es parte de mi día a día. La fotografía y el cine me enseñaron a mirar distinto, a encontrar belleza en lo cotidiano y a contar historias sin necesidad de palabras. Cada proyecto es una excusa para explorar, aprender y conectar con otras personas.
            </p>
            <p>
              Hoy me dedico al filmmaking y a la fotografía, con la misma pasión por capturar momentos que digan algo. Disfruto tanto de filmar una historia como de encontrar una en una sola imagen. Trabajo para crear piezas que no solo se vean bien, sino que digan algo. Porque cuando una historia está bien contada, no se olvida.
            </p>
          </div>
        </div>
      </section>

      {/* Marcas */}
      <section aria-labelledby="marcas-title" className="py-12 md:py-16 border-y border-portfolio-border">
        <div className="container mx-auto px-4 mb-8 md:mb-10">
          <h2 id="marcas-title" className="text-2xl md:text-3xl font-bold text-portfolio-text">
            Marcas con las que trabajé
          </h2>
        </div>
        <BrandMarquee brands={brands} />
      </section>

      {/* Equipo */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <h2 className="text-2xl md:text-3xl font-bold text-portfolio-text mb-10">
          Mi Equipo
        </h2>

        <ul className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12 text-center">
          {equipment.map(({ title, items, imageUrl }) => (
            <li key={title}>
              {/* Producto apoyado sobre una luz suave, como en un set */}
              <div className="aspect-[4/3] flex items-center justify-center bg-[radial-gradient(closest-side,hsl(0_0%_100%/0.1),transparent)]">
                <img
                  src={imageUrl}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className="max-h-[80%] max-w-[70%] object-contain drop-shadow-[0_16px_24px_rgba(0,0,0,0.7)]"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
              <h3 className="mt-3 text-lg font-semibold text-portfolio-text">{title}</h3>
              <p className="mt-1 text-portfolio-text-muted">
                {items.map((item) => (
                  <span key={item} className="block">{item}</span>
                ))}
              </p>
            </li>
          ))}
        </ul>
      </section>

      {/* Cierre */}
      <section className="container mx-auto px-4 pb-8 text-center">
        <p className="text-2xl md:text-3xl font-semibold text-portfolio-text text-balance">
          ¿Tenés un proyecto en mente?
        </p>
        <Link
          to="/contacto"
          className="mt-6 inline-block px-8 py-3 border border-portfolio-accent text-portfolio-accent hover:bg-portfolio-accent hover:text-portfolio-bg transition-all duration-300 rounded-lg font-medium"
        >
          Escribime
        </Link>
      </section>
    </div>
  );
};

export default SobreMi;
