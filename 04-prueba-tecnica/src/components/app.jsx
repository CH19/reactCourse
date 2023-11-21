import Cats from "./cats"
// Creamos el componente app donde estara toda nuestra aplicacion 
export default function App(){
    return (
        <>
        <h1>Prueba tecnica</h1>
            <ul>
                <li>Cosas por hacer</li>
            </ul>
            <h1>App de gatitos</h1>
            <Cats />
            <Cats />
            <Cats /> 
        </>
    )
}