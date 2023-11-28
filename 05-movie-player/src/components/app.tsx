import { useMovies } from '../services/useMovies';
import Movies, { WithoutResult } from './movies';
import React from 'react';
export const userContext = React.createContext<string>('');
export default function App(){
    const { handleSubmit, valueThing,error} = useMovies();

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
            }} onSubmit={(event)=> {handleSubmit(event)}} >
            <input required name='peliculas' type="text" placeholder="Busca una pelicula" />
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
                {valueThing ? <Movies /> : <WithoutResult />}
            </userContext.Provider>
            </main>
         </div>
        </>
    )
}