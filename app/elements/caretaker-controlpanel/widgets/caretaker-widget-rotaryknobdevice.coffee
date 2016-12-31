Polymer

  is: 'caretaker-widget-rotaryknobdevice'

  properties:
    widget: {type: Object}
    websocket: {type: Object}
    token: {type: String}

  attached: ->
    @device = @widget.device
    @value = @device.state

  updateState: (e) ->
    return if e.id != @device.id
    unless @$.knob.press == 1
      @value = e.state

  _sendValue: ->
    if @$.knob.press == 1
      @websocket.trigger 'device.state', {id: @device.id, state: {value: @$.knob.value}}
