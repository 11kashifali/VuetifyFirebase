<template>
    <v-container fluid class="pa-0">
        <v-carousel class="mb-1" style="height:92vh">
        <v-carousel-item
            v-if="places"
            v-for="(item,i) in places"
            :key="i"
            :src="item.src"
        >   
            <div class="overlay"></div>
            <div class="title">
                <h3>{{item.title}}</h3>
            </div>
        </v-carousel-item>
        </v-carousel>
        <v-flex class="text-sm-center">
            <p>Join our Meetup</p>
        </v-flex>
    </v-container>
</template>
<script>
export default {
    data(){
        return{
        };
    },
    computed:{
        places(){
            console.log(this.$store.getters.loadedplaces)
            return this.$store.getters.loadedplaces
        },
    }
}
</script>
<style scoped>
.overlay{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
.title{
    position: absolute;
    top: 50%;
    left:50%;
    transform: translateX(-50%) translateY(-50%);
    text-align: center;
    vertical-align: middle;
    color: #fff;
}
.title h3{
    font-family: 'Luckiest Guy', cursive;
    font-size: 60px;
    letter-spacing: 12px;
    padding:20px;
}
</style>
