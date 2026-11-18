// CAL – service worker. Nič neukladá do cache (vždy čerstvá verzia),
// je tu kvôli inštalácii na plochu a neskôr pre webové notifikácie.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
