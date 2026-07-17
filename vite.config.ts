// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Fully static site (GitHub Pages). Outside the Lovable build environment,
// nitro is switched to the `static` preset and all routes are prerendered
// to HTML with client-side hydration for animations/interactivity.
export default defineConfig({
  nitro: { preset: "static" },
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    server: { entry: "server" },
    // Crawl `<Link>`s from `/` so every reachable route is emitted as HTML.
    prerender: {
      enabled: true,
      crawlLinks: true,
      autoSubfolderIndex: true,
      retryCount: 2,
    },
    pages: [{ path: "/" }],
  },
});
