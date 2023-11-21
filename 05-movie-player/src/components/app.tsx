import peliculas from './movies.json'
import { WithoutResult } from './movies';
import { Search } from '../types/type';
import { useMovies } from '../services/useMovies';
import Movies from './movies';
import {useRef, useState} from 'react';

export default function App(){
    const hasMovies = peliculas.Search.length > 0;
    const {peliculitas: Search} = useMovies();
// probando el useRef para hacer una referencia del dom 
const inputRef = useRef();
const [valueThing, setValueThing] = useState('Buscador de peliculas');
    const newPeliculas = peliculas.Search.map((peliculas: Search) => ({
        Title:  peliculas.Title,
    Year:   peliculas.Year,
    imdbID: peliculas.imdbID,
    Type:   peliculas.Type,
    Poster: peliculas.Poster,
    }))

    function handleSubmit(event: EventTarget){
        // const inputEl = inputRef.current;
        // const valueInput = inputEl.value;

        // otra forma de obetener datos de un input con solo js nativo 
        console.log(event);
        alert()
        const formdata = new window.FormData(event.target);
        const inputValue  = formdata.get('peliculas');
        setValueThing(inputValue);
        alert(inputValue)
    }
    return (
        <>
         <div>
           <header style={{
            width: '80vw',
            height: 'fit-content',
            display: 'flex',
            flexFlow: 'column nowrap',
            placeItems: 'center',
}}>
           <h1>{valueThing}</h1>
           <form style={{
            display: 'flex'
           }} onSubmit={()=> handleSubmit()}>
            <input name='peliculas' ref={inputRef} type="text" placeholder="Busca una pelicula" />
           <input  type="submit" value={'Search'} />
           </form>
           </header>
           <main>
            {hasMovies ? <Movies movies={newPeliculas} /> : <WithoutResult />}
            </main>
         </div>
        </>
    )
}