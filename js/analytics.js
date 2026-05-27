(function () {
  var GA_ID = 'G-P760RHK24R';
  var KEY = 'cc-analytics-consent';
  var banner = document.getElementById('consent');

  // "Cookie settings" — withdraw/change consent as easily as granting it.
  var reset = document.getElementById('cookie-reset');
  if (reset) {
    reset.addEventListener('click', function (e) {
      e.preventDefault();
      try { localStorage.removeItem(KEY); } catch (err) {}
      location.reload();
    });
  }

  function loadGA() {
    if (window.__gaLoaded || !/^G-/.test(GA_ID)) return;
    window.__gaLoaded = true;
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
    document.head.appendChild(s);
    window.dataLayer = window.dataLayer || [];
    function gtag() { window.dataLayer.push(arguments); }
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', GA_ID, { anonymize_ip: true });
  }

  var saved = null;
  try { saved = localStorage.getItem(KEY); } catch (e) {}

  if (saved === 'granted') { loadGA(); return; }
  if (saved === 'denied' || !banner) return;

  banner.hidden = false;

  function decide(value) {
    try { localStorage.setItem(KEY, value); } catch (e) {}
    banner.hidden = true;
    if (value === 'granted') loadGA();
  }

  var accept = document.getElementById('consent-accept');
  var decline = document.getElementById('consent-decline');
  if (accept) accept.addEventListener('click', function () { decide('granted'); });
  if (decline) decline.addEventListener('click', function () { decide('denied'); });
})();
