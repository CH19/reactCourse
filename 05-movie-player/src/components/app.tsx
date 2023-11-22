import peliculas from './movies.json'
import { WithoutResult } from './movies';
import { useMovies } from '../services/useMovies';
import Movies from './movies';
import { useRef} from 'react';

export default function App(){
    const hasMovies = peliculas.Search.length > 0;
    const {newPeliculas, handleSubmit, valueThing, error} = useMovies();
// probando el useRef para hacer una referencia del dom 
    const inputRef = useRef();
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
           }} >
            <input onSubmit={(e)=> handleSubmit(e)} name='peliculas' ref={inputRef} type="text" placeholder="Busca una pelicula" />
           {error && <h6 style={{
            position: 'absolute',
            top: '20px',
            color: 'crimson'
           }}>{error}</h6>}
           <input type="submit" value={'send'} />
           </form>
           </header>
           <main>
            {hasMovies ? <Movies movies={newPeliculas} /> : <WithoutResult />}
            </main>
         </div>
        </>
    )
}