(function(navigator, workerUrl){
  if ('serviceWorker' in navigator) {
    // Register a service worker hosted at the root of the
    // site using the default scope.
    navigator.serviceWorker.register(workerUrl).then(function(registration) {
        console.log('Service worker registration succeeded:', registration);
    }).catch(function(error) {
        console.log('Service worker registration failed:', error);
    });
  } else {
      console.log('Service workers are not supported.');
  }
})(navigator, window.IW_URL);
