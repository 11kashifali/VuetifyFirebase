<template>
    <v-container>
        <v-layout>
            <v-flex xs12 sm6 offset-sm3>
                <v-card>
                    <v-card-text>
                        <v-container>
                            <form v-on:submit.prevent="signup">
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
                                        <v-text-field
                                        name="confirmpassword"
                                        label="confirmpassword"
                                        type="password"
                                        required
                                        >
                                        </v-text-field>
                                    </v-flex>
                                    <v-flex xs12 class="text-xs-center">      
                                        <v-btn block type="submit" class="primary">Signup</v-btn>
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
            password:''
        }
    },
    methods:{
        signup(){
            this.$store.dispatch('pushuser',{email:this.email,password:this.password})
        }
    }
}
</script>

