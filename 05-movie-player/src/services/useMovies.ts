import {useState} from 'react'
import peliculas from '../components/movies.json'
import { Search } from '../types/type';
export function useMovies(){
    type errorType = string | null;
    const [peliculitas, setPeliculas] = useState();
    const [valueThing, setValueThing] = useState('Buscador de peliculas');
    const [error, setError] = useState<errorType>(null);
    const newPeliculas = peliculas.Search.map((peliculas: Search) => ({
        Title:  peliculas.Title,
    Year:   peliculas.Year,
    imdbID: peliculas.imdbID,
    Type:   peliculas.Type,
    Poster: peliculas.Poster,
    }))

    function handleSubmit(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault();
        // const inputEl = inputRef.current;

        // const valueInput = inputEl.value;

        // otra forma de obetener datos de un input con solo js nativo 
        console.log(event);
        const  formData = new window.FormData(event.target);
        const [...datos] = formData.values()
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
        setValueThing(String(data))
        // setValueThing(inputValue);
    }

    return {peliculitas, setPeliculas, newPeliculas, handleSubmit,
            valueThing, setValueThing, error, setError};
}