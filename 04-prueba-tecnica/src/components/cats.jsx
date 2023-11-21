import { getRandomFacT, useFact } from "./services/getRandomFact";
import'./catStyle.css'
export default function Cats(){
    // hacemos una consulta para el requirimiento uno de la consulta con useEffect
    // funcion para generar frases random cada cierto tiempo
    // creando nuestro primer custom hooks para retornar la imagen 
    
    // colocamos toda la logica e los anteriores comentarios creando el servicio getRandomCat y creamos el hook personalizado useFact para 
    // la finalizacion de las tareas 
    const {newFact, setFact, imageCat} = useFact();
    const refreshFact = () => {
        getRandomFacT().then(res => setFact(res)).catch(error => console.error(error));
    }
    return (
        <>
        <main>
        <section>
        <figure>
        {imageCat != 'image undefined' ? <img className="images" src={imageCat} alt={`This image it's from *${newFact.split(' ', 3).join(' ')}*`}></img> : <p>Loading...</p>}
        </figure>   
        {newFact && <p>{newFact}</p>}
        </section>
        <button style={{cursor: 'pointer', border: 'none', background: 'crimson', color: '#FFF'}} onClick={()=> refreshFact()}>Refrescar frase</button>
        </main>
        </>
    )
}