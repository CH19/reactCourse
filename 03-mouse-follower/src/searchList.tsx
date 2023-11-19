import { useEffect, useState } from "react"
export default function SearchList(){
    const [search, setSearch] = useState('');
    const listOriginal = ['manzana', 'pera', 'naranja', 'tomate', 'patilla', 'naranja2'];
    const [list, setList] = useState(listOriginal);

    useEffect(()=>{
        if(listOriginal.some((element)=> element.toLowerCase() == search.toLowerCase())) return setList([search])
        if(search.length < 1) return setList(listOriginal);
        return setList(['Elemento no encontrado prueba otra vez']);
    }, [search]);
    const searchWord = ()=>{
        setSearch(document.getElementById('inpList')!.value);
    }
    return (
        <>
            <input id="inpList" type="text"    />
            <button onClick={searchWord}>Search</button>
            <ul>
                {
                    list.map(e => <li>{e}</li>)
                }
            </ul>
        </>
    )
}