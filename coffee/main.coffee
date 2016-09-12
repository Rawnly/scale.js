$(document).ready ->
  i = document.getElementById('menu').style

  menu = (x, y) ->
    i.top = y + 'px'
    i.left = x + 'px'
    i.visibility = 'visible'
    i.opacity = '1'
    return

  if document.addEventListener
    document.addEventListener 'contextmenu', ((e) ->
      posX = e.clientX
      posY = e.clientY
      menu posX, posY
      e.preventDefault()
      return
    ), false
    document.addEventListener 'click', ((e) ->
        i.opacity = '0'
        setTimeout (->
          i.visibility = 'hidden'
          return
        ), 501
        return
    ), false
  else
    document.attachEvent 'oncontextmenu', (e) ->
      posX = e.clientX
      posY = e.clientY
      menu posX, posY
      e.preventDefault()
      return
    document.attachEvent 'onclick', (e) ->
      i.opacity = '0'
      setTimeout (->
        i.visibility = 'hidden'
        return
      ), 501
    return
  return
