import './common.scss'
(function() {
  var docEl = document.documentElement;
  var clientWidth = docEl.clientWidth > 750 ? 750 : docEl.clientWidth
  console.log(clientWidth)
  if (!clientWidth)
    return;
  docEl.style.fontSize = 16 * (clientWidth / 750) + 'px';
})();
