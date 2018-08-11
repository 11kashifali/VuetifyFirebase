<template>
    <v-container xs12>
      <v-layout column>
        <v-flex xs12 class="mb-4">
          <v-card class="mb-4" append hover :to="place.id">
            <v-layout row wrap>
              <v-flex xs12 sm6 md4>
                <v-card-media :src="place.src"
                  height="300px"></v-card-media>
              </v-flex>
              <v-flex xs12 sm6 md8>
                <v-card-title primary-title>
                  <div>
                    <h3 class="headline mb-0">{{ place.title }}</h3>
                    <div>{{ place.description }}</div>
                  </div>
                </v-card-title>
                <v-card-actions>
                  <v-btn to="/signin" flat color="orange">Share</v-btn>
                  <v-btn flat color="orange">Join Meetup</v-btn>
                </v-card-actions>
              </v-flex>
            </v-layout>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
</template>
<script>
export default {
    props:['id'],
    computed:{
        place(){
            return this.$store.getters.loadplace(this.id)
        }
    }
}
</script>

