<script setup>
// import axios from 'axios';
// import {ref} from 'vue';
import { useRoute,useRouter } from 'vue-router';
import {useGetData} from '@/composables/getData';

const route = useRoute();
const router = useRouter();

const {data, getData, loading, errorData} = useGetData();

//const poke = ref({}); // es un objeto (la consola me lo indica)

const back = ()=>{
    router.push('/pokemons');

}


// const getData = async ()=>{

//     try{
//         const {data} = await axios.get(`https://pokeapi.co/api/v2/pokemon/${route.params.nomPokemon}`)
//         console.log(data);
//         poke.value=data;
//     }
//     catch (error){
//         console.log(error);
//         poke.value= null;
//     }


// }

getData(`https://pokeapi.co/api/v2/pokemon/${route.params.nomPokemon}`);


</script>


<template>
    <div class="alert alert-danger mt-2" v-if="errorData">{{ errorData }}</div>
    <p v-if="loading">Cargando informacion</p>
    <div v-if ="data">
        <img :src="data.sprites?.front_default" alt=""/>
        <h1>Nombre de mi Pokemon: {{ $route.params.nomPokemon }}</h1>
        
    </div>
    <h1 v-else> No existe el Pokemon</h1>
    <button @click="back" class="btn btn-outline-primary">Volver</button>

</template>