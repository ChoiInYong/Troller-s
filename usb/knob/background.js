chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('knob.html', {
    width: 400,
    height: 400
  });
});
