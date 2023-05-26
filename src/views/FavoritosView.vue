<script setup>
import {useFavoritoStore} from '@/store/favorito.js';
import { storeToRefs } from 'pinia';
import { RouterLink } from 'vue-router'; //Para que el usuario pinchando btn vaya a un path especifico

const useFavoritos = useFavoritoStore(); //metodo

const {favoritos}= storeToRefs(useFavoritos) //Destructuracion de una referencia reactiva

const {remove} = useFavoritos
</script>


<template>
    <h1>Favoritos</h1>
    <p v-if="favoritos.length === 0"> Sin Favoritos</p>
    <ul class="list-group" v-else>
        <li class="list-group-item" v-for="poke in favoritos" :key="poke.id">
            <div>
                {{ poke.name }}

            </div>
            <div>
                <router-link class="btn btn-sn btn-primary me-2" :to="`/pokemons/${poke.name}`">
                    Mas Informacion</router-link>
                <button class="btn btn-sn btn-danger" @click="remove(poke.id)">Eliminar</button>
            </div>
        
        </li>
    </ul>


</template>