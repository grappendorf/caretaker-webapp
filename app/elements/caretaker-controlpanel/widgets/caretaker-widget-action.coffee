Polymer

  is: 'caretaker-widget-action'

  properties:
    widget: {type: Object}
    websocket: {type: Object}
    token: {type: String}

  _executeAction: ->
    console.log @token
    @$.executeActionRequest.generateRequest()

  _executeActionParams: (actionId) ->
    {id: actionId}
