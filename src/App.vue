<template>
  <v-app>
    <v-navigation-drawer class="hidden-md-and-up" v-model="sideNav" absolute temporary>
      <v-list v-for="item in menuItems" :key="item.title">
        <router-link :to="item.link" tag="span" style="cursor:pointer">
          <v-list-tile>
            <v-list-tile-avatar>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </router-link>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar class="primary white--text">
      <v-toolbar-side-icon v-on:click.stop="sideNav = !sideNav " class="hidden-md-and-up"></v-toolbar-side-icon>
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor:pointer">Tourismus</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down" v-for="item in menuItems" :key="item.title">
        <v-btn class="white--text" flat :to="item.link">
          <v-icon left>
            {{ item.icon }}
          </v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <main>
      <router-view></router-view>
    </main>
  </v-app>
</template>

<script>
  export default {
    data() {
      return {
        sideNav: false,
      }
    },
    computed: {
      menuItems() {
        let menuItems = [
          {
            icon: 'fa-sign-in',
            title: 'Sign In',
            link: '/signIn'
          },
          {
            icon: 'fa-user-circle',
            title: 'Sign Up',
            link: '/signUp'
          },
        ]
        if(this.isauthenticated){
          menuItems = [{
            icon: 'fa-comments',
            title: 'Explore Places',
            link: "/places"
          },
          {
            icon: 'fa-comments',
            title: 'Your Plans',
            link: "/yourplans"
          },
          {
            icon: 'fa-plus-square',
            title: 'Add Plans',
            link: '/plans/create'
          },
          {
            icon: 'fa-cog',
            title: 'View Profile',
            link: '/profile'
          },]
        }
        return menuItems
      },
      isauthenticated(){
        return this.$store.getters.authuser !== null && this.$store.getters.authuser !== undefined
      },
    },
    name: 'App'
  }

</script>
