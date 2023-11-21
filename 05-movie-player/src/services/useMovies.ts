import {useState} from 'react'

export function useMovies(){
    const [peliculitas, setPeliculas] = useState();


    return {peliculitas, setPeliculas};
}