// Interfaces para los datos de proyectos
export interface ProjectImage {
  id: number;
  url: string;
  alt: string;
  caption?: string;
  type?: 'image' | 'video';
  poster?: string;
  youtubeId?: string; // YouTube video ID for embedded videos
}

export interface Project {
  id: number;
  title: string;
  description: string;
  detailedDescription: string;
  images: ProjectImage[];
  category: string;
  year: string;
  tags: string[];
  extraInfo?: string;
}

// Datos de todos los proyectos
export const projects: Project[] = [
  {
    id: 6,
    title: "Hotel Meliá",
    description: "Video promocional para Hotel Meliá",
    detailedDescription: "Video promocional para Hotel Meliá",
    images: [
      {
        id: 1,
        url: "", // No longer needed for YouTube videos
        alt: "Paisaje patagónico",
        caption: "Vista panorámica de los Andes patagónicos",
        type: "video" as const,
        poster: "/images/melia.png",
        youtubeId: "6M9s6kGj850" // Replace with actual YouTube video ID
      }
    ],
    category: "Recoleta, Buenos Aires",
    year: "2025",
    tags: ["Geometría", "Abstracto", "Urbano"],
    extraInfo: ""
  },
  {
    id: 7,
    title: "El Tren del Fin del Mundo",
    description: "Video promocional para El Tren del Fin del Mundo",
    detailedDescription: "Video promocional El Tren del Fin del Mundo",
    images: [
      {
        id: 1,
        url: "", // No longer needed for YouTube videos
        alt: "Paisaje patagónico",
        caption: "Vista panorámica de los Andes patagónicos",
        type: "video" as const,
        poster: "/videos/taller.png",
        youtubeId: "0GUX8wM2TX8" // Replace with actual YouTube video ID
      }
    ],
    category: "Ushuaia, Tierra del Fuego",
    year: "2025",
    tags: ["Geometría", "Abstracto", "Urbano"],
    extraInfo: ""
  },
  {
    id: 1,
    title: "Buck",
    description: "Campaña para Drop III.",
    detailedDescription: "Campaña para Drop III.",
    images: [
      {
        id: 1,
        url: "/images/buck0.jpg",
        alt: "Tragito principal",
        caption: "Vista principal del cóctel con iluminación dramática"
      },
      {
        id: 2,
        url: "/images/buck1.jpg",
        alt: "Detalle del vaso",
        caption: "Detalle de la cristalería y texturas"
      },
      {
        id: 3,
        url: "/images/buck2.jpg",
        alt: "Ambiente del bar",
        caption: "Contexto del ambiente donde se tomaron las fotos"
      },
      {
        id: 4,
        url: "/images/buck3.jpg",
        alt: "Detalle del vaso",
        caption: "Detalle de la cristalería y texturas"
      },
      {
        id: 5,
        url: "/images/buck4.jpg",
        alt: "Detalle del vaso",
        caption: "Detalle de la cristalería y texturas"
      },
      {
        id: 6,
        url: "/images/buck6.jpg",
        alt: "Detalle del vaso",
        caption: "Detalle de la cristalería y texturas"
      },
      {
        id: 7,
        url: "/images/buck8.jpg",
        alt: "Detalle del vaso",
        caption: "Detalle de la cristalería y texturas"
      },
    ],
    category: "Mar del Plata",
    year: "2025",
    tags: ["", "", ""],
    extraInfo: "Sony A7III"
  },
  {
    id: 2,
    title: "Artista Aérea",
    description: "Video promocional para artista aérea",
    detailedDescription: "Video promocional para artista aérea mostrando la gracia y técnica en movimiento.",
    images: [
      {
        id: 1,
        url: "", // No longer needed for YouTube videos
        alt: "Video promocional de artista aérea",
        caption: "Video promocional mostrando técnicas aéreas",
        type: "video" as const,
        poster: "/videos/aerialartist.png",
        youtubeId: "u22if1DNx7M" // Replace with actual YouTube video ID
      }
    ],
    category: "Mar del Plata",
    year: "2025",
    tags: ["Video", "Arte Aéreo", "Promocional"],
    extraInfo: "Sony A7III | 4K 30fps"
  },
  {
    id: 3,
    title: "Taller Ernalz",
    description: "Proyecto personal",
    detailedDescription: "Proyecto personal en el cual busco retratar la esencia de lo cotidiano en comercios de la ciudad. Primer episodio.",
    images: [
      {
        id: 1,
        url: "", // No longer needed for YouTube videos
        alt: "Paisaje patagónico",
        caption: "Vista panorámica de los Andes patagónicos",
        type: "video" as const,
        poster: "/videos/taller.png",
        youtubeId: "DOee9sbMCGg" // Replace with actual YouTube video ID
      }
    ],
    category: "Mar del Plata",
    year: "2025",
    tags: ["Naturaleza", "Patagonia", "Aventura"],
    extraInfo: "Expedición de 15 días | Condiciones extremas"
  },
  {
    id: 4,
    title: "Drone Ushuaia",
    description: "Video con drone para @turismoushuaia",
    detailedDescription: "Video con drone para @turismoushuaia haciendo hincapié en los paisajes de la ciudad.",
    images: [
      {
        id: 1,
        url: "", // No longer needed for YouTube videos
        alt: "Edificio moderno",
        caption: "Fachada de vidrio con patrones geométricos",
        type: "video" as const,
        poster: "/videos/ushuaia.png",
        youtubeId: "nIXApZD0XPc" // Replace with actual YouTube video ID
      }
    ],
    category: "Ushuaia",
    year: "2025",
    tags: ["Geometría", "Abstracto", "Urbano"],
    extraInfo: "Técnica: Fotografía aérea con drone"
  },
  {
    id: 5,
    title: "Angelo’s Aspen",
    description: "Fotografía de producto para el restaurante Angelo 's Aspen",
    detailedDescription: "Fotografía de producto para el restaurante Angelo 's Aspen.",
    images: [
      {
        id: 1,
        url: "/images/Trago0.jpg",
        alt: "Retrato en estudio",
        caption: "Iluminación profesional en estudio"
      },
      {
        id: 2,
        url: "/images/Trago1.jpg",
        alt: "Retrato en estudio",
        caption: "Iluminación profesional en estudio"
      },
      {
        id: 3,
        url: "/images/Trago2.jpg",
        alt: "Retrato en estudio",
        caption: "Iluminación profesional en estudio"
      },
      {
        id: 4,
        url: "/images/Trago3.jpg",
        alt: "Retrato en estudio",
        caption: "Iluminación profesional en estudio"
      },
      {
        id: 5,
        url: "/images/Trago4.jpg",
        alt: "Retrato en estudio",
        caption: "Iluminación profesional en estudio"
      }
    ],
    category: "Aspen, Colorado",
    year: "2025",
    tags: ["Estudio", "Retrato", "Profesional"],
    extraInfo: "Iluminación: 3 puntos | Fondo: Gris neutro"
  }
  
];

// Función para obtener proyectos por IDs (para trabajos destacados)
export const getFeaturedProjects = (featuredIds: number[]): Project[] => {
  return projects.filter(project => featuredIds.includes(project.id));
};

// Función para obtener un proyecto por ID
export const getProjectById = (id: number): Project | undefined => {
  return projects.find(project => project.id === id);
};

// Configuración de trabajos destacados (fácil de modificar)
export const FEATURED_PROJECT_IDS = [6, 2, 3, 4]; // Solo cambiar estos IDs para actualizar trabajos destacados
