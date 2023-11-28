import { useState, useRef} from 'react'
import peliculas from '../components/movies.json'
import { Search } from '../types/type';
export function useMovies(){
    type errorType = string | null;
    const peliculitas = useRef('')
    const [valueThing, setValueThing] = useState('Charlie');
    const [error, setError] = useState<errorType>(null);
    const newPeliculas = peliculas.Search.map((peliculas: Search) => ({
        Title:  peliculas.Title,
        Year:   peliculas.Year,
        imdbID: peliculas.imdbID,
        Type:   peliculas.Type,
        Poster: peliculas.Poster,
    }))
    const [responseMovies, setResponseMovies] = useState(peliculas);
    // funcion para obtener la data de las movies y realizar la busqueda en la api de las peliculas 
    const getMovies  = ()=> {
        if(peliculitas.current && peliculitas.current.length > 2){
            console.log(peliculitas);
            fetch(`https://www.omdbapi.com/?apikey=a3774aae&s=${peliculitas}`).then(res => res.json()).then(json => setResponseMovies(json))
        }else{

        }
    }
function handleSubmit(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault();
        // const inputEl = inputRef.current;

        // const valueInput = inputEl.value;

        // otra forma de obetener datos de un input con solo js nativo 
        console.log(event);
        const form = event.target as HTMLFormElement
        const  formData = new window.FormData(form);
        const [...datos] = formData.values();
        const data = String(datos[0]);

        if(data == ''){
         setError('pelicula o encontrada');
            return  
        }else if(data.length < 3){
            setError('Error insuficientes caracteres');
            return 
        }else if(data.match(/^\d+$/)){
            setError('no se aceptan decimales')
            return
        }else{
            setError(null )
        }
        peliculitas.current = String(data);
        setValueThing(String(data));
        // setValueThing(inputValue);
    }

    return {peliculitas, newPeliculas, handleSubmit,
            valueThing, setValueThing, error, setError, responseMovies, getMovies, setResponseMovies};
}