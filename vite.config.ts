import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Static site for GitHub Pages.
//
// This project has no server functions, no API routes, no runtime env secrets
// and no server data loaders — every page is a client-hydrated React tree.
// TanStack Start's SPA mode prerenders a single hydration-ready HTML shell
// (`index.html`) alongside the client JS/CSS/asset bundles in `dist/client/`,
// which is exactly what GitHub Pages needs to serve. `public/CNAME` is copied
// into that folder on every build so custom-domain resolution keeps working.
//
// Inside the Lovable sandbox nitro is force-set to Cloudflare (that only
// affects the preview build). On GitHub Actions (outside the sandbox) nitro
// is switched to the `static` preset so the SPA shell is emitted with no
// server runtime required at all.
export default defineConfig({
  nitro: { preset: "static" },
  tanstackStart: {
    server: { entry: "server" },
    spa: {
      enabled: true,
      prerender: {
        outputPath: "/",
        crawlLinks: false,
      },
    },
    pages: [{ path: "/" }],
  },
});
