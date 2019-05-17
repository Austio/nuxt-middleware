export const state = () => ({
  name: 'jim',
  place: 'here',
});

export const mutations = {
  setUser(state, name) {
    state.name = name;
  }
};