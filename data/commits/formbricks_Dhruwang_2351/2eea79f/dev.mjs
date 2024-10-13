import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
  cacheHandler: process.env.VERCEL !== "1" ? require.resolve("./cache-handler.mjs") : undefined,
// Allow all origins for next/image
nextConfig.images.remotePatterns.push({
  protocol: "https",
  hostname: "**",
});
