export default function({ $axios, store }) {
  console.log("store ", store.state.auth.token);
  $axios.onError(error => {
    // console.log(error);
    if (error.response.status === 422) {
      store.dispatch("validation/setErrors", error.response.data.errors);
    }
    return Promise.reject(error);
  });

  $axios.onRequest(() => {
    store.dispatch("validation/clearErrors");
  });

  // $axios.setHeader({
  //   Authorization: `Bearer ${store.state.auth.token}`
  // });
}
