Polymer

  is: 'caretaker-devices-editor'

  behaviors: [Grapp.I18NJsBehavior, CaretakerUtilsBehavior]

  properties:
    token: {type: String}
    id: {type: Number}
    type: {type: String}

  observers: [
    '_load(apiUrl, id)'
    '_newDevice(apiUrl, type)'
    '_updateFields(device.type)'
  ]

  _load: ->
    @$.editor.load(@id).then (item) =>
      @type = item.type

  _newDevice: ->
    return if @id
    @devices.new().then (success) =>
      @$.editor.show success.data

  _back: ->
    @router.go "/devices"

  _devicesParams: (type) ->
    {type: @_pluralize(@_to_snake_case(type))}

  _imagePath: (imageName) ->
    "/images/#{imageName}"

  _updateFields: ->
    @$.editor.updateFields()
