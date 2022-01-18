export const state = () => ({
  posts: []
})

export const getters = {
  getPosts: state => state.posts
}

export const mutations = {
  SET_POSTS (state, posts) {
    state.posts = posts
  }
}

export const actions = {
  async loadPosts ({ commit }, startDate = '2022-01-01') {
    const posts = await this.$axios.$get('/planetary/apod', {
      params: { api_key: process.env.NASA_API_KEY, start_date: startDate }
    })

    const sortedPosts = posts.sort((postA, postB) => postA.date < postB.date ? 1 : -1)

    commit('SET_POSTS', sortedPosts)
    return sortedPosts
  }
}
