(function( $ ) {
  $.fn.scale = function ( factor, options ) {
    "use strict";

    // Declarations
    var me, settings, l, size;

    // Conditions
    if ( !factor ) {
      factor = 1;
    } else if ( factor == 'random' ) {
      function randomInt(min,max) {
        return Math.floor(Math.random()*(max-min+1)+min);
      }
      factor = randomInt(1, 10)
    }

    // Setting `me` as `this`
    me = this;

    // Options, case if unit is not defined use pixels.
    settings = $.extend({
      unit: 'px',
    }, options);

    // Remove last 2 characters from the string ( px or em etc.. )
    l = me.css('font-size').length - 2;

    // Clean size without unit
    size = me.css('font-size').slice(0, l);

    // Calc the final size. ( size by factor )
    me.css('font-size', size * factor + settings.unit );

    // Return the final size
    return size * factor + settings.unit;
  }
} ( jQuery ) );


$(document).ready(function() {
  var url = 'http://github.com/Rawnly/Scale.js';
  console.log('This website use Scale.js!');
  console.log('Check it out! :' + url);


  var scale, str, nSize;

  scale = function(el) {

    if ( $(el).data('scale') && $(el).data('unit') ) {

      // console.log(' ');
      // console.log('Someone has datas');
      // console.log(' ');

      // Get datas from HTML and CSS
      var str = {
        fSize : $(el).css('font-size'),
        leng : $(el).css('font-size').length,
        unit : $(el).data('unit'),
        factor : $(el).data('scale')
      };

      // Apply configuration to each element who has `data-scale` attr
      $.each( $(el), function () {
        $(this).css('font-size', str.fSize.slice( 0, str.leng - 2 ) * str.factor + str.unit )
      } );

    } else if ( !$(el).data('unit') && $(el).data('scale') ) {

      var str = {
        fSize : $(el).css('font-size'),
        leng : $(el).css('font-size').length,
        unit : 'px',
        factor : $(el).data('scale')
      };

      // Apply configuration to each element who has `data-scale` attr
      $.each( $(el), function () {
        $(this).css('font-size', str.fSize.slice( 0, str.leng - 2 ) * str.factor + str.unit )
      } );

      console.warn('No unit defined! Default is `px`. (Scale.js)');


    } else if ( !$(el).data('unit') && !$(el).data('scale') ) {

      console.warn('No data-scale and data-unit founded! (Scale.js)');

    } else {
      console.log(' ');
      console.error('OPS! An error is occurred (Scale.js)');
      console.log(' ');
    }

  };

  scale( $('[data-scale]') );
});
