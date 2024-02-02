'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/refs/remotes/origin/main": "f587b4b4e1683c391ba01103c04ddac5",
".git/refs/heads/main": "4e5aa3453081d4feeb1ff46b98d52e87",
".git/index": "fd0d87cbd1c0a362a4ffd92e279da66d",
".git/COMMIT_EDITMSG": "46978466cdb65954bea2b74b7550067a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/objects/0d/846c8d4e47a645a373889c8b2c499152924140": "7f8f3bbf2e35701a64b33210abfe6443",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/ea/69e18dcb0fef2794b2a0ece7d6820e340ff75a": "1d9af7d4a539abaa5fc86a05782d022b",
".git/objects/b3/3819935179f94aac67ab19a9071348a81b620c": "0f91ce155cf7be20d5288d86cfa9a668",
".git/objects/02/a0e645998b9fe49208284a9b7b4c5abfad0c91": "4f38a31071349f723d54988ae36eb7d4",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/d41123112dcc05e645c65693277074ac106233": "3de645de309caa9346a728f03e403fdd",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/97/779d42429e0b396ce0efb0a85105f6f12f5ff3": "24648ac5c305508b77a5f13df8d42fd8",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/a4/d32d0386433ca4baf4ab5c83d60db13cb04368": "54bb0180d0fd7f3ca3534579c33cd847",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/b8/f488d52b23d60e5501a336854eec2e9975ddda": "b570434bd6a5113ac80455ac35e832c0",
".git/objects/49/2cf98a623018605d3780f1ca59a92ac1ffa23c": "403942fcb79bb714fa852d3ccc3f7a3e",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/72/376baba007e387e498c321d9328c2167ee0a31": "cc378aa5ba260fb3e7442bae4871bfea",
".git/objects/36/f17b010ec2010219b872e2c67cd53351d0f695": "c381f5bfdfb20cab5420e969809e723f",
".git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/34/dc00505d161ba75d3b7dbdbeb202b9f892bfb3": "aada0a07b8c4aaab571a411e93999bec",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/3a/7795ce82e55d8f9c99e7beaa0c85141f8d2835": "8a5558c663d87709cb2353c1b35642f0",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/3c/26cadcdf5126bc13aa173588e0be7a2df0b38c": "537d8df2b1c008bf07ef2f9a05f9f5ae",
".git/objects/fb/250276274c5d128360e43d9b1162b6ae44a1bf": "a8107cce0df851141d3d7429a5e662c3",
".git/objects/ac/c80950697829c0fc73da2e7b21bc724bd70d21": "efba0bd79dae106bddbe5dc57bde815b",
".git/objects/3e/b3d98532874d43717b31bc0955eb307b7b8b7f": "dde1e28a465db532309ad0c168f4f1cd",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/fa/81d0cc454e3cb76ad2b16e97d09d6e390c48ba": "9190dbcf22d3f0b88a877e19fbdd02ae",
".git/objects/75/841ace40b4678556a435aeb8b06636f5835dd2": "a2a10045f799d995f74aa9affaef2794",
".git/objects/cf/d4638e65ca6480cf1be4925f5246dfd5379c76": "27c6b631641e34356750cbfb8cd42987",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/c9/13e2cf3358888aa059909bdbe8a2d33f49db52": "5c4b81017c3132ca5303feb273947077",
".git/objects/6c/409ec817128a6ba4497d11aeef89b594ebb8bd": "862cac2e5f76e7086e5990f0572ff606",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/4f/dfd9239496897114f597ad87f9b3ec3487d871": "dee275d1332b20b5c67b03990dd35ee2",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/logs/refs/remotes/origin/main": "57ca7a2357e7ca7e6d778935c7f3896c",
".git/logs/refs/heads/main": "d5bd3eae073aec6e65c1e3a895789035",
".git/logs/HEAD": "81140f60056d3e25fad6607804c972e2",
".git/FETCH_HEAD": "d41d8cd98f00b204e9800998ecf8427e",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/config": "9465e5ae6c96f89d141c2e31557902d0",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"main.dart.js": "e6608fc644e358c8a4e59dd9d48c303b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/AssetManifest.bin": "09a7d554a21b7934e48a5289bd353c46",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"assets/assets/mercado.jpg": "f9ece22b7e8a2444c7bd0be30feb2601",
"assets/assets/guincho.png": "5a768e78df314b5a81e7a0e62b0200ec",
"assets/assets/assistencia.jpeg": "ef9705a5489bc05df2397a35a0e1cf28",
"assets/assets/serralheiro.jpeg": "4d3dd2182b486561a0823b716292c0e4",
"assets/assets/verdureiro.jpeg": "533405864da937dccf9e4276b3988244",
"assets/assets/mapa.png": "ff53ae4267eef7b85c029834f7d98b1a",
"assets/assets/cabelereiro.png": "4247469f735a0c4bbf91c3ad04fc71c2",
"assets/assets/mecanico.png": "f7949c31ce7d6619e37e7816a30b50fb",
"assets/assets/pintor.jpeg": "96c37bb84ba5b6359005057818f4b14b",
"assets/assets/lanches.png": "d4e26ca7234399bec23a5eed29812d9f",
"assets/assets/borracheiro.jpeg": "6aced3a5aaf8ab329195aa405651ed38",
"assets/assets/casa.jpeg": "df53e831b5d037cdc5168ab10b4dc450",
"assets/assets/outros.png": "08dd8ba8c7492e6f9cb0f3a28d425b93",
"assets/assets/mototaxi.jpeg": "deedaab20c8353f125b28102d2ba50a4",
"assets/assets/eletricista.png": "dc5a1b60bb5980a74da38402337fb0cc",
"assets/assets/manicure.jpeg": "e9cbf26142c479c6f5d6b6063186aadb",
"assets/assets/diarista.png": "b0b925950d681299bf44b15bcd2aa400",
"assets/assets/uber.jpeg": "a623d6e47bd6ae704b68ee714695501d",
"assets/assets/padaria.png": "e2b341ba5cdc722721657504b0c7243a",
"assets/assets/roupas.jpeg": "2501fc7e1e489e9f3b1602b59cd4e2a1",
"assets/assets/carreto.png": "8ec7947c753259ff39dfd4cbf020c02b",
"assets/assets/jardineiro.png": "ca74f744367a3479adce2315def1f345",
"assets/assets/marido.jpeg": "db62defa3d452e761c6cfd3e2838a696",
"assets/assets/pedreiro.png": "c3995b9aa03d28b412aecc298df976e8",
"assets/assets/encanador.jpeg": "98e06c020a68018c2f662d15e5758b41",
"assets/assets/costureira.png": "90a4c282c59fa254416f41deafae9729",
"assets/assets/baba.png": "896811c356453a78a6479be3cf014784",
"assets/NOTICES": "832075788783c4253d66b11e3be11b58",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.json": "8a9125c982dd2cf1346d1f0c8bf26a41",
"assets/AssetManifest.bin.json": "7e5938ee98bcbc0c1fc3c346a2d3830a",
"version.json": "51dc5ec0cd843e9c13588888e3025e90",
"index.html": "1ade64037e51b2816d0df89b26159035",
"/": "1ade64037e51b2816d0df89b26159035",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"manifest.json": "ba0e160df535f313164fca06c099c3e9",
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
