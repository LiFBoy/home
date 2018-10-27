import './common.css'
(function() {
  var docEl = document.documentElement;
  var clientWidth = docEl.clientWidth;
  if (!clientWidth)
    return;
  docEl.style.fontSize = 20 * (clientWidth / 640) + 'px';
})();
