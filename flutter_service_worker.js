'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"main.dart.js": "50df5f19db315eee2237df9f05b7914e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/AssetManifest.bin": "d9ee20fba5ff6e33e5c0b956067a2143",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/fonts/MaterialIcons-Regular.otf": "fd9e4985544917c7a685e301c00aa178",
"assets/assets/mercado.jpg": "f9ece22b7e8a2444c7bd0be30feb2601",
"assets/assets/sorvete.png": "6f612fed51a03edbe0f68ebe54bae344",
"assets/assets/guincho.png": "5a768e78df314b5a81e7a0e62b0200ec",
"assets/assets/assistencia.jpeg": "ef9705a5489bc05df2397a35a0e1cf28",
"assets/assets/impressao.png": "1240306d3667d64d6b54cf1b9d29bef3",
"assets/assets/serralheiro.jpeg": "4d3dd2182b486561a0823b716292c0e4",
"assets/assets/verdureiro.jpeg": "533405864da937dccf9e4276b3988244",
"assets/assets/mapa.png": "70cb5726f9bc38155a11f4e4a8af3ba7",
"assets/assets/leandroPedreiro.jpeg": "d0121325df66665451690021032f64e9",
"assets/assets/onuobjetivo.jpg": "aec1ad829dcb52dde399d89ed33d9b18",
"assets/assets/cabelereiro.png": "4247469f735a0c4bbf91c3ad04fc71c2",
"assets/assets/paulinhoBorracharia.png": "f95c6d97cc7f07283998ed8914d5ca35",
"assets/assets/whesleyBarbeiro.jpeg": "be30faa8733f6e873e3a41fa4dff1f3a",
"assets/assets/mecanico.png": "f7949c31ce7d6619e37e7816a30b50fb",
"assets/assets/rosanaGas.png": "431f9b3890acc71d0938d12ffe156e2f",
"assets/assets/anaXerox.jpeg": "c925e7c0ddb92407eea25aa315b81eda",
"assets/assets/andre.png": "bdbc609b666212a464955f2f589a186c",
"assets/assets/escala.png": "386b69cc664d9faedd3eb4e387ddf590",
"assets/assets/pintor.jpeg": "96c37bb84ba5b6359005057818f4b14b",
"assets/assets/lanches.png": "d4e26ca7234399bec23a5eed29812d9f",
"assets/assets/borracheiro.jpeg": "6aced3a5aaf8ab329195aa405651ed38",
"assets/assets/casa.jpeg": "df53e831b5d037cdc5168ab10b4dc450",
"assets/assets/luanaGelinho.jpeg": "73a1cc01e175b64f9f8886f8ceac5acc",
"assets/assets/gas.png": "33ca25ecdba49bf548faebd4e10a237b",
"assets/assets/daianaManicure.jpeg": "42f53a023c110c9585c46656815a18a8",
"assets/assets/outros.png": "08dd8ba8c7492e6f9cb0f3a28d425b93",
"assets/assets/mototaxi.jpeg": "deedaab20c8353f125b28102d2ba50a4",
"assets/assets/eletricista.png": "dc5a1b60bb5980a74da38402337fb0cc",
"assets/assets/marcioInstalacoes.jpeg": "d84d6e603b4643212b5bde726c7f40fc",
"assets/assets/manicure.jpeg": "e9cbf26142c479c6f5d6b6063186aadb",
"assets/assets/diarista.png": "b0b925950d681299bf44b15bcd2aa400",
"assets/assets/geizaDesigner.png": "9b5ce2e43153826b61f60e1409135563",
"assets/assets/douglasJardinagem.png": "0a36f20b61f3af51d2ce59e7cacdfe74",
"assets/assets/uber.jpeg": "a623d6e47bd6ae704b68ee714695501d",
"assets/assets/padaria.png": "e2b341ba5cdc722721657504b0c7243a",
"assets/assets/roupas.jpeg": "2501fc7e1e489e9f3b1602b59cd4e2a1",
"assets/assets/carreto.png": "8ec7947c753259ff39dfd4cbf020c02b",
"assets/assets/claudineiJardin.jpeg": "764a454f45948f2b78f69c2130121c13",
"assets/assets/jardineiro.png": "ca74f744367a3479adce2315def1f345",
"assets/assets/leilaLanches.png": "b397064f4d41aba37fa81e82f8fd8fee",
"assets/assets/marido.jpeg": "db62defa3d452e761c6cfd3e2838a696",
"assets/assets/pedreiro.png": "c3995b9aa03d28b412aecc298df976e8",
"assets/assets/encanador.jpeg": "98e06c020a68018c2f662d15e5758b41",
"assets/assets/costureira.png": "90a4c282c59fa254416f41deafae9729",
"assets/assets/baba.png": "896811c356453a78a6479be3cf014784",
"assets/NOTICES": "a0d1c45817c6c5d2b8cb01acac8d4025",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.json": "cb60d286a603a083123158d3bfc62874",
"assets/AssetManifest.bin.json": "51d32e83017eb87a28054fb019f5f74c",
"version.json": "51dc5ec0cd843e9c13588888e3025e90",
"index.html": "118c553511e428f3b03cad128a5b6639",
"/": "118c553511e428f3b03cad128a5b6639",
"manifest.json": "c59670218fdc5e6ff925f34cafcea867",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.png": "edf0559e1df3451ca498db8ac0fff9e6"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
