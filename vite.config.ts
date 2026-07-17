import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Static site (GitHub Pages). Outside the Lovable sandbox, nitro is switched
// to the `static` preset which prerenders all routes to plain HTML and copies
// `public/` (including CNAME) into `.output/public/` for direct file hosting.
// Inside the Lovable sandbox the preset is force-set to Cloudflare — that
// only affects the preview build, not the GitHub Pages build.
export default defineConfig({
  nitro: { preset: "static" },
  tanstackStart: {
    prerender: {
      enabled: true,
      crawlLinks: true,
      autoSubfolderIndex: true,
      retryCount: 2,
    },
    pages: [{ path: "/" }],
    spa: {
      enabled: true,
      prerender: { outputPath: "/index.html" },
    },
  },
});
