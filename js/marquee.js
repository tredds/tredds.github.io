(function () {
  var track = document.getElementById('greet-track');
  if (!track) return;
  // Duplicate children once via DOM clone (safe — no innerHTML, no user input)
  // so translateX(-50%) loops seamlessly across the two halves.
  var originals = Array.prototype.slice.call(track.children);
  originals.forEach(function (node) { track.appendChild(node.cloneNode(true)); });
  if (!window.matchMedia || !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    track.style.animation = 'scrollX 80s linear infinite';
    track.style.willChange = 'transform';
  }
})();
