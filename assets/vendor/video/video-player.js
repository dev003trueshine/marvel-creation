var player = videojs('videoPlayer', {
  autoplay: true,   // autoplay enabled
  muted: true,      // start muted (required for autoplay in most browsers)
  controls: true,
  loop: true,
  plugins: {
    hotkeys: {
      enableModifiersForNumbers: false
    }
  }
});
