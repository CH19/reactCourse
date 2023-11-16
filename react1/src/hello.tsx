interface user {
    message: string,
    name: string
}
export default function Hello(us: user){
    const {message, name} = us;
    return (
        <>
        <h1>{message}</h1>
        <p>Hola mi nombre es {name}</p>        
        </>
    )
}