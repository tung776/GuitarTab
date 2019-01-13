import axios from "axios";
// import mapGetters from "vuex";
// import store from "@/store/auth";
// import { state } from "@/store";
export default () => {
  // let { state } = store;
  // console.log("state = ", store);
  return axios.create({
    baseURL: `http://localhost:3000/api`
    // headers: {
    //   Authorization: `Bearer ${store.state.token}`
    // }
  });
};
