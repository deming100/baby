const CACHE_NAME = 'romantic-app-v1';
const urlsToCache = [
    './',
    './index.html',
    './manifest.json',
    './icons/icon-192x192.png',
    './icons/icon-512x512.png',
    // Add your audio files
    './Untitled video - Made with Clipchamp.mp3',
    './@asumuh - its just you, my dear (lyrics).mp3',
    './dw.mp3',
    // Add your image files
    './20250211_153025.jpg',
    './20250211_153937.jpg',
    './20250224_191855.jpg',
    // ... add all your image files here
];

// Install event - cache resources
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Caching app resources');
                return cache.addAll(urlsToCache);
            })
    );
});

// Fetch event - serve cached content when offline
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                // Return cached version or fetch from network
                return response || fetch(event.request);
            })
    );
});