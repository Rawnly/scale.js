$(document).ready(function() {

  d();

  $('#run').click(function () {
    if ( $('.title').scale(1, { mode: 'return' }) < 144 ) {
      $('.title').scale(2);
    } else {
      console.warn('TOO BIG!');
    }
  });

});


function write(text, timeout) {
  setTimeout(function () {
    if ( $('.title').html !== text ) {
      $('.title').html(text)
    }
  }, timeout);
}


function unDo() {
  console.log('Removing...');
  write('< / Scale.js >', 250);
  write('< / Scale.j >', 500);
  write('< / Scale. >', 750);
  write('< / Scale >', 1000);
  write('< / Scal >', 1250);
  write('< / Sca >', 1500);
  write('< / Sc >', 1750);
  write('< / S >', 2000);
  write('', 2100);
  write('$', 2250);

  setTimeout(function () {
    d();
  }, 3000);
}

function d() {
  console.log('Writing...');
  write('', 0);
  write('$', 250)
  write('S', 500);
  write('Sc', 750);
  write('Sca', 1000);
  write('Scal', 1250);
  write('Scale', 1500);
  write('Scale.', 1750);
  write('Scale.j', 2000);
  write('Scale.js', 2250);
  write('', 2350);
  write('< / Scale.js', 2450);
  write('', 2550);
  write('< / Scale.js >', 2650);

  setTimeout(function () {
    unDo();
  }, 6500);
}
