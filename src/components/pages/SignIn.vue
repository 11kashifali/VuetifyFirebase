<template>
    <v-container>
        <v-layout>
            <v-flex xs12 sm6 offset-sm3>
                <v-card>
                    <v-card-text>
                        <v-container>
                            <form v-on:submit.prevent="signin">
                                <v-layout row wrap>
                                    <v-flex xs12>
                                        <v-text-field
                                        name="email"
                                        label="Email"
                                        id="email"
                                        v-model="email"
                                        type="email"
                                        required
                                        >
                                        </v-text-field>
                                    </v-flex>
                                    <v-flex xs12>    
                                        <v-text-field
                                        name="password"
                                        label="password"
                                        id="password"
                                        v-model="password"
                                        type="password"
                                        required
                                        >
                                        </v-text-field>  
                                    </v-flex>
                                    <v-flex xs12>    
                                        <v-alert
                                        type="success"
                                        dismissible
                                        color="secondary"
                                        v-model="iserror"
                                        >
                                        {{ error }}
                                        </v-alert>  
                                    </v-flex>
                                    <v-flex xs12>
                                        <v-progress-linear
                                        :indeterminate="isloading"
                                        v-if="isloading"
                                        >
                                        </v-progress-linear>     
                                    </v-flex>
                                    <v-flex xs12 class="text-xs-center">      
                                        <v-btn block type="submit" class="primary">SignIn</v-btn>
                                    </v-flex>       
                                </v-layout>
                            </form>
                        </v-container>
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
export default {
    data(){
        return{
            email:'',
            password:'',
        }
    },
    methods:{
        signin(){
            this.$store.dispatch('signin',{email:this.email,password:this.password})
        }
    },
    computed:{
        isauthenticated(){
            return this.$store.getters.authuser !== null && this.$store.getters.authuser !== undefined
        },
        iserror(){
            return this.$store.getters.errors !== null && this.$store.getters.errors !== undefined
        },
        error(){
            if(this.iserror){
                return this.$store.getters.errors.message
            }
        },
        isloading(){
            return this.$store.getters.loading
        }
    },
    watch:{
        isauthenticated(){
            this.$router.push('/places')
        }
    }
}
</script>
