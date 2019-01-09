<template>
  <div>
    <v-navigation-drawer :mini-variant="miniVariant" :clipped="clipped" v-model="drawer" fixed app>
      <v-list>
        <v-list-tile v-for="(item, i) in items" :to="item.to" :key="i" router exact>
          <v-list-tile-action>
            <v-icon v-html="item.icon"/>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"/>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar :clipped-left="clipped" fixed app>
      <v-toolbar-side-icon @click="drawer = !drawer"/>

      <v-btn flat dark @click="navigateTo({ name: 'index'})">Trang Chủ</v-btn>
      <!-- <p>{{ $store.state.authen.token }}</p> -->
      <div v-if="!$store.state.authen.isLogged">
        <v-btn flat dark @click="navigateTo({ name: 'register'})">Đăng Ký</v-btn>
        <v-btn flat dark @click="navigateTo({ name: 'login'})">Đăng Nhập</v-btn>
      </div>
      <div v-if="$store.state.authen.isLogged">
        <v-btn flat dark @click="navigateTo({ name: 'songs'})">Bản Nhạc</v-btn>
        <v-btn flat dark @click="logout">Thoát</v-btn>
      </div>
      <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>menu</v-icon>
      </v-btn>
    </v-toolbar>

    <v-navigation-drawer :right="right" v-model="rightDrawer" temporary fixed>
      <v-list>
        <v-list-tile @click.native="right = !right">
          <v-list-tile-action>
            <v-icon light>compare_arrows</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Switch drawer (click me)</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: true,
      items: [
        { icon: "apps", title: "Welcome", to: "/" },
        { icon: "bubble_chart", title: "Inspire", to: "/inspire" }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Guitar Tab"
    };
  },
  methods: {
    navigateTo(router) {
      this.$router.push(router);
    },
    logout() {
      this.$store.dispatch("authen/setUser", null);
      this.$store.dispatch("authen/setToken", null);
      this.$router.push({
        name: "index"
      });
    }
  }
};
</script>
