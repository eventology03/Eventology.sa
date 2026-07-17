import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Static site for GitHub Pages.
//
// TanStack Start's SPA mode is turned on so the build emits a single
// hydration-ready `index.html` shell alongside the client JS/CSS/assets.
// Nitro is disabled outside the Lovable sandbox — no server bundling, no
// serverless runtime — everything the app needs at runtime is a plain file.
// `public/CNAME` is copied verbatim into the build output on every build.
export default defineConfig({
  nitro: false,
  tanstackStart: {
    spa: {
      enabled: true,
      prerender: {
        outputPath: "/",
      },
    },
    pages: [{ path: "/" }],
  },
});
