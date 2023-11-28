import withotResult from './moviesResultnt.json';
import { useEffect, useState, useContext, useMemo, useCallback } from 'react';
import { useMovies } from '../services/useMovies';
import {userContext} from './app';
export default function Movies(){
    const { responseMovies, setResponseMovies} = useMovies();
    const dataContext = useContext(userContext);
    const [pelicula, setPelicula] = useState(dataContext);
    useMemo(()=>{
        if(dataContext == pelicula) return;
        setPelicula(dataContext)
        fetch(`https://www.omdbapi.com/?apikey=a3774aae&s=${dataContext}`).then(res => res.json()).then(json => setResponseMovies(json))
    }, [dataContext]);
     return (
        <>
        <h5>{pelicula}</h5>
        <ul className='movies'>
                {
                responseMovies.Search.map(element => {
                    return (<>
                    <li>
                            <img src={element.Poster} alt={`${element.Title} Poster`} />
                            <h3>{element.Title}</h3>
                            <p>Year {element.Year}</p>
                        </li>
                    </>)
                })
            }

        </ul>
        </>
    )
}
export function WithoutResult(){
    return (
        <>
        <p>{withotResult.Error}</p>
        </> 
    )
}