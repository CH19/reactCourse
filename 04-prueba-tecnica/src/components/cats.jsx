import { useEffect, useState } from "react"
import { getRandomFacT, getCatImage } from "./services/getRandomFact";
import'./catStyle.css'
export default function Cats(){
    const [fact, setFact] = useState('loream cat its here');
    // const newFac
    const [imageCat, setImageCat] = useState('image undefined');
    // hacemos una consulta para el requirimiento uno de la consulta con useEffect

    useEffect(()=>{
        getRandomFacT().then(res => setFact(res)).catch(error => console.error(error));
        getCatImage().then(img => setImageCat(img));
    }, []);
    // funcion para generar frases random cada cierto tiempo
    // creando nuestro primer custom hooks para retornar la imagen 
    const refreshFact = () => {
        getRandomFacT().then(res => setFact(res)).catch(error => console.error(error));
   
    }
    return (
        <>
        <main>
        <h1>App de gatitos</h1>
        <section>
        <figure>
        {imageCat != 'image undefined' ? <img className="images" src={imageCat} alt={`This image it's from *${fact.split(' ', 3).join(' ')}*`}></img> : <p>Loading...</p>}
        </figure>   
        {fact && <p>{fact}</p>}
        </section>
        <button style={{cursor: 'pointer', border: 'none', background: 'crimson', color: '#FFF'}} onClick={()=> refreshFact()}>Refrescar frase</button>
        </main>
        </>
    )
}