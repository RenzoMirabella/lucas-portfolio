import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { canonicalUrl, getPageMeta } from "@/lib/seo";

// Busca la etiqueta del <head> y la crea si no existe (en desarrollo el HTML llega sin ellas)
const upsert = (selector: string, create: () => HTMLElement) =>
  document.head.querySelector<HTMLElement>(selector) ?? document.head.appendChild(create());

const setMeta = (attr: "name" | "property", key: string, content: string | null) => {
  const selector = `meta[${attr}="${key}"]`;
  if (content === null) {
    document.head.querySelector(selector)?.remove();
    return;
  }
  const el = upsert(selector, () => {
    const meta = document.createElement("meta");
    meta.setAttribute(attr, key);
    return meta;
  });
  el.setAttribute("content", content);
};

// Actualiza título, descripción y canonical al navegar entre páginas
export function usePageMeta() {
  const { pathname } = useLocation();

  useEffect(() => {
    const meta = getPageMeta(pathname);
    const url = meta.noindex ? null : canonicalUrl(pathname);

    document.title = meta.title;
    setMeta("name", "description", meta.description);
    setMeta("property", "og:title", meta.title);
    setMeta("property", "og:description", meta.description);
    setMeta("property", "og:url", url);
    setMeta("name", "robots", meta.noindex ? "noindex" : null);

    if (url) {
      const link = upsert('link[rel="canonical"]', () => {
        const el = document.createElement("link");
        el.setAttribute("rel", "canonical");
        return el;
      });
      link.setAttribute("href", url);
    } else {
      document.head.querySelector('link[rel="canonical"]')?.remove();
    }
  }, [pathname]);
}
