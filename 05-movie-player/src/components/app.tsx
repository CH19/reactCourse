import { useMovies } from '../services/useMovies';
import Movies from './movies';
import React from 'react';
const userContext = React.createContext<string | null>(null);
export default function App(){
    const { handleSubmit, valueThing,error, peliculitas} = useMovies();

// probando el useRef para hacer una referencia del dom 
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
            display: 'flex',
            position: 'relative'
            }} onSubmit={(event)=> {handleSubmit(event); console.log(peliculitas.current);}} >
            <input name='peliculas' type="text" placeholder="Busca una pelicula" />
            {error && <h6 style={{
            position: 'absolute',
            top: '20px',
            color: 'crimson'
        }}>{error}</h6>}
        <input type="submit" value={'send'} />
        </form>
        </header>
        <main>
            <userContext.Provider value={valueThing}>
                            <Movies busqueda={valueThing} />
            </userContext.Provider>
            </main>
         </div>
        </>
    )
}