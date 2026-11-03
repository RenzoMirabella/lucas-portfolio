// Después de `vite build`, escribe un HTML por página con su <head> y su contenido ya renderizado,
// y genera sitemap.xml. Netlify sirve /trabajos desde trabajos.html y las rutas inexistentes con 404.html.
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outDir = path.join(root, "build");
const ssrEntry = path.join(root, "build-ssr", "entry-server.js");

const { render, renderHeadTags, PAGES, canonicalUrl } = await import(pathToFileURL(ssrEntry).href);

const template = await fs.readFile(path.join(outDir, "index.html"), "utf8");
const HEAD_MARK = "<!--seo-->";
const ROOT_MARK = '<div id="root"></div>';
if (!template.includes(HEAD_MARK) || !template.includes(ROOT_MARK)) {
  throw new Error(`index.html necesita ${HEAD_MARK} y ${ROOT_MARK}`);
}

const pages = [
  ...Object.keys(PAGES).map((url) => [url, url === "/" ? "index.html" : `${url.slice(1)}.html`]),
  ["/404", "404.html"],
];

for (const [url, file] of pages) {
  const html = template
    .replace(HEAD_MARK, renderHeadTags(url))
    .replace(ROOT_MARK, `<div id="root">${render(url)}</div>`);
  await fs.writeFile(path.join(outDir, file), html);
  console.log(`prerender: ${url} -> build/${file}`);
}

const today = new Date().toISOString().slice(0, 10);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${Object.keys(PAGES)
  .map((url) => `  <url><loc>${canonicalUrl(url)}</loc><lastmod>${today}</lastmod></url>`)
  .join("\n")}
</urlset>
`;
await fs.writeFile(path.join(outDir, "sitemap.xml"), sitemap);
console.log("prerender: build/sitemap.xml");
