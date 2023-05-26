import { defineStore } from "pinia";
import {ref} from 'vue';

//trabajo cob el composition API
// identificador no coincida con otro almacen como p.e. 'counter'
export const useFavoritoStore = defineStore('favoritos', ()=>{

    const favoritos = ref([]);//array objetos

    //Metodo para actualizar "localStorage.getItem" la pagina de los pokemones favoritos sin que la informacion se pierda:
    if (localStorage.getItem('favoritos')){ //getItem, queremos sacar la informacion
        favoritos.value = JSON.parse(localStorage.getItem('favoritos')) //transformamos de texto a JavaScript
    }


    const add = (poke)=>{
        favoritos.value.push(poke);
        localStorage.setItem('favoritos', JSON.stringify(favoritos.value))//para local storege transformamos el array en formato txto con JSON.stringify
    };

    const remove = (id) => {
        favoritos.value = favoritos.value.filter(item => item.id !== id);//se itera por cada uno de los items
        localStorage.setItem('favoritos', JSON.stringify(favoritos.value))//Para que cuando eliminemos el pokemon se actualice la pagina
    };

    const findPoke = name => favoritos.value.find(item => item.name === name); //Si dentro de nuestro array existe un pokemon lo devolvemos
    


    return{
        favoritos,
        add,
        remove,
        findPoke,
    };

});

