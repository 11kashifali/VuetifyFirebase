<template>
    <v-container>
        <v-flex class="mb-4">
            <h2>Create Place</h2>
        </v-flex>
        <v-form v-on:submit.prevent="pushplace">
            <v-flex>
                <v-text-field
                label="Title"
                v-model="title"
                required
                ></v-text-field>
            </v-flex>
            <v-flex>
                <v-text-field
                label="Description"
                v-model="description"
                required
                ></v-text-field>
            </v-flex>
            <v-flex>
                <v-text-field
                label="Image Url"
                v-model="imageUrl"
                required
                ></v-text-field>
            </v-flex>
            <v-flex>
                <img width="200px" :src="imageUrl" alt="" srcset="">
            </v-flex>
            <v-flex>
                <v-btn :disabled="!isvalid" class="primary" type="submit">Add Place</v-btn>
            </v-flex>
        </v-form>
    </v-container>
</template>
<script>
export default {
    data(){
        return{
            title:'',
            description:'',
            imageUrl:'',
        }
    },
    computed:{
        isvalid(){
            return this.title !== '' && this.imageUrl !== ''&& this.description !== ''
        }
    },
    methods:{
        pushplace () {
            const place = {
                title: this.title,
                description: this.description,
                imageurl: this.imageUrl
            };
            this.$store.dispatch('pushplace',place)
            this.$router.push('/places')
        }
    }
}
</script>
