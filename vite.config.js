import { fileURLToPath } from "node:url";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const srcDirectory = fileURLToPath(new URL("./src", import.meta.url));

// Every page of this site is static content, so all of them are rendered to HTML
// at build time: the deployed output is plain files, no server runtime needed.
const LANGS = ["fr", "en", "ar"];
const PAGES = [
  "",
  "/about",
  "/rooms",
  "/apartments",
  "/dining",
  "/wellness",
  "/activities",
  "/meetings",
  "/gallery",
  "/contact",
];

const prerenderPages = [
  ...LANGS.flatMap((lang) => PAGES.map((page) => `/${lang}${page}`)),
  "/robots.txt",
  "/sitemap.xml",
].map((path) => ({ path }));

export default defineConfig({
  // `@/...` resolves to `src/...` (mirrors the jsconfig paths entry).
  resolve: {
    alias: { "@": srcDirectory },
  },
  plugins: [
    tanstackStart({
      srcDirectory: "src",
      // Explicit entry: `src/router.jsx` — avoids the "Could not resolve entry
      // for router entry" error when the file extension is not inferred.
      router: { entry: "router.jsx" },
      prerender: {
        enabled: true,
        crawlLinks: true,
        failOnError: true,
        pages: prerenderPages,
      },
    }),
    react(),
  ],
});