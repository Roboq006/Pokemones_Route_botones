
import axios from 'axios';
import {ref} from "vue";

export const useGetData = ()=>{
    const data = ref(null); // es null porque no sabemos que dato  va a recibir
    const errorData = ref(null);
    const loading = ref(true)
    const getData = async (url) => {
        loading.value=true
        try{
            const res = await axios.get(url);//axios devuelve toda la imformaacion de la API a travez de data
            data.value = res.data;
            //pokemonesarray.value=data.results //solo voy a retornar la respuesta, por eso no la uso
    
        }catch(error){
            errorData.value = 'Error de servidor'
            //console.log(error);
        }finally {
            loading.value=false;
        }

    };
    return {
        getData,
        data,
        loading,
        errorData,

    }    

}