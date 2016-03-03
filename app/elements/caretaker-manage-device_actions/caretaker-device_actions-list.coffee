Polymer

  is: 'caretaker-device_actions-list'

  behaviors: [Grapp.I18NJsBehavior]

  properties:
    token: {type: String}

  attached: ->
    @async ->
      @$.table.load()

  _edit: (e) ->
    @router.go "/device_actions/#{e.detail.id}"

  _new: ->
    @router.go '/device_actions/new'

  _toggleEnabled: (e) ->
    item = e.detail.item
    @device_actions.memberdevice_action(item.id, (if item.enabled then 'disable' else 'enable')).then =>
      @$.table.load()

  _executeAction: (e) ->
    @actionId = e.detail.id
    @$.executeActionRequest.generateRequest()

  _executeActionPath: (actionId) ->
    "/device_actions/#{actionId}/execute"
