import withotResult from './moviesResultnt.json'
import { Search } from '../types/type'

interface MoviesProps{
    movies: Search[],
}
export default function Movies(props: MoviesProps){
    const { movies } = props
     return (
        <>

        <ul style={{
            display: 'grid',
            gridTemplateColumns:'1fr 1fr',
            placeContent: 'center'
}}>
                {
                movies.map(element => {
                    return (<>
                    <li style={{
                        border: '1px solid white'
                    }}>
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