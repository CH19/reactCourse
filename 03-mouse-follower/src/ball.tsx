import {useEffect, useState} from 'react';
export default function ball(){
    const [positionX, setPositionX] = useState(Math.floor(Math.random() * (window.innerWidth - 100 + 1)) + 100);
    const [positionY, setPositionY] = useState(Math.floor(Math.random() * (window.innerHeight - 100 + 1)) + 100);
    const [clicked, setClicked] = useState(false);
    let movent = 0;
    const actionMove = ()=>{
        movent = setInterval(()=>{
            setPositionY(positionY + .5);
            setPositionX(positionX + .5);
        }, 1000);
    }
    useEffect(()=>{
        actionMove();
    })
    return (
        <>
        <div onClick={()=> clearInterval(movent)} style={
        {
            width: 15,
            height: 15,
            background: 'red',
            borderRadius: 20,
            position: "absolute",
            left: `${positionX}px`,
            top: `${positionY}px`,
            cursor: 'pointer',
        }
    }
    
    >

    </div>
    <style
    dangerouslySetInnerHTML={{
      __html: "\n  div:focus{\n    background-color: orange\n  }\n"
    }}
  />
        </>
    )
}