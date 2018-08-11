<template>
  <div>
    <v-container xs12>
      <v-layout column>
        <v-flex xs12 class="mb-4">
          <v-card v-for="item in places" v-bind:key="item.title" class="mb-4" append hover :to="item.id">
            <v-layout row wrap>
              <v-flex xs12 sm6 md4>
                <v-card-media :src="item.src"
                  height="300px"></v-card-media>
              </v-flex>
              <v-flex xs12 sm6 md8>
                <v-card-title primary-title>
                  <div>
                    <h3 class="headline mb-0">{{ item.title }}</h3>
                    <div>{{ item.description }}</div>
                  </div>
                </v-card-title>
                <v-card-actions>
                  <v-btn to="/signin" flat color="orange">Share</v-btn>
                  <v-btn flat color="orange">Going</v-btn>
                </v-card-actions>
              </v-flex>
            </v-layout>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
  export default {
      data(){
          return{
          };
      },
      computed:{
        places(){
          return this.$store.getters.featuredplaces
        }
      }
  }

</script>
