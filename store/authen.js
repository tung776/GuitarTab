export const state = () => ({
    token: null,
    user: Object,
    isLogged: false
});

export const mutations = {
    SET_TOKEN(state, token) {
        state.token = token;
        if (token) {
            state.isLogged = true;
        } else {
            state.isLogged = false;
        }
    },

    SET_USER(state, user) {
        state.user = user;
    }
};

export const getters = () => {
    return {
        token: state.token
    }
}

export const actions = {
    setUser({
        commit
    }, user) {
        commit("SET_USER", user);
    },

    setToken({
        commit
    }, token) {
        commit("SET_TOKEN", token);
    }
};