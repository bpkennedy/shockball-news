import Vue from 'vue'
import Vuex from 'vuex'
import { getOneArticle, getRecentArticles } from './db'

Vue.use(Vuex)

export const TOGGLE_DRAWER_ACTION = 'TOGGLE_DRAWER_ACTION'
export const GET_SINGLE_ARTICLE_ACTION = 'GET_SINGLE_ARTICLE_ACTION'
export const GET_ARTICLES_ACTION = 'GET_ARTICLES_ACTION'
const TOGGLE_DRAWER_MUTATION = 'TOGGLE_DRAWER_MUTATION'
const SET_CURRENT_ARTICLE_MUTATION = 'SET_CURRENT_ARTICLE_MUTATION'
const SET_RECENT_ARTICLES_LIST_MUTATION = 'SET_RECENT_ARTICLES_LIST'

export default new Vuex.Store({
  state: {
    drawerOpen: false,
    currentArticle: {},
    recentArticlesList: [],
  },
  actions: {
    [TOGGLE_DRAWER_ACTION]({commit}) {
      commit(TOGGLE_DRAWER_MUTATION)
    },
    async [GET_ARTICLES_ACTION]({commit}) {
      const recentArticlesList = await getRecentArticles()
      commit(SET_RECENT_ARTICLES_LIST_MUTATION, recentArticlesList)
    },
    async [GET_SINGLE_ARTICLE_ACTION]({state, commit}, articleId) {
      const article = await getOneArticle(articleId)
      commit(SET_CURRENT_ARTICLE_MUTATION, article)
    },
  },
  mutations: {
    [TOGGLE_DRAWER_MUTATION](state) {
      if (state.drawerOpen) {
        Vue.set(state, 'drawerOpen', false)
      } else {
        Vue.set(state, 'drawerOpen', true)
      }
    },
    [SET_CURRENT_ARTICLE_MUTATION](state, article) {
      Vue.set(state, 'currentArticle', article)
    },
    [SET_RECENT_ARTICLES_LIST_MUTATION](state, articlesList) {
      Vue.set(state, 'recentArticlesList', articlesList)
    }
  },
  modules: {
  }
})
