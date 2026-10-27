import fs from "node:fs";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { robotsTxt, sitemapXml } from "./src/data/site.js";

function siteFiles() {
  const write = () => {
    fs.mkdirSync("public", { recursive: true });
    fs.writeFileSync("public/sitemap.xml", sitemapXml());
    fs.writeFileSync("public/robots.txt", robotsTxt());
  };

  return {
    name: "site-files",
    buildStart: write,
    configureServer: write,
  };
}

export default defineConfig({
  plugins: [siteFiles(), react(), tailwindcss()],
});
