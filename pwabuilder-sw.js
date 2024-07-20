// This is the "NetworkFirst" service worker

const CACHE = "pwabuilder-offline";

importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

workbox.routing.registerRoute(
  new RegExp('/.*'), // Регулярное выражение для маршрутизации
  new workbox.strategies.NetworkFirst({
    cacheName: CACHE,
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        maxEntries: 50, // Максимальное количество элементов в кэше
        maxAgeSeconds: 30 * 24 * 60 * 60, // Кэш действителен в течение 30 дней
      }),
    ],
  })
);
