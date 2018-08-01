<template>
  <v-app>
    <v-toolbar color="primary" dark>
      <v-toolbar-side-icon class="hidden-sm-and-up"></v-toolbar-side-icon>
      <v-toolbar-title>DevMeetups</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
          <v-btn flat >Home</v-btn>
          <v-btn flat>About</v-btn>
          <v-btn flat>Privacy And Policy</v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      
    }
  },
  name: 'App'
}
</script>
