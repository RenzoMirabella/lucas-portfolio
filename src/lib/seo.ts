// Título, descripción y URL de cada página. Lo usa el navegador al cambiar de página
// y el prerender (scripts/prerender.mjs) para escribir el <head> de cada HTML.
export const SITE_URL = "https://www.lucasovejero.com";

export interface PageMeta {
  title: string;
  description: string;
  noindex?: boolean;
}

export const PAGES: Record<string, PageMeta> = {
  "/": {
    title: "Lucas Ovejero | Filmmaker y Fotógrafo en Mar del Plata, Argentina",
    description:
      "Filmmaker y fotógrafo de Mar del Plata. Video publicitario para marcas como Hotel Meliá y PedidosYa, cobertura de eventos y proyectos de autor en toda Argentina.",
  },
  "/trabajos": {
    title: "Trabajos | Video publicitario, eventos y fotografía | Lucas Ovejero",
    description:
      "Portfolio de Lucas Ovejero: videos para marcas, eventos, drone y fotografía en Mar del Plata, Buenos Aires, Ushuaia y otras ciudades de Argentina.",
  },
  "/sobre-mi": {
    title: "Sobre mí | Lucas Ovejero, filmmaker y fotógrafo",
    description:
      "Soy Lucas Ovejero, filmmaker, fotógrafo y editor de video de Mar del Plata. Trabajo con marcas y eventos en todo el país, con una mirada comercial y artística.",
  },
  "/contacto": {
    title: "Contacto | Lucas Ovejero, filmmaker en Mar del Plata",
    description:
      "Contratá a Lucas Ovejero para tu próximo video o sesión de fotos. WhatsApp, email y redes. Base en Mar del Plata, viajo a todo el país.",
  },
};

export const NOT_FOUND: PageMeta = {
  title: "Página no encontrada | Lucas Ovejero",
  description: "La página que buscás no existe o cambió de lugar.",
  noindex: true,
};

export const getPageMeta = (path: string): PageMeta => PAGES[path] ?? NOT_FOUND;

export const canonicalUrl = (path: string) => `${SITE_URL}${path === "/" ? "/" : path}`;

const escapeAttr = (value: string) =>
  value.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

// Etiquetas del <head> que cambian por página, como texto HTML para el prerender
export const renderHeadTags = (path: string) => {
  const meta = getPageMeta(path);
  const title = escapeAttr(meta.title);
  const description = escapeAttr(meta.description);
  const tags = [
    `<title>${title}</title>`,
    `<meta name="description" content="${description}" />`,
    `<meta property="og:title" content="${title}" />`,
    `<meta property="og:description" content="${description}" />`,
  ];
  if (meta.noindex) {
    tags.push(`<meta name="robots" content="noindex" />`);
  } else {
    tags.push(
      `<link rel="canonical" href="${canonicalUrl(path)}" />`,
      `<meta property="og:url" content="${canonicalUrl(path)}" />`,
    );
  }
  return tags.join("\n    ");
};
