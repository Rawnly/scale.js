$ ->
  scale = (el) ->
    if $(el).data('scale')
      str =
        txt: $(el).css('font-size')
        size: $(el).css('font-size').length
      $.each $(el), ->
        nSize = str.txt.slice(0, str.size - 2) * $(this).data('scale')
        $(this).css 'font-size', nSize
        return
    else
      console.warn ' WARNING! No elements with `data-scale` attribute.'
    return

  scale '[data-scale]'
  return
