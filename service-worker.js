console.log(self, "self");

self.addEventListener("install", (event) => {
  console.log("SW Install!", event);
  // activate itself when it enters the waiting phase
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  console.log("SW Activate!", event);

  // immediately get control of over the all pages
  event.waitUntil(clients.claim());
});

self.addEventListener("fetch", () => {
  return;
});
