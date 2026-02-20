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
  id: 16,
    title: "Aniversario 152 de Mar del Plata",
    description: "Proyecto junto a @1874.mdq. Filmación y edición del proyecto.",
    detailedDescription: "Proyecto personal. Dirección, filmación y edición.",
    images: [
      {
        id: 1,
        url: "", // No longer needed for YouTube videos
        alt: "Paisaje patagónico",
        caption: "Vista panorámica de los Andes patagónicos",
        type: "video" as const,
        poster: "https://res.cloudinary.com/derdgfqtd/image/upload/v1771560013/Timeline_1_01_00_03_02_q6lkde.jpg",
        youtubeId: "swE3y9wob64" // Replace with actual YouTube video ID
      }
    ],
    category: "Mar del Plata, Buenos Aires",
    year: "2025",
    tags: ["Geometría", "Abstracto", "Urbano"],
    extraInfo: ""
  },
  {
    id: 15,
    title: "The pursuit of myself",
    description: "Proyecto personal. Dirección, filmación y edición.",
    detailedDescription: "Proyecto personal. Dirección, filmación y edición.",
    images: [
      {
        id: 1,
        url: "", // No longer needed for YouTube videos
        alt: "Paisaje patagónico",
        caption: "Vista panorámica de los Andes patagónicos",
        type: "video" as const,
        poster: "https://res.cloudinary.com/derdgfqtd/image/upload/v1771560013/Timeline_1_01_00_02_05_bxzple.jpg",
        youtubeId: "swE3y9wob64" // Replace with actual YouTube video ID
      }
    ],
    category: "Mar del Plata, Buenos Aires",
    year: "2025",
    tags: ["Geometría", "Abstracto", "Urbano"],
    extraInfo: ""
  },
  {
    id: 14,
    title: "Publicidad Biomarketing",
    description: "Dirección, filmación y edición de video promocional para Biomarketing",
    detailedDescription: "Dirección, filmación y edición de video promocional para Biomarketing",
    images: [
      {
        id: 1,
        url: "", // No longer needed for YouTube videos
        alt: "Paisaje patagónico",
        caption: "Vista panorámica de los Andes patagónicos",
        type: "video" as const,
        poster: "https://res.cloudinary.com/derdgfqtd/image/upload/v1771560013/Timeline_1_01_03_18_191_rsay95.jpg",
        youtubeId: "z1QOa94naHw" // Replace with actual YouTube video ID
      }
    ],
    category: "Mar del Plata, Buenos Aires",
    year: "2026",
    tags: ["Geometría", "Abstracto", "Urbano"],
    extraInfo: ""
  },
  {
    id: 13,
    title: "VZ1 X Maxi Rodriguez",
    description: "Filmación y edición de proyecto para colaboración VZ1 y Maxi Rodriguez",
    detailedDescription: "Video colaboración para VZ1 y Maxi Rodriguez",
    images: [
      {
        id: 1,
        url: "", // No longer needed for YouTube videos
        alt: "Paisaje patagónico",
        caption: "Vista panorámica de los Andes patagónicos",
        type: "video" as const,
        poster: "https://res.cloudinary.com/derdgfqtd/image/upload/v1771560013/polish_save_omnhs6.jpg",
        youtubeId: "ohq5ue_z7jU" // Replace with actual YouTube video ID
      }
    ],
    category: "Mar del Plata, Buenos Aires",
    year: "2026",
    tags: ["Geometría", "Abstracto", "Urbano"],
    extraInfo: ""
  },
  {
    id: 12,
    title: "Voodoo Brewing Reignauguración",
    description: "Video promocional para Voodoo Brewing",
    detailedDescription: "Video promocional para Voodoo Brewing",
    images: [
      {
        id: 1,
        url: "", // No longer needed for YouTube videos
        alt: "Paisaje patagónico",
        caption: "Vista panorámica de los Andes patagónicos",
        type: "video" as const,
        poster: "https://res.cloudinary.com/derdgfqtd/image/upload/v1764799061/voodoo_portada_xxr6oi.jpg",
        youtubeId: "dHatGxwclWc" // Replace with actual YouTube video ID
      }
    ],
    category: "Mar del Plata, Buenos Aires",
    year: "2025",
    tags: ["Geometría", "Abstracto", "Urbano"],
    extraInfo: ""
  },
  {
    id: 11,
    title: "Vuelos - Video con Drone + 3D",
    description: "Video para productora Vuelos",
    detailedDescription: "Video para productora Vuelos",
    images: [
      {
        id: 1,
        url: "", // No longer needed for YouTube videos
        alt: "Paisaje patagónico",
        caption: "Vista panorámica de los Andes patagónicos",
        type: "video" as const,
        poster: "https://res.cloudinary.com/derdgfqtd/image/upload/v1764799210/vuelos_portada_mk2xod.jpg",
        youtubeId: "3c9pOMBAhqU" // Replace with actual YouTube video ID
      }
    ],
    category: "Mar del Plata, Buenos Aires",
    year: "2025",
    tags: ["Geometría", "Abstracto", "Urbano"],
    extraInfo: ""
  },
  {
    id: 10,
    title: "When the sun goes down",
    description: "Proyecto personal",
    detailedDescription: "Proyecto personal",
    images: [
      {
        id: 1,
        url: "", // No longer needed for YouTube videos
        alt: "Paisaje patagónico",
        caption: "Vista panorámica de los Andes patagónicos",
        type: "video" as const,
        poster: "https://res.cloudinary.com/derdgfqtd/image/upload/v1763149255/delfiacantilados_iygpw9.jpg",
        youtubeId: "1U11dWpJA7A" // Replace with actual YouTube video ID
      }
    ],
    category: "Mar del Plata, Buenos Aires",
    year: "2025",
    tags: ["Geometría", "Abstracto", "Urbano"],
    extraInfo: ""
  },
  {
    id: 9,
    title: "Sangucheria Richard X Planchetta",
    description: "Video promocional para Sangucheria Richard X Planchetta",
    detailedDescription: "Video promocional para Sangucheria Richard X Planchetta",
    images: [
      {
        id: 1,
        url: "", // No longer needed for YouTube videos
        alt: "Paisaje patagónico",
        caption: "Vista panorámica de los Andes patagónicos",
        type: "video" as const,
        poster: "https://res.cloudinary.com/derdgfqtd/image/upload/v1763149001/Timeline_2_01_00_51_00_gxo9ct.jpg",
        youtubeId: "ewPc5MwslWI" // Replace with actual YouTube video ID
      }
    ],
    category: "Mar del Plata, Buenos Aires",
    year: "2025",
    tags: ["Geometría", "Abstracto", "Urbano"],
    extraInfo: ""
  },
  {
    id: 8,
    title: "Enduro Mar del Plata",
    description: "Enduro Mar del Plata",
    detailedDescription: "Enduro Mar del Plata",
    images: [
      {
        id: 1,
        url: "", // No longer needed for YouTube videos
        alt: "Paisaje patagónico",
        caption: "Vista panorámica de los Andes patagónicos",
        type: "video" as const,
        poster: "https://res.cloudinary.com/derdgfqtd/image/upload/v1757033177/Timeline_1_01_02_16071_wzs58q.jpg",
        youtubeId: "8zyzZ5FM0y4" // Replace with actual YouTube video ID
      }
    ],
    category: "Mar del Plata, Buenos Aires",
    year: "2025",
    tags: ["Geometría", "Abstracto", "Urbano"],
    extraInfo: ""
  },
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
export const FEATURED_PROJECT_IDS = [16, 15, 13, 6]; // Solo cambiar estos IDs para actualizar trabajos destacados
