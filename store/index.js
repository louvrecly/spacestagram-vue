export const state = () => ({
  posts: [],
  startDate: null
})

export const getters = {
  getPosts: state => state.posts,
  getStartDate: state => state.startDate
}

export const mutations = {
  SET_POSTS (state, posts) {
    state.posts = posts
  },
  SET_START_DATE (state, startDate) {
    state.startDate = startDate
  }
}

export const actions = {
  async loadPosts ({ commit, state }, startDate, endDate) {
    const posts = await this.$axios.$get('/planetary/apod', {
      params: {
        api_key: process.env.NASA_API_KEY,
        start_date: startDate,
        end_date: endDate
      }
    })

    const sortedNewPosts = posts.sort((postA, postB) => postA.date < postB.date ? 1 : -1)
    const sortedPosts = [...state.posts, ...sortedNewPosts]

    commit('SET_START_DATE', startDate)
    commit('SET_POSTS', sortedPosts)
    return sortedPosts
  }
}
