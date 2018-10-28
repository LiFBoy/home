
import './common.scss'
// (function() {
//   var docEl = document.documentElement;
//   var clientWidth = docEl.clientWidth > 750 ? 750 : docEl.clientWidth
//   console.log(clientWidth)
//   if (!clientWidth)
//     return;
//   docEl.style.fontSize = 16 * (clientWidth / 750) + 'px';
// })();


(function (doc, win) {

  var docEl = doc.documentElement,//根元素html

//判断窗口有没有orientationchange这个方法，有就赋值给一个变量，没有就返回resize方法。

    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',


    recalc = function () {

      var clientWidth = docEl.clientWidth > 750 ? 750 : docEl.clientWidth

      console.log(docEl.clientWidth )

      if (!clientWidth) return;

//把document的fontSize大小设置成跟窗口成一定比例的大小，从而实现响应式效果。　　　　　　
      docEl.style.fontSize = 16* (clientWidth / 750) + 'px';

    };

//alert(docEl)

  if (!doc.addEventListener) return;

  win.addEventListener(resizeEvt, recalc, false);//addEventListener事件方法接受三个参数：第一个是事件名称比如点击事件onclick，第二个是要执行的函数，第三个是布尔值

  doc.addEventListener('DOMContentLoaded', recalc, false)//绑定浏览器缩放与加载时间

})(document, window);

//
// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/js/bootstrap.min.js'
// import 'jquery/dist/jquery.min.js'
// import 'popper.js/dist/umd/popper.min.js'
//
// import './common.scss'
