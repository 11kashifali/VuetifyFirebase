import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'
import * as firebase from 'firebase'

Vue.use(Vuex,axios,VueAxios)

export const store  =  new Vuex.Store({
    state:{
        loadedPlaces:null,
        user:null,
        error:null,
        loading:false,
    },
    mutations:{
        setplaces(state,payload){
            state.loadedPlaces = payload
        },
        pushplace(state,payload){
            state.loadedPlaces.push(payload)
        },
        pushuser(state,payload){
            state.user = payload
        },
        seterror(state,payload){
            state.error = payload
        },
        setloading(state,payload){
            state.loading = payload
        }
    },
    actions:{
        loadplaces ({commit}){
            axios.get('https://api-tourismus.firebaseio.com/places.json')
            .then((res) => {
                let places  = res.data
                let ourplaces = {}
                for (const place in places) {
                    ourplaces = [
                        ...ourplaces,
                        {
                            id:place,
                            title:places[place].title,
                            src:places[place].src,
                            description:places[place].description,
                            views:places[place].views,
                            goings:places[place].goings
                        }
                    ]
                }
                console.log(ourplaces)
                commit('setplaces',ourplaces)
            })
            .catch()
        },
        pushplace ({commit},payload) {
            console.log(payload)
            const place = {
                title:payload.title,
                src:payload.imageurl,
                description:payload.description,
                views:0,
                goings:0
            }
            axios.post('https://api-tourismus.firebaseio.com/places.json',place)
            commit('pushplace',place)
          },
          pushuser({commit},payload){
              console.log(payload)
              firebase.auth().createUserAndRetrieveDataWithEmailAndPassword(payload.email,payload.password).then(
                  user => {
                      commit('pushuser',{id:user.user.uid,registerplace:[]})
                  }
              )
          },
          signin({commit},payload){
              commit('setloading',true)
              firebase.auth().signInWithEmailAndPassword(payload.email,payload.password).then(
                    user => {
                        commit('setloading',false)
                        commit('pushuser',{id:user.user.id,registerplace:[]})
                  }
              ).catch(
                  error => {
                      commit('setloading',false)
                      commit('seterror',{ message: error.message, type:'auth' })
                  }
              )
          }
    },
    getters:{
        featuredplaces:(state) => {
            return state.loadedPlaces.sort((a,b)=> {
                return - a.views + b.views;
            })
        },
        loadedplaces:(state) => {
            return state.loadedPlaces !== null ? state.loadedPlaces.slice(0,2):null;
        },
        loadplace:(state) =>{
            return (placeid) =>{
                return state.loadedPlaces.find((place)=>{
                    return place.id === placeid;
                })
            }
        },
        authuser:(state) =>{
            return state.user;
        },
        errors:(state) => {
            return state.error
        },
        loading:(state) => {
            return state.loading
        }
    }
});