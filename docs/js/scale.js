$(function() {
  var scale;
  scale = function(el) {
    var str;
    if ($(el).data('scale')) {
      str = {
        txt: $(el).css('font-size'),
        size: $(el).css('font-size').length
      };
      $.each($(el), function() {
        var nSize;
        nSize = str.txt.slice(0, str.size - 2) * $(this).data('scale');
        $(this).css('font-size', nSize);
      });
    } else {
      console.warn(' WARNING! No elements with `data-scale` attribute.');
    }
  };
  scale('[data-scale]');
});
