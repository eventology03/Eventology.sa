import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Static site (GitHub Pages). Outside the Lovable sandbox, nitro switches to
// the `static` preset which prerenders each route to plain HTML and copies
// `public/` (including CNAME) into `.output/public/` for direct file hosting.
// Inside the Lovable sandbox nitro is force-set to Cloudflare; that only
// affects the sandbox preview build, not the GitHub Pages build.
export default defineConfig({
  nitro: { preset: "static" },
  tanstackStart: {
    // Match TanStack Start's prerender lookup for `<entry>.js` in the server
    // output dir; leaving the default keeps the sandbox (Cloudflare) build
    // working while satisfying nitro's static preset.
    server: { entry: "server" },
    prerender: {
      enabled: true,
      crawlLinks: true,
      autoSubfolderIndex: true,
      retryCount: 2,
    },
    pages: [{ path: "/" }],
  },
});
