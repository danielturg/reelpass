// Present only so browsers treat the page as an installable app (needed for the Android share menu).
// It caches nothing and stores nothing.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
