Polymer

  is: 'caretaker-controlpanel-new-widget-dialog'

  behaviors: [Grapp.I18NJsBehavior]

  properties:
    token: {type: String},
    deviceId: {type: Number, value: null}
    title: {type: String, value: null},
    width: {type: Number, value: 1},
    height: {type: Number, value: 1}

  observers: [
    '_validate(device.id)'
  ]

  start: ->
    @processing = false
    @$.devicesNames.generateRequest()
    @name = ''
    @title = ''
    @deviceId = null
    @width = 1
    @height = 1
    promise = new Promise ((resolve, reject) ->
      @resolve = resolve
      @reject = reject
    ).bind(@)
    @$.dialog.open()
    promise

  end: ->
    @processing = false
    @async -> @$.dialog.close()

  _ok: ->
    @processing = true
    @resolve {device_id: @deviceId, title: @title, width: @width, height: @height}

  _cancel: ->
    @end()

  _validate: ->
    @valid = @deviceId?
