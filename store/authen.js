export const state = () => ({
  token: null
});

export const mutations = {
  SET_TOKEN(state, token) {
    state.token = token;
  }
};

export const actions = {
  setToken({ commit }, token) {
    commit("SET_TOKEN", token);
  }
};
