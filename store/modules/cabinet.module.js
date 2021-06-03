import GravitApi from 'gravitlauncher-ws-api'

const state = () => {
  return {
    user: {
      username: 'Player',
      uuid: null,
      permissions: 0,
      flags: 0,
      skin: null,
      cloak: null,
      ext: {
        gender: null,
        status: null,
        email: null,
        economyMoney: 0,
        donateMoney: 0,
        extendedMoney: 0,
        isBanned: false,
        privateUserZone: {
          enabled2FA: false
        },
        groups: []
      }
    },
    config: {
      projectName: null,
      devtools: false,
      defaultSkinUrl: null,
      defaultCloakUrl: null
    },
    api: new GravitApi()
  }
}

const mutations = {
  onAuth (state, event) {
    state.user.username = event.playerProfile.username
    state.user.uuid = event.playerProfile.uuid
    state.user.skin = event.playerProfile.skin === undefined ? null : event.playerProfile.skin.url
    state.user.cloak = event.playerProfile.cloak === undefined ? null : event.playerProfile.cloak.url
    state.user.permissions = event.permissions.permissions
    state.user.flags = event.permissions.flags
  },
  onExtInfo (state, event) {
    state.user.ext.gender = event.gender
    state.user.ext.status = event.status
    state.user.ext.email = event.email
    state.user.ext.economyMoney = event.economyMoney
    state.user.ext.donateMoney = event.donateMoney
    state.user.ext.extendedMoney = event.extendedMoney
    state.user.ext.isBanned = event.isBanned
    state.user.ext.groups = event.groups
    state.user.ext.privateUserZone.enabled2FA = event.privateUserZone.isEnabled2FA
  },
  onPermissions (state, event) {
    state.user.permissions = event.permissions
    state.user.flags = event.flags
  },
  onUserInfo (state, event) {
    state.user.permissions = event.permissions.permissions
    state.user.flags = event.permissions.flags
    state.user.username = event.playerProfile.username
    state.user.uuid = event.playerProfile.uuid
    state.user.skin = event.playerProfile.skin === undefined ? null : event.playerProfile.skin.url
    state.user.cloak = event.playerProfile.cloak === undefined ? null : event.playerProfile.cloak.url
  },
  onConfig (state, event) {
    state.config.projectName = event.projectName
    state.config.devtools = event.devtools
    state.config.defaultSkinUrl = event.defaultSkinUrl
    state.config.defaultCloakUrl = event.defaultCloakUrl
  },
  enable2FA (state) {
    state.user.ext.privateUserZone.enabled2FA = true
  },
  disable2FA (state) {
    state.user.ext.privateUserZone.enabled2FA = false
  },
  exit (state) {
    state.user.ext.gender = null
    state.user.ext.status = null
    state.user.ext.email = null
    state.user.ext.economyMoney = 0
    state.user.ext.donateMoney = 0
    state.user.ext.extendedMoney = 0
    state.user.ext.isBanned = false
    state.user.ext.privateUserZone.enabled2FA = false
    state.user.permissions = 0
    state.user.flags = 0
    state.user.username = 'Player'
    state.user.uuid = null
    state.user.skin = null
    state.user.cloak = null
    state.api.promises.auth = new Promise(function (resolve, reject) {
      state.api.promises.auth_resolve = resolve
      state.api.promises.auth_reject = reject
    })
    state.api.promises.auth_reject()
  }
}

const actions = {
  requestExtInfo: async function (context) {
    var res = await context.dispatch('request', { type: 'lkExtendedInfo' })
    context.commit('onExtInfo', res)
  },
  requestAuth: async function (context, { login, password, authId }) {
    context.state.api.promises.auth = new Promise(function (resolve, reject) {
      context.state.api.promises.auth_resolve = resolve
      context.state.api.promises.auth_reject = reject
    })
    try {
      var res = await context.dispatch('request', { // Авторизация
        type: 'auth',
        login: login,
        password: {
          password: password,
          type: 'plain'
        },
        auth_id: authId,
        getSession: true,
        authType: 'API',
        initProxy: false
      })
      context.state.api.promises.auth_resolve()
    } catch (e) {
      context.state.api.promises.auth_reject(e)
      throw e
    }
    localStorage.setItem('sessionId', res.session)
    context.commit('onAuth', res)
  },
  requestAuthWith2FA: async function (context, { login, password, totp, authId }) {
    context.state.api.promises.auth = new Promise(function (resolve, reject) {
      context.state.api.promises.auth_resolve = resolve
      context.state.api.promises.auth_reject = reject
    })
    try {
      var res = await context.dispatch('request', { // Авторизация
        type: 'auth',
        login: login,
        password: {
          firstPassword: {
            password: password,
            type: 'plain'
          },
          secondPassword: {
            totp: totp,
            type: 'totp'
          },
          type: '2fa'
        },
        auth_id: authId,
        getSession: true,
        authType: 'API',
        initProxy: false
      })
      context.state.api.promises.auth_resolve()
    } catch (e) {
      context.state.api.promises.auth_reject(e)
    }
    localStorage.setItem('sessionId', res.session)
    context.commit('onAuth', res)
  },
  requestExit: async function (context, exitAll) {
    var res = await context.state.api.request('exit', { exitAll })
    context.commit('exit', res)
  },
  request: async function (context, data) {
    await context.state.api.promises.onopen
    return new Promise(function (resolve, reject) {
      context.state.api.sendRequest(data.type, data, resolve, reject)
    })
  }
}

export default {
  state,
  actions,
  mutations
}
