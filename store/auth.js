export const getters = {
  authenticated(state) {
    return state.loggedIn;
  },

  user(state) {
    return state.user;
  }
};

// export const state = () => ({
//   token: null,
//   user: Object,
//   isLogged: false
// });

// export const getters = {
//   authenticated(state) {
//     return state.isLogged;
//   },
//   token(state) {
//     return state.token;
//   },
//   user(state) {
//     return state.user;
//   }
// };

// export const mutations = {
//   SET_TOKEN(state, token) {
//     state.token = token;
//     if (token) {
//       state.isLogged = true;
//     } else {
//       state.isLogged = false;
//     }
//   },

//   SET_USER(state, user) {
//     state.user = user;
//   }
// };

// export const actions = {
//   setUser({ commit }, user) {
//     commit("SET_USER", user);
//   },

//   setToken({ commit }, token) {
//     commit("SET_TOKEN", token);
//   }
// };
