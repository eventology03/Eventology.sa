import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Static site for GitHub Pages.
//
// The app has no server functions, no API routes, no runtime env secrets, no
// server data loaders. Outside the Lovable sandbox we switch nitro to the
// `static` preset which prerenders each route to plain HTML alongside the
// client JS/CSS/asset bundles. `public/CNAME` is copied verbatim into the
// build output on every build.
//
// Inside the Lovable sandbox nitro is force-set to Cloudflare by the wrapper;
// that only affects the sandbox preview build, not the GitHub Pages build.
export default defineConfig({
  nitro: { preset: "static" },
  tanstackStart: {
    pages: [{ path: "/" }],
    prerender: {
      enabled: true,
      crawlLinks: true,
      autoSubfolderIndex: true,
      retryCount: 2,
    },
  },
});
