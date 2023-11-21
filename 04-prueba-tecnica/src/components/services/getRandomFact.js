import { useEffect, useState } from "react";
import { randomFactsApi } from "../apis";
export async function getRandomFacT(){
    try{
        const rest =  await fetch(randomFactsApi);
        const json = await rest.json();
        return json.fact
    }catch(error){
        console.error(new Error(error));
    }
}

export async function getCatImage(){
    const apiKey = 'live_4mb6qH6cM16uR4kqK8cOPFg0SSfIqdmR1rsqAHBpFVp9EFaY6Vxcxyk3ZMkOtyNl';
const catApiImages = 'https://api.thecatapi.com/v1/images/search/'
    try{
        const images = await fetch(catApiImages, {
            headers: {
                'x-api-key': apiKey,
                'Content-Type': 'application/json',
            }
        });
        const imagesJson = await images.json();
        return imagesJson[0].url
    }catch(error){
        console.error(error);
    }
}
export function useFact(){
    const [newFact, setFact] = useState('Fact default');
    useEffect(()=>{
        getRandomFacT().then(res => setFact(res)).catch(error => console.error(new Error(error)));
    }, []);
    return {newact}
}