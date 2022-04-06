'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "2468665e50efe0f7bbc16f5a01937f26",
"assets/assets/a.mp3": "ca75a8c2d9c055a153eba0ed76755ff4",
"assets/assets/Alphabets/1.jpg": "aa989b3006fea45f08a115ae21272852",
"assets/assets/Alphabets/10.jpg": "4b05cd3fea1a28af736b4f86ccb895a1",
"assets/assets/Alphabets/11.jpg": "f3f85d974fface0ec8bedfab03b3d75e",
"assets/assets/Alphabets/12.jpg": "925c9e0534d0c9909284ff0e1e8c8637",
"assets/assets/Alphabets/13.jpg": "c5b57642bdb2a3333fba93d4c8f3d1d3",
"assets/assets/Alphabets/14.jpg": "cb533354bf0297a28b81d54591032be7",
"assets/assets/Alphabets/15.jpg": "cb5249492be6c74b62fee219351b1a0d",
"assets/assets/Alphabets/16.jpg": "1fbba403f7d933a0005d8f6b78300a94",
"assets/assets/Alphabets/17.jpg": "7b362fba188a40dba7dca36ef8469cde",
"assets/assets/Alphabets/18.jpg": "e9e06b6f2372a6517aff9f216aa367bf",
"assets/assets/Alphabets/19.jpg": "2bcb0d4b5beaad6b131f51f96e5410f8",
"assets/assets/Alphabets/2.jpg": "5323cfb9dcc46a0d696c18183455587b",
"assets/assets/Alphabets/20.jpg": "0e748d5599fb750ec07878e3fcff1d36",
"assets/assets/Alphabets/21.jpg": "32622dd0a3e627fc552d1ace4021c997",
"assets/assets/Alphabets/22.jpg": "971b0a58863d613a6d552fc6edc49e8b",
"assets/assets/Alphabets/23.jpg": "39752cef354a18e399eee351b49acfb9",
"assets/assets/Alphabets/24.jpg": "483d15021713181e19970c3e088a2e49",
"assets/assets/Alphabets/25.jpg": "4b0ec1b52f4174b254291514a557ab69",
"assets/assets/Alphabets/26.jpg": "7225786caf825e8855f0fd4928c0a30d",
"assets/assets/Alphabets/28.jpg": "12d66a05b369f3cbdd83a8d2a6b9ee9f",
"assets/assets/Alphabets/3.jpg": "cdbdc7abaeec57f7aab792930b7693ac",
"assets/assets/Alphabets/4.jpg": "e4e23561ce4b18fb0b9d2c19e67d94e5",
"assets/assets/Alphabets/5.jpg": "795b10c172c99e2fe6639e87efbdb185",
"assets/assets/Alphabets/6-2.jpg": "3456d98265c14588db9d3e87817f1dec",
"assets/assets/Alphabets/6.jpg": "fd99d637f96a3574f2aac983cc5e8b7c",
"assets/assets/Alphabets/7.jpg": "058372abfee53aae2e118bdacec4a8b7",
"assets/assets/Alphabets/8.jpg": "99de624dacc33a80555662e573aa5b16",
"assets/assets/Alphabets/9.jpg": "c806885e7ab179cae205d12ca7a0d9f9",
"assets/assets/Alphabets/bg%2520dzyn.jpg": "4407b996ad97fc48c38ba370f637daa3",
"assets/assets/Alphabets/BG1.jpg": "de000b6945fe2f48150152fc8333f753",
"assets/assets/Alphabets/hds.png": "595745a4edbc49efeb1f320fac7c9b21",
"assets/assets/Alphabets/logo2.png": "35c2207ed8bbdeced0ace6bbe575b722",
"assets/assets/Alphabets/navbarlogo.jpg": "f791ed196112e7453194112027a44fce",
"assets/assets/Alphabets/splash%25205.jpg": "7cdaec8bad3ae3133b0cfe722f681408",
"assets/assets/b.mp3": "8ce8c9aecd262db26319a96b7656d76e",
"assets/assets/c.mp3": "1fccf64e033cbb348e03997def42cc13",
"assets/assets/d.mp3": "023f200658246e1135589b23a6d578b1",
"assets/assets/e.mp3": "262cfa4e7d37e38c66e00944b1dae27f",
"assets/assets/f.mp3": "ff8a8791ad2021532fb895276ef2df6f",
"assets/assets/fonts/KacstLetter.ttf": "80c6577cb53980614d802892a47f06bc",
"assets/assets/fonts/MLU-Indulekha.ttf": "53858f666931cf3c76ecc679a7792f75",
"assets/assets/g.mp3": "f36556ae99eb54d0acbbb1adc09a224b",
"assets/assets/h.mp3": "230297ad98ef97dcf2197fdf37d97d7a",
"assets/assets/ha.mp3": "44cd70c7522beadf146ca89cdfbf582e",
"assets/assets/hb.mp3": "c3feca2c810bc647169ebccdf43612fb",
"assets/assets/hc.mp3": "4e7778e35506aca5fc97f0e1cb59c091",
"assets/assets/hd.mp3": "a162fc24907638adb453623566f14d6e",
"assets/assets/he.mp3": "a9ca4d255a74297353e0dda9849992a4",
"assets/assets/hf.mp3": "ea79e14008f55c8b9e51da3cb3baa13f",
"assets/assets/hg.mp3": "633c95c6c617335b4b9cf241246366be",
"assets/assets/hh.mp3": "325d84eede07ab003677a6d6f618219f",
"assets/assets/hi.mp3": "27177061778995746a1de154b0007a3b",
"assets/assets/hj.mp3": "48e0bcee26c3870fc6cc2c2aab12eeff",
"assets/assets/hk.mp3": "80427bcb905d68d968b6371dd7919c31",
"assets/assets/hl.mp3": "de36fd947ccef2abd0391819ecd7e75b",
"assets/assets/hm.mp3": "34ba5834469036036301230741ae43c3",
"assets/assets/hn.mp3": "a636758924c33027794e81fd115c22a5",
"assets/assets/ho.mp3": "2532545ce3c2d2aa95e5a480f57e410b",
"assets/assets/hp.mp3": "82aad4f486c4a8cc3929903912d8d257",
"assets/assets/hq.mp3": "e22767c08361ba25a03c27e5c7aa4ad4",
"assets/assets/hr.mp3": "1ca7dfc2d50672b5f4e6513c41673cf6",
"assets/assets/hs.mp3": "db5e881d931a62cce5dbe8fc0ff04002",
"assets/assets/ht.mp3": "81ad328f9aea76d2f6fa512c523467ae",
"assets/assets/hu.mp3": "e0a1c366aae46e0e3539fddf200378f3",
"assets/assets/hv.mp3": "27a96230f16eb45ae5b0f10844f6946c",
"assets/assets/hw.mp3": "985d6e144193386360469023ef4fd29b",
"assets/assets/hx.mp3": "1c7adb846453df4f887680060699616a",
"assets/assets/hy.mp3": "40863295ad6c2aa6829f6657d50aad69",
"assets/assets/hz.mp3": "df2ae62a5612e97786cc2a7f6e713b9c",
"assets/assets/hzz.mp3": "e87c14aea59debd835507ef07d8752d8",
"assets/assets/hzzz.mp3": "d4c303a88111a5ab59f986ee0dd4c8dd",
"assets/assets/i.mp3": "237fa5b3aa7c53be239548d17afbcc94",
"assets/assets/ilh%2520noon%2520ex1.mp3": "533a8b9629b8a0840f13f17104fb0f32",
"assets/assets/ilh%2520noonex10.mp3": "34234dfdb825d45d98569328700544d7",
"assets/assets/ilh%2520noonex2.mp3": "eead68cf09ee4be3ceb1e9517eac1995",
"assets/assets/ilh%2520noonex3.mp3": "eb344e517768f6bc0aee60d559f6cb32",
"assets/assets/ilh%2520noonex4.mp3": "3632c61e6b2badd7d95ccc6ce9d2aa2d",
"assets/assets/ilh%2520noonex5.mp3": "b3e441501dde29501ee07ebb529f1209",
"assets/assets/ilh%2520noonex6.mp3": "7f96b1dd29f490aab86a3f29e4a7e057",
"assets/assets/ilh%2520noonex7.mp3": "a45d764bbe0439518ee70444fb1f57f2",
"assets/assets/ilh%2520noonex8.mp3": "892061ed72ea3d212f70486a548958ea",
"assets/assets/ilh%2520noonex9.mp3": "b31ea208a2012f3db9627e8e6855d032",
"assets/assets/img/backword.png": "8c20ac44823695d5e907822e61a1830e",
"assets/assets/img/forward.png": "8ccf25f3e5137d91291230ad662713af",
"assets/assets/img/loop.png": "dcf5bef4869a2de44ee4dd2026f49979",
"assets/assets/img/menu.png": "0b633a955f6fc167b721dc95305ba7b2",
"assets/assets/img/repeat.png": "13ac941500df8dc5a2648f91abc73b7c",
"assets/assets/j.mp3": "f5db6161765e19c014aa4b0e4cce92c2",
"assets/assets/k.mp3": "93f606853afae356eda0b7daded37c4f",
"assets/assets/l.mp3": "11e6af08612dab1e35f4c97019ea1f54",
"assets/assets/m.mp3": "1cc074cc8398659bb6029b1c2c3b7748",
"assets/assets/mem1.mp3": "d2aac567bb0ace887d114ae9f85133fb",
"assets/assets/mem2.mp3": "22fe11a426178c35ebe2f64113aa450e",
"assets/assets/mem21.mp3": "29d4a52acdc1d344f8cd8ac3dd1bd767",
"assets/assets/mem26.mp3": "9fe7fd6764409571f35f73c0681af9a1",
"assets/assets/mem31.mp3": "9fb99b1d3803f65d32eae6e219cc3208",
"assets/assets/mem32.mp3": "04b94eb7babc448dc552d08beb82a34c",
"assets/assets/mem36.mp3": "ab1f247c1371bd04eadde5961dc60e47",
"assets/assets/mem37.mp3": "0bbfcead0d50d61ef7c4594e72ab0f44",
"assets/assets/mem6.mp3": "66478bd232469d17924c030d10d4a0a8",
"assets/assets/mem7.mp3": "7ce4accda876e4d81f04c5e1c8326609",
"assets/assets/n.mp3": "848f7ce2f764c4b4de69dfa0e6ec9f3d",
"assets/assets/non11.mp3": "6ac6b60393d822027a5bb502e2d540ea",
"assets/assets/non12.mp3": "ee1abef623217fe2148bae8ca52f9c7e",
"assets/assets/non13.mp3": "c1e8d493652b0daab4e1e3ee5b7b4392",
"assets/assets/non14.mp3": "aed58fd5fc73416c3bf7837404c4195f",
"assets/assets/non15.mp3": "3dad6241e4b871d2d89c8973cd9357cd",
"assets/assets/non16.mp3": "470ee6e0e0f2e95abae38d22a7cee663",
"assets/assets/non17.mp3": "df3c9b709103622bcf4d6442e36d0b56",
"assets/assets/non18.mp3": "25bd6e8798587793484adfa67380b8cf",
"assets/assets/non19.mp3": "ce78818a853fb8d4cb0212c861190f13",
"assets/assets/non20.mp3": "9f4ad5646a784dd2e5d2d4570bf6cf44",
"assets/assets/non33.mp3": "5831543b2f9e52bbde4efabb4c552946",
"assets/assets/non34.mp3": "ec4f8ebb70ea556b6fd00b90146c914e",
"assets/assets/non36.mp3": "0f057d3893cfd901d67b1853ddf9c0ab",
"assets/assets/non37.mp3": "9411f1dd024030bd875a974c6eb79717",
"assets/assets/non38.mp3": "9065d036c5bee6b8eae6e422aa8f7752",
"assets/assets/non39.mp3": "be6022cf0027c830d74b9f15c9ee5ee8",
"assets/assets/non41.mp3": "467a418fa2d3c2dc6d768f6bbf05fb46",
"assets/assets/non42.mp3": "faefde0ea3633a930c45cb005e4c1de9",
"assets/assets/non43.mp3": "01ff32a5d673df73ecaba655491f13d7",
"assets/assets/non46.mp3": "1d23b12195bbe5120f2388d72388cb85",
"assets/assets/non47.mp3": "6dcea17765b0ac1d15c32bc03fe86ae4",
"assets/assets/non48.mp3": "009b168ffa65d2819fe4551562a02ef5",
"assets/assets/non50.mp3": "6631199f11e0e203da8dda630324ac04",
"assets/assets/non51.mp3": "4b6701c96209def54b4585962df1d75f",
"assets/assets/non52.mp3": "59633c67d74f6b15b9244d34ef7b8044",
"assets/assets/non53.mp3": "acee571e238f1a3149ce8a0dda84b360",
"assets/assets/non54.mp3": "4cf22a6531c01a4e749abb0a732cb0f6",
"assets/assets/non55.mp3": "9829eecaca6752d84f54a7a6daba59b2",
"assets/assets/non56.mp3": "443c1c00c768728734f6b3c9b95bcdb5",
"assets/assets/non57.mp3": "e81020a1389347842c800eb73e6f5984",
"assets/assets/non58.mp3": "7dc4135b1e77424d49c08667c9e591e3",
"assets/assets/non59.mp3": "4143f7850a1b36062d0444d820f8f82f",
"assets/assets/noon31.mp3": "4dd820610a01f89175223160c28f0b77",
"assets/assets/noon32.mp3": "f8cb29e34afc3c6ae0cb8447adc9b4d4",
"assets/assets/noon35.mp3": "be6022cf0027c830d74b9f15c9ee5ee8",
"assets/assets/o.mp3": "bd05192d462792c4dad8b61ec7684986",
"assets/assets/p.mp3": "9e7acfd9eb6c5a69f1f9bada47077a23",
"assets/assets/q.mp3": "9076a74d89d1cce6953a55f7d04793d4",
"assets/assets/r.mp3": "ae6abfe6d94ce98a932aff093e4b8663",
"assets/assets/s.mp3": "bf6ace1335ad0625a92ac9a5ccda1167",
"assets/assets/Sifath/infithaah.png": "3d988958e9c51c4ed3d229717bb97305",
"assets/assets/Sifath/isthialaa.png": "5031f4b486ebe6538bd2db490e168588",
"assets/assets/Sifath/isthifaal.png": "730c0c789fcd279194f826d5a73f2ba9",
"assets/assets/Sifath/ithbaq.png": "c860b88fa42d375f3a64fd7979b08f41",
"assets/assets/Sifath/rihv.jpg": "6dcd3ee695a14736664590c661c97ced",
"assets/assets/Sifath/rihv.png": "c1becd15ea207d386e260ac8a4c8f35d",
"assets/assets/Sifath/s1.jpg": "a1cd7ee06a64c5260649da51c1dd2159",
"assets/assets/Sifath/s10.jpg": "91c8f4d1e45bb4d226a6068c7937d150",
"assets/assets/Sifath/s11.jpg": "55e6ce464c8cfa09185bb6577357576e",
"assets/assets/Sifath/s12.jpg": "7de072741c99665e26b212108f2a2387",
"assets/assets/Sifath/s2.jpg": "bb24100ac1a0e40850553e2c3194fe8b",
"assets/assets/Sifath/s3.jpg": "1e1e73e9e0e980f6e253cdc8068ffeaa",
"assets/assets/Sifath/s4.jpg": "23fcfc3a50422993e261ee7ce6f08fd7",
"assets/assets/Sifath/s6.jpg": "5dd462bbd22219673342a4905ae987bb",
"assets/assets/Sifath/s7.jpg": "62d07e7b6c76b45f954e13986bff17de",
"assets/assets/Sifath/s9.jpg": "b7f3fbe3a6e89e490a29551eff9c74d6",
"assets/assets/Sifath/shidath.png": "f18aeef2be0706c7b1ade155aed53c91",
"assets/assets/Sifath/thawasath.png": "26d7ccc2716b0a0706510b299e96c9d6",
"assets/assets/t.mp3": "0753df323af10dbd5497564d129e6bf6",
"assets/assets/u.mp3": "efc684b651f5696e8064bec897a6894b",
"assets/assets/v.mp3": "cfb045a4178abe5065716ed45c327c88",
"assets/assets/w.mp3": "daf38de29e40fbe025acd340005f6c7f",
"assets/assets/x.mp3": "39211bf1043ddde444e214d9a18899f5",
"assets/assets/y.mp3": "b6894196c5327e81ec40c79d048110ca",
"assets/assets/z.mp3": "75a1921faa1d012e696489713e908030",
"assets/assets/zz.mp3": "281fba730aaf8165a0a4d7f08dfca238",
"assets/assets/zzz.mp3": "18290a12fd6f971caa9399b671937350",
"assets/FontManifest.json": "db66fb76a409dac554dd3569013414ad",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "e438c556f4e75e075929a17f9ba52d8c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "62b9906717d7215a6ff4cc24efbd1b5c",
"canvaskit/canvaskit.wasm": "b179ba02b7a9f61ebc108f82c5a1ecdb",
"canvaskit/profiling/canvaskit.js": "3783918f48ef691e230156c251169480",
"canvaskit/profiling/canvaskit.wasm": "6d1b0fc1ec88c3110db88caa3393c580",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "daba0a0eea61ba538979bd721b3511e7",
"/": "daba0a0eea61ba538979bd721b3511e7",
"main.dart.js": "3554122342ea907f05c3d3774814b51c",
"manifest.json": "f79819fde52caee83bdd4254d498a93b",
"version.json": "d252642427952b76d5cf84eec78597cd"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
