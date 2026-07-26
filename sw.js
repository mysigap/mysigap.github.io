self.addEventListener('install', (event) => {
    console.log('Service Worker terinstal');
    self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
    // Biarkan kosong untuk PWA dasar, atau tambahkan strategi caching di sini
});