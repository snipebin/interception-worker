self.addEventListener('fetch', function(event) {
  event.respondWith(
    new Response('<p>Request to ' + event.request.url + ' has been blocked by GTM configuration.</p>', {
      headers: { 'Content-Type': 'text/html' },
      status: 403,
      ok: false
    });
  );
});
