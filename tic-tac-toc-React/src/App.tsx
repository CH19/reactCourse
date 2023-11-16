import { useState } from 'react'
import { Square,turns } from './types';
import './App.css'

function App() {
  // Cambiamos esta linea para usar useState y que el board sea reactivo 
  // const board = Array(9).fill(null);
  const [board, setBoard] = useState(Array(9).fill(''));
  // una variable booleana que decidira el turno actual 
  const [turn, setTurn] = useState(false);
  const turnos = {
    X: 'X',
    O: 'O'
  }

  const updatedSquare= (inde: number)=>{
    setTurn(!turn);
    const newTurn =  turn ? turnos.X :turnos.O;
    board[inde] = newTurn
    setBoard(board);
    
  }
  const Square = (sq: Square)=> {
    const {updatedBoard} = sq;
    const handleClick = ()=>{
      if(updatedBoard != undefined){
        updatedBoard();
      }else{
        console.error(new Error('No hay funcion a la que llamar'))
      }
    }
    return (
      
      <>
        <div onClick={handleClick} className={`square ${sq.isSelected ? 'is-selected' : ''}`}>
          {sq.children}
        </div>
      </>
    )
  }
  return (
    <>
    <main className='board'>
      <h1>Tic Tac Toc</h1>
      <section className="game">
      {
      board.map((b, index) => {
        return (
          <> 
            <Square updatedBoard={()=>{updatedSquare(index)}} key={index + 1}>
              {b}
            </Square>
          </>
        )
      })
    }
      </section>
    <section className='turn'>
    <Square isSelected={turn}>
      {turnos.X}
    </Square>
    <Square isSelected={!turn}>
      {turnos.O}
    </Square>
    </section>
    </main>
    </>
  )
}

export default App
