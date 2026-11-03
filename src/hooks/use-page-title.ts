import { useEffect } from "react";

const SITE_TITLE = "Lucas Ovejero | Filmmaker, Fotógrafo y Editor de Videos en Mar del Plata";

// Título de la pestaña por página; sin argumento usa el título general del sitio
export function usePageTitle(page?: string) {
  useEffect(() => {
    document.title = page ? `${page} | Lucas Ovejero` : SITE_TITLE;
  }, [page]);
}
