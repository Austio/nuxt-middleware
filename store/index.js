export const actions = {
  nuxtServerInit ({ commit }, { req }) {
    console.log("--- nuxtServerInit");
    commit('user/setUser', 'jane');
  }
}