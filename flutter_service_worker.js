'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "71bcc03783b86f12a1b26b01da6125e0",
"assets/AssetManifest.json": "580b8c94b2dd5cc83a22fdc46e2c8883",
"assets/assets/BSCS%2520Back.png": "0b7dfa1ad9060bf205c09796caaffdf6",
"assets/assets/BSCS%2520Degree%2520Back.png": "8aab45f01a9bcae0cc9127886f01fd16",
"assets/assets/BSCS%2520Degree%2520Front.png": "465d20c3be6823d9ae31356806484a21",
"assets/assets/BSCS%2520Front.png": "112056964e4775ec1c1c935470a25d18",
"assets/assets/comsats.jpg": "88c38d0a30d24da3796e492a92f1f3b4",
"assets/assets/contact.jpg": "c5424cc1a94e8da891a66b3d4672560b",
"assets/assets/Domicile.png": "62849b28649ec42dc2b3933d34b13cb5",
"assets/assets/education.jpeg": "294fee8054479ef0e421e7d5d696e026",
"assets/assets/gculahore.jpg": "9c03bb1d9b7d5a62cb29eaf333abd88a",
"assets/assets/icon.png": "9ef2f1422236e0430b41a136da8a7718",
"assets/assets/Intermediate%2520back.png": "a3899ecdbd1146908ce137e7fe0b5e99",
"assets/assets/Intermediate%2520Character%2520Certificate.png": "d1148dbff42c338e928a24b6d400a2c1",
"assets/assets/Intermediate%2520front.png": "1bb2a7bd5f6fc9476ad3c38016f446b1",
"assets/assets/Matric%2520Back.png": "9989750f66f9a70fa26d788366f2e14a",
"assets/assets/Matric%2520Character%2520Certificate.png": "4cd728f07fbb7ee1ebac06b1c4b962fe",
"assets/assets/Matric%2520Front.png": "9ebb4cdd5e8f6ce2a607ddc037c38b4f",
"assets/assets/notes%2520pro%2520plus%2520icon.png": "f377c7f3be8fc254ab7315269868c654",
"assets/assets/notes%2520pro%2520plus%2520ss1.jpeg": "a34ead80a77caadbe06e119adf00c17f",
"assets/assets/notes%2520pro%2520plus%2520ss2.jpeg": "642c7fb1ee2cc6d6e9db6e610f39a357",
"assets/assets/notes%2520pro%2520plus%2520ss3.jpeg": "670eafd31c93224edbbd08c267a00dda",
"assets/assets/notes%2520pro%2520plus%2520ss4.jpeg": "5b84f978d7e2d90dfe141a41a88176ed",
"assets/assets/notes%2520pro%2520plus%2520ss5.jpeg": "d5835d35387f1d5fb9587c8819d0a006",
"assets/assets/notes%2520pro%2520plus%2520ss6.jpeg": "b185329b181a6e24a0eab1469f886a82",
"assets/assets/pattern.jpg": "52e371dc66f1efb0bb2779434a7c03fc",
"assets/assets/PTCL%2520Certificate.png": "a8700ae3404c2e455b46be4ab4c2792d",
"assets/assets/school.jpg": "c63a976bc88f415cfd7c522d5e50b369",
"assets/assets/school2.jpg": "4b82e470914e70ba303dd78a5e79cb15",
"assets/assets/skills.jpg": "9e2935211c538a20c2bcbba1930d4867",
"assets/assets/work.jpg": "e5a392250e3bf56342054e1dd3b62bfd",
"assets/assets/zainshakeelcover.png": "741e6063a4de3bc2fca36879d99cb9ef",
"assets/assets/zainshakeel_cv.pdf": "69e02c071a0632df08b725983fa6557d",
"assets/FontManifest.json": "84ee1b232be042f911ee402e3e4a36b0",
"assets/fonts/Lato-Bold.ttf": "24b516c266d7341c954cb2918f1c8f38",
"assets/fonts/Lato-Italic.ttf": "5d22f337a040ae2857e36e7c5800369b",
"assets/fonts/Lato-Light.ttf": "2bcc211c05fc425a57b2767a4cdcf174",
"assets/fonts/Lato-LightItalic.ttf": "2404a6da847c878edbc8280745365cba",
"assets/fonts/Lato-Regular.ttf": "122dd68d69fe9587e062d20d9ff5de2a",
"assets/fonts/Lato-Thin.ttf": "7ab0bc06eecc1b75f8708aba3d3b044a",
"assets/fonts/MaterialIcons-Regular.otf": "0417a8994576641bf0dfcff80dea48aa",
"assets/fonts/Poppins-Light.ttf": "fcc40ae9a542d001971e53eaed948410",
"assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/hashbazarseller/hbseller1.jpg": "ae3a6124430e79c7184a5dff944505a9",
"assets/hashbazarseller/hbseller2.jpg": "2de0838dcec58c349a5e6d48f1cf3e49",
"assets/hashbazarseller/hbseller3.jpg": "4d38f7f4e4ed5f9561241f27266b38af",
"assets/hashbazarseller/hbseller4.jpg": "2c66ea160a1034486579cb532990c894",
"assets/hashbazarseller/hbseller5.jpg": "be298c391d13dfe1b101b9bcd55396b8",
"assets/hashbazarseller/hbseller6.jpg": "7ed714d5a1d3d8b9e1cfe843b6346cdb",
"assets/hashbazarshopping/hashbazar1.jpg": "acd7de29b1582a9d1eff0f3112c0b53d",
"assets/hashbazarshopping/hashbazar2.jpg": "e7eb2897c889706e616bf2e052644d1f",
"assets/hashbazarshopping/hashbazar3.jpg": "da08cfe0be79dcca1b2748fdc7ef92dc",
"assets/hashbazarshopping/hashbazar4.jpg": "9ae2a52420caf9c37d44f3cd121ef4ea",
"assets/hashbazarshopping/hashbazar5.jpg": "741fdd2bd56d44b5bc045e00d7525948",
"assets/hashbazarshopping/hashbazar6.jpg": "9d6cbce2296b96984f1320e552613e02",
"assets/hashbazarshopping/hashbazaricon.png": "6e33883c20c6f8efdeffa07e70dbe0dd",
"assets/jauneliaallbooks/je1.jpg": "b0d6c3887d15264cb88ee1ee5a50dcb5",
"assets/jauneliaallbooks/je2.jpg": "0c8e322f07bbb15facec927dad7dd9c6",
"assets/jauneliaallbooks/je3.jpg": "1bce63ccc0e6d4e38eac67f50652f47a",
"assets/jauneliaallbooks/je4.jpg": "0c03a21392135dc05747c19c2c2e532d",
"assets/jauneliaallbooks/je5.jpg": "9e5128a05cf9dc524a3e58a87f8d03ae",
"assets/jauneliaallbooks/je6.jpg": "1aab9dd79892ed18390484694130a034",
"assets/jauneliaallbooks/playstore.png": "0532cd3002990502e8880d1d4d25193f",
"assets/NOTICES": "666271ac017492e5ced4b864cec5fd3b",
"assets/O5ChatSocialApp/o5chat1.jpg": "40f93183329403658150e6fe248a2543",
"assets/O5ChatSocialApp/o5chat2.jpg": "a0b221ba1d9a4ef82d2cde6e82553696",
"assets/O5ChatSocialApp/o5chat3.jpg": "2bc7c2488f071089fe30bcb9d62319c6",
"assets/O5ChatSocialApp/o5chat4.jpg": "8392b798d112075f68c4f70d3035ad6d",
"assets/O5ChatSocialApp/o5chat5.jpg": "eedb4eaf75ff4f8fc5f7281d5fa1de5b",
"assets/O5ChatSocialApp/o5chat6.jpg": "bc05a30020777a87f6db997772bd180e",
"assets/O5ChatSocialApp/o5chatlogo.png": "0d03485ebae8a709b294a64167e8bda5",
"assets/O5ChatSocialApp/o5social1.jpg": "4791ca91e41ab5b636a37bf0e869dc1d",
"assets/O5ChatSocialApp/o5social2.jpg": "09aded42e873dce2b6657990c42bd6fa",
"assets/O5ChatSocialApp/o5social3.jpg": "a975abb63d8af54189fe9cbde7b10b59",
"assets/O5ChatSocialApp/o5social4.jpg": "cdf5f9f77ba182de195445d1fcf1f2d6",
"assets/O5ChatSocialApp/o5social5.jpg": "ca77fe4fdf7fec5262507fe316327bbd",
"assets/O5ChatSocialApp/o5social6.jpg": "3c8b156f9cf6a6b9fbac3e0a6eadee02",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "431c352d26fc46305f1090f6a5db814c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "a5d7457fda15b7622c14f432ba63039a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "b72c617acdf2227c8b1413215f620711",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/weatherappimages/appstore%2520icon.png": "73cfba76309cd1492ddd731154fb3505",
"assets/weatherappimages/weather1.jpg": "6a9ce486a0d8e84937fecb1b7ac563b0",
"assets/weatherappimages/weather2.jpg": "f899f2080ac80d18fd5c9de06e63aa14",
"assets/weatherappimages/weather3.jpg": "5f7a372c4ac46210ce189003b07c38fd",
"assets/weatherappimages/weather4.jpg": "c883effff5fe1dfc6bf52df3a1b68ec5",
"assets/weatherappimages/weather5.jpg": "9f83c7ff275a2710d4371e28b4f4667d",
"assets/weatherappimages/weather6.jpg": "c1296a5563442167cc9dd769b771902f",
"assets/weatherappimages/weather7.jpg": "c15ca38f8aa767e6039040ec5effc405",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "24f0884945e00e5d30ffafa2a0cbcb33",
"firebase.json": "bf5cc2af42a6b16ff2b89e1731d0c550",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "68e8430eccb38f99e9537f386350a109",
"/": "68e8430eccb38f99e9537f386350a109",
"main.dart.js": "57effad93a07abc2ca52f244abe3bcb9",
"manifest.json": "98eb9a14530e0ba2fefd040e0cf8c03d",
"version.json": "0852618a1a820875061209c4835942f9"};
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
