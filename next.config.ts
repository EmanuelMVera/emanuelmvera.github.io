import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export para GitHub Pages (user site en la raíz: sin basePath ni assetPrefix).
  output: "export",
  // Genera carpetas con index.html (p. ej. out/proyectos/sispasantias/index.html)
  // para que GitHub Pages sirva /proyectos/sispasantias/ con barra final.
  trailingSlash: true,
  images: {
    // GitHub Pages no tiene servidor de optimización: las imágenes ya se publican optimizadas en WebP.
    unoptimized: true,
  },
};

export default nextConfig;
