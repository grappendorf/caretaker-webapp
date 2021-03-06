Polymer

  is: 'caretaker-devices-list',

  behaviors: [Grapp.I18NJsBehavior, CaretakerUtilsBehavior]

  properties:
    token: {type: String}

  observers: [
    '_initWebsocket(websocket)'
  ]

  attached: ->
    @async ->
      @$.table.load()

  _edit: (e) ->
    @router.go "/devices/#{e.detail.id}"

  _new: ->
    @$.newDeviceDialog.start().then (type) =>
      @$.newDeviceDialog.end()
      @router.go "/devices/new/#{type}"

  _imagePath: (imageName) ->
    "/images/#{imageName}"

  _typeName: (type) ->
    @i18n @_to_snake_case(type), 'models._.one'

  _updateDevivesList: ->
    @$.table.load()

  _initWebsocket: (websocket) ->
    websocket.addEventListener 'message', (e) =>
      switch e.detail.event
        when 'devices.connection'
          @_updateDevivesList()
        when 'devices.register'
          @_updateDevivesList()
