Polymer

  is: 'caretaker-app'

  properties:
    app: {type: Object}

  observers: [
    '_connectWebsocket(websocketUrl)'
  ]

  ready: ->
    @app = @

  login: ->
    @$.sessionManager.connect()

  logout: ->
    @$.sessionManager.disconnect()
    @router.go '/'
    @$.sessionManager.connect()

  changePassword: ->
    @$.sessionManager.editPassword()

  sessionManagerLoaded: ->
    @login() unless @$.sessionManager.token

  editProfile: ->
    @$.sessionManager.editProfile()

  authenticationError: ->
    @unauthenticatedLocation = window.location.hash[1..]
    @$.sessionManager.reconnect()

  bindRouteAttributes: (e) ->
    e.detail.model.sessionManager = @sessionManager

  _connectWebsocket: () ->
    @$$('web-socket').open()

  _websocketOpen: () ->
    @websocket = @$$('web-socket')
    @websocket.__proto__.trigger = (event, data) =>
      @websocket.send token: @token, event: event, data: data
