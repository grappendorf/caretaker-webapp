Polymer

  is: 'caretaker-device_actions-editor'

  behaviors: [Grapp.I18NJsBehavior]

  properties:
    token: {type: String}
    id: {type: Number}

  observers: [
    '_load(id, apiUrl)'
  ]

  _load: ->
    @$.editor.load @id

  _back: ->
    @router.go "/device_actions"
