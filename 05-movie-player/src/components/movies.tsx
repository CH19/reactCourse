import withotResult from './moviesResultnt.json';
import { useEffect, useState } from 'react';
import { useMovies } from '../services/useMovies';
interface Props {
    busqueda: string
}
export default function Movies(props: Props){
    const { responseMovies, setResponseMovies} = useMovies();
    const { busqueda } = props;
    const [pelicula, setPelicula] = useState(busqueda);
    useEffect(()=>{
        
        console.log(pelicula);
        fetch(`https://www.omdbapi.com/?apikey=a3774aae&s=${pelicula}`).then(res => res.json()).then(json => setResponseMovies(json))
    }, [pelicula]);
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