import VuexPersistence from 'vuex-persist'

export default ({
    store
}) => {
    return new VuexPersistence({
        storage: sessionStorage,
        key: "SERP"
    }).plugin(store);
}