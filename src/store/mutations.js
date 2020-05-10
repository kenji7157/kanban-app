import * as types from './mutation-types'

export default {
  [types.AUTH_LOGIN] (state, payload) {
    state.auth = payload
  },
  [types.FETCH_ALL_TASKLIST] (state, payload) {
    // TODO
    throw new Error('FETCH_ALL_TASKLIST mutation shooould be implementd')
  },
  [types.ADD_TASK] (state, payload) {
    // TODO
    throw new Error('ADD_TASK mutation shooould be implementd')
  },
  [types.UPDATE_TASK] (state, payload) {
    // TODO
    throw new Error('UPDATE_TASK mutation shooould be implementd')
  },
  [types.REMOVE_TASK] (state, payload) {
    // TODO
    throw new Error('REMOVE_TASK mutation shooould be implementd')
  },
  [types.AUTH_LOGOUT] (state) {
    // TODO
    throw new Error('AUTH_LOGOUT mutation shooould be implementd')
  }
}
