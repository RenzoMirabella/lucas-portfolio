// Entrada para el prerender: genera el HTML de cada página al compilar,
// así Google y los buscadores de IA leen el contenido sin ejecutar JavaScript.
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { AppProviders, AppRoutes } from "./App";

export { PAGES, SITE_URL, canonicalUrl, renderHeadTags } from "./lib/seo";

export const render = (url: string) =>
  renderToString(
    <AppProviders>
      <StaticRouter location={url}>
        <AppRoutes />
      </StaticRouter>
    </AppProviders>
  );
