import pkg from "../package.json";
import * as path from "node:path";
import fsExtra from "fs-extra";

console.log(`Generating service worker for ${pkg.version}`);

const scriptContent = `
const cacheName = "${pkg.version}";
const cacheLimit = 100;

const assetsToBeCached = ["https://models.iambatman.dev/scene.bin"];

const shouldCache = (request) => {
  if (request.method !== "GET") {
    return false;
  }
  return assetsToBeCached.some((endPoint) => request.url.startsWith(endPoint));
};

const cacheClone = async (request) => {
  const res = await fetch(request);
  const cache = await caches.open(cacheName);
  await cache.put(request, res.clone());
  limitCacheSize(cacheName, cacheLimit);
  return res;
};

const getCache = async (request) => {
  const cache = await caches.match(request);
  if (cache) {
    return cache;
  }
  return cacheClone(request);
};

const clearOldCache = async () => {
  const existingCaches = await caches.keys();
  return Promise.all(
    existingCaches
      .filter((cache) => cache !== cacheName)
      .map((cache) => caches.delete(cache)),
  );
};

const limitCacheSize = async (cacheName, size) => {
  const cache = await caches.open(cacheName);
  const cacheKeys = await cache.keys();
  if (cacheKeys.length > size) {
    await cache.delete(cacheKeys[0]);
    limitCacheSize(cacheName, size);
  }
};

self.addEventListener("install", (e) => {
  self.skipWaiting();
  e.waitUntil(clearOldCache());
});

self.addEventListener("activate", (e) => {
  e.waitUntil(clearOldCache());
});

self.addEventListener("fetch", (e) => {
  if (!shouldCache(e.request)) {
    return;
  }
  e.respondWith(getCache(e.request));
});
`;

const cwd = process.cwd();
const outputDir = path.join(cwd, "public");
const outputPath = path.join(outputDir, "sw.js");
await fsExtra.ensureDir(outputDir);
await fsExtra.writeFile(outputPath, scriptContent, "utf8");

console.log(`Service worker generated at ${path.relative(cwd, outputPath)}`);
