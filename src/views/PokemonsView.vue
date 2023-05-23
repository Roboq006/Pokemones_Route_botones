<script setup>

//import axios from 'axios';
//import {ref} from 'vue';
import { RouterLink } from 'vue-router';
import {useGetData} from '@/composables/getData';

//const pokemonesarray = ref([]);

const {data, getData, loading, errorData} = useGetData();

// const getData = async () => {
//     try{
//         const {data} = await axios.get("https://pokeapi.co/api/v2/pokemon");
//         pokemonesarray.value=data.results

//     }catch(error){
//         console.log(error)
//     }
// }

getData('https://pokeapi.co/api/v2/pokemon');

</script>


<template>
    <h1>Pokemons prueba Router</h1>
    <p v-if="loading">Cargando informacion</p>
    <div class="alert alert-danger mt-2" v-if="errorData">{{ errorData }}</div>
    <div v-if="data">
        <ul class="list-group">
            <li v-for="pok in data.results" class="list-group-item">
                <router-link :to="`/pokemons/${pok.name}`">{{ pok.name }}</router-link>
            </li>  
        </ul>
        <div class="mt-2">
            <button 
                :disabled="!data.previous" class="btn btn-success me-2"
                @click="getData(data.previous)"
                >
                Previous
            </button>
            <button 
                :disabled="!data.next" class="btn btn-primary" 
                @click="getData(data.next)"
            >
                Next
            </button>
        </div>
    </div>
</template>