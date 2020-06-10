import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate';
import { getOneArticle, getRecentArticles, getAppConfig } from './db'

Vue.use(Vuex)

export const TOGGLE_DRAWER_ACTION = 'TOGGLE_DRAWER_ACTION'
export const GET_SINGLE_ARTICLE_ACTION = 'GET_SINGLE_ARTICLE_ACTION'
export const GET_ARTICLES_ACTION = 'GET_ARTICLES_ACTION'
export const GET_APP_CONFIG_ACTION = 'GET_APP_CONFIG_ACTION'
export const GET_INITIAL_DATA_ACTION = 'GET_INITIAL_DATA_ACTION'
const CLOSE_DRAWER_MUTATION = 'CLOSE_DRAWER_MUTATION'
const OPEN_DRAWER_MUTATION = 'OPEN_DRAWER_MUTATION'
const SET_CURRENT_ARTICLE_MUTATION = 'SET_CURRENT_ARTICLE_MUTATION'
const SET_RECENT_ARTICLES_LIST_MUTATION = 'SET_RECENT_ARTICLES_LIST'
const SET_APP_CONFIG_MUTATION = 'SET_APP_CONFIG_MUTATION'
const SET_CLIENT_LAST_UPDATED_MUTATION = 'SET_CLIENT_LAST_UPDATED_MUTATION'
const RESET_STATE_MUTATION = 'RESET_STATE_MUTATION'

interface InitialState {
  clientLastUpdated: string | null
  currentArticle: any
  databaseConfig: any
  drawerOpen: boolean
  recentArticlesList: any[],
}

const getDefaultState = () : InitialState => {
  return {
    clientLastUpdated: null,
    currentArticle: {},
    databaseConfig: {},
    drawerOpen: false,
    recentArticlesList: [],
  }
}

export default new Vuex.Store({
  state: getDefaultState(),
  actions: {
    [TOGGLE_DRAWER_ACTION]({state, commit}) {
      if (state.drawerOpen) {
        commit(CLOSE_DRAWER_MUTATION)
      } else {
        commit(OPEN_DRAWER_MUTATION)
      }
    },
    async [GET_ARTICLES_ACTION]({commit}) {
      const recentArticlesList = await getRecentArticles()
      commit(SET_RECENT_ARTICLES_LIST_MUTATION, recentArticlesList)
    },
    async [GET_SINGLE_ARTICLE_ACTION]({state, commit}, articleId) {
      if (state.currentArticle.id === articleId) {
        return
      }
      const article = await getOneArticle(articleId)
      commit(SET_CURRENT_ARTICLE_MUTATION, article)
    },
    async [GET_APP_CONFIG_ACTION]({commit}) {
      const config = await getAppConfig()
      commit(SET_APP_CONFIG_MUTATION, config)
    },
    async [GET_INITIAL_DATA_ACTION]({state, commit, dispatch}) {
      await dispatch(GET_APP_CONFIG_ACTION)
      if (!state.clientLastUpdated) {
        dispatch(GET_ARTICLES_ACTION)
        commit(SET_CLIENT_LAST_UPDATED_MUTATION)
      } else {
        if (new Date(state.databaseConfig.last_server_update_date) > new Date(state.clientLastUpdated)) {
          commit(RESET_STATE_MUTATION)
          dispatch(GET_ARTICLES_ACTION)
          commit(SET_CLIENT_LAST_UPDATED_MUTATION)
        }
      }
    },
  },
  mutations: {
    [CLOSE_DRAWER_MUTATION](state) {
      Vue.set(state, 'drawerOpen', false)
    },
    [OPEN_DRAWER_MUTATION](state) {
      Vue.set(state, 'drawerOpen', true)
    },
    [SET_CURRENT_ARTICLE_MUTATION](state, article) {
      Vue.set(state, 'currentArticle', article)
    },
    [SET_RECENT_ARTICLES_LIST_MUTATION](state, articlesList) {
      Vue.set(state, 'recentArticlesList', articlesList)
    },
    [SET_APP_CONFIG_MUTATION](state, config) {
      Vue.set(state, 'databaseConfig', config)
    },
    [SET_CLIENT_LAST_UPDATED_MUTATION](state) {
      Vue.set(state, 'clientLastUpdated', new Date())
    },
    [RESET_STATE_MUTATION](state) {
      Object.assign(state, getDefaultState())
    }
  },
  modules: {
  },
  plugins: [createPersistedState()],
})
