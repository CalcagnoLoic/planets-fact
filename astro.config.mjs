import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  site: "https://calcagnoloic.github.io",
  base: "/planets-fact/",
  output: "static",
  adapter: netlify(),
});
