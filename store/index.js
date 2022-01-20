export const state = () => ({
  posts: [],
  startDate: null,
  likedPostDates: []
})

export const getters = {
  getPosts: state => state.posts,
  getStartDate: state => state.startDate,
  getLikePostDates: state => state.likedPostDates
}

export const mutations = {
  SET_POSTS (state, posts) {
    state.posts = posts
  },
  SET_START_DATE (state, startDate) {
    state.startDate = startDate
  },
  SET_LIKED_POST_DATES (state, likedPostDates) {
    state.likedPostDates = likedPostDates
  },
  TOGGLE_LIKE_POST (state, { date, like }) {
    const likedPostDates = like
      ? [...state.likedPostDates, date]
      : state.likedPostDates.filter(likedPostDate => likedPostDate !== date)
    state.likedPostDates = likedPostDates
  }
}

export const actions = {
  nuxtClientInit ({ commit }, { app }) {
    const likedPostDates = app.$cookies.get('liked-post-dates')
    if (likedPostDates) commit('SET_LIKED_POST_DATES', likedPostDates)
  },
  async loadPosts ({ commit, state }, { startDate, endDate, nasaApiKey }) {
    const posts = await this.$axios.$get('/planetary/apod', {
      params: {
        api_key: nasaApiKey,
        start_date: startDate,
        end_date: endDate
      }
    })

    const sortedNewPosts = posts.sort((postA, postB) => postA.date < postB.date ? 1 : -1)
    const sortedPosts = [...state.posts, ...sortedNewPosts]

    commit('SET_START_DATE', startDate)
    commit('SET_POSTS', sortedPosts)
    return sortedPosts
  },
  setLikePostDates ({ commit }, likedPostDates) {
    commit('SET_LIKED_POST_DATES', likedPostDates)
  },
  toggleLikePost ({ commit }, { date, like }) {
    commit('TOGGLE_LIKE_POST', { date, like })
  }
}
