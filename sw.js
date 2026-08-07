const CACHE_NAME = "nosso-1-ano-v1";

const ARQUIVOS = [
    "./",
    "./index.html",
    "./homenagem.html",

    "./css/style.css",
    "./css/homenagem.css",

    "./js/countdown.js",
    "./js/homenagem.js",

    "./manifest.json"
];


// Instala o Service Worker
self.addEventListener("install", (event) => {

    event.waitUntil(

        caches.open(CACHE_NAME)
            .then((cache) => {

                return cache.addAll(ARQUIVOS);

            })

    );

    self.skipWaiting();

});


// Ativa o Service Worker
self.addEventListener("activate", (event) => {

    event.waitUntil(

        caches.keys().then((nomes) => {

            return Promise.all(

                nomes
                    .filter((nome) => nome !== CACHE_NAME)
                    .map((nome) => caches.delete(nome))

            );

        })

    );

    self.clients.claim();

});


// Intercepta as requisições
self.addEventListener("fetch", (event) => {

    event.respondWith(

        caches.match(event.request)
            .then((resposta) => {

                if (resposta) {

                    return resposta;

                }

                return fetch(event.request);

            })

    );

});