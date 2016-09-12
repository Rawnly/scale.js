(($) ->
  #YOUR PLUGIN GOES HERE

  $.fn.scale = (c, opt) ->
    me = this

    settings = $.extend({
      format: 'px'
      }, opt)
    if me != "undefined"
      s = me.css('font-size').slice( 0 , (me.length - 2) )
      me.css('font-size', s * c + settings.format)
    else
      console.error "$('" + me.selector + "') doesn't exist!"
      return me.selector
    return

  return
) jQuery
$ ->
  scale = undefined

  scale = (el) ->
    str = undefined
    if $(el).data('scale') && $(el).data('unit')
      str =
        txt: $(el).css('font-size')
        size: $(el).css('font-size').length
        u: $(el).data('unit')
      $.each $(el), ->
        nSize = undefined
        nSize = str.txt.slice(0, str.size - 2) * $(this).data('scale')
        $(this).css 'font-size', nSize + str.u
        return
    else if $(el).data('scale') && !$(el).data('unit')
      str =
        txt: $(el).css('font-size')
        size: $(el).css('font-size').length
        u: 'px'
      console.warn 'SCALE.JS: No elements with `data-unit` attribute. I will use default unit: ' + str.u
      $.each $(el), ->
        nSize = undefined
        nSize = str.txt.slice(0, str.size - 2) * $(this).data('scale')
        $(this).css 'font-size', nSize + str.u
        return
    else if !$(el).data('scale') && !$(el).data('unit')
      console.warn 'SCALE.JS: No elements with `data-scale` & `data-unit` attribute.'
    return

  scale '[data-scale]'
  return


  ###
  #ORIGINAL
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
  ###
