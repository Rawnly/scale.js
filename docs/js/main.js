$(document).ready(function() {
  var i, menu;
  i = document.getElementById('menu').style;
  menu = function(x, y) {
    i.top = y + 'px';
    i.left = x + 'px';
    i.visibility = 'visible';
    i.opacity = '1';
  };
  if (document.addEventListener) {
    document.addEventListener('contextmenu', (function(e) {
      var posX, posY;
      posX = e.clientX;
      posY = e.clientY;
      menu(posX, posY);
      e.preventDefault();
    }), false);
    document.addEventListener('click', (function(e) {
      i.opacity = '0';
      setTimeout((function() {
        i.visibility = 'hidden';
      }), 501);
    }), false);
  } else {
    document.attachEvent('oncontextmenu', function(e) {
      var posX, posY;
      posX = e.clientX;
      posY = e.clientY;
      menu(posX, posY);
      e.preventDefault();
    });
    document.attachEvent('onclick', function(e) {
      i.opacity = '0';
      return setTimeout((function() {
        i.visibility = 'hidden';
      }), 501);
    });
    return;
  }
});
