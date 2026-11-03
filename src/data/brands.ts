// Marcas para el banner de Sobre mí.
// Para mostrar un logo en lugar del nombre, agregá `logo: "/images/marcas/archivo.png"`
// (idealmente PNG o SVG blanco con fondo transparente).
export interface Brand {
  name: string;
  logo?: string;
}

export const brands: Brand[] = [
  { name: "Hotel Meliá" },
  { name: "El Tren del Fin del Mundo" },
  { name: "Voodoo Brewing" },
  { name: "Biomarketing" },
  { name: "Morenita" },
  { name: "BZ1" },
  { name: "Vuelos" },
  { name: "Sangucheria Richard" },
  { name: "Planchetta" },
  { name: "Turismo Ushuaia" },
  { name: "Angelo’s Aspen" },
  { name: "1874 MDQ" },
  { name: "Drop III" },
];
