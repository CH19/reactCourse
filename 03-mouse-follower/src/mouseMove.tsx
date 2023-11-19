import { useState, useEffect } from "react";
import './index.css'
import Ball from "./ball";
export default function MouseMove(){
    const [active, setActive] = useState(true);
    const [mousePosition, setMousePosition] = useState({x: 0, y: 0})
    const [points, setPoints] = useState(3);
    const [newBalls, setBalls] = useState(true);
    
    useEffect(()=>{
        const handleMove = (event: Event)=>{
            const {clientX, clientY} = event
            setMousePosition({x: clientX, y: clientY});
        console.log(clientX, clientY);
        }
        if(active){
            window.addEventListener('pointermove',handleMove)
        }
        // el return solo se debe usar cuando de va a hacer un clean de la funcion 
        return ()=>{
            console.log('Clean useEffect');
            setMousePosition({x: 0, y: 0});
            window.removeEventListener('pointermove',handleMove);
        }
        }, [active]) ; 
        useEffect(()=>{
            // document.body.classList.toggle('itsMouse');
            console.log('La vida');
            return ()=> {

            }
        }, [active]);
        const sumPoints = ()=>{
            let newPoints = points;
            return newPoints+ 1;
        }
    return (
        <>
        <div className="Bolita" style={{
            position: 'absolute',
            backgroundColor: '#020202',
            border: '1px solid "070707',
            opacity: '.8',
            pointerEvents: 'none',
            left: `${mousePosition.x}px`,
            top: `${mousePosition.y}px`,
            width: `${25 + (points * 2)}px`,
            height: `${25 + (points * 2)}px`,
            transform: `translate(${mousePosition.x}, ${mousePosition.y})`,
            borderRadius: 20,
            display: `${active ? 'block' : 'none'}`
        }}></div>
        <h1>Mouse Follower <br /> Proyecto {points}</h1>
        <button className="itsmouse" onClick={()=> setActive(!active)}>{active ? 'Activado' : 'Desactivado'}</button>
        {newBalls && (
            <>
            <div onClick={()=>{
                const newPoints = sumPoints();
                setPoints(newPoints);
                setBalls(false);
                setTimeout(()=>{
                    setBalls(true);
                }, 150)
}}>
                <Ball />
            </div>
            </>
        )}
        </>
    )
}