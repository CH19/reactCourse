import { useState } from 'react'
import { Square,clearGame } from './types';
import './App.css'

function App() {
  // Cambiamos esta linea para usar useState y que el board sea reactivo 
  // const board = Array(9).fill(null);
  const [board, setBoard] = useState(()=>{
    console.log('iniciando desde storage');
    const boardFromStorage = window.localStorage.getItem('board');
    return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill('');
  });
  // una variable booleana que decidira el turno actual 
  const [turn, setTurn] = useState(()=>{
    const turnFormStorage = window.localStorage.getItem('turn');
    return turnFormStorage ? JSON.parse(turnFormStorage) : false;
  });
  // variable para decidir el ganador 
  const [winner, setWinner] = useState(false);
  // algoritmos de combos disponibles de ganadores 
  const combosWinw = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ]
  const turnos = {
    X: 'X',
    O: 'O'
  };
  const empateCheck = (newBoard: any[]) => {
    return newBoard.every(square => square != '');
  }
  const searchWinner = (boardTrack: any[])=> {
    // buscar ganador en el algortimo de todas las combinaciones posibles 
    for(let combo of combosWinw){
      let [a, b, c] = combo;
      console.log(boardTrack[a]);
      if(
       ( boardTrack[a] != false && boardTrack[a] == boardTrack[b] && boardTrack[a] == boardTrack[c]) || (empateCheck(boardTrack))
      ){
        return true;
      }
    }
    return false;
    
  }

  const updatedSquare= (index: number)=>{
    if(board[index] != '' || winner) return;

    setTurn(!turn);
    const newBoard = [...board];
    const newTurn =  turn ? turnos.X :turnos.O;
    newBoard[index] = newTurn
    setBoard(newBoard); 
    window.localStorage.setItem('board', JSON.stringify(newBoard));
    window.localStorage.setItem('turn', String(turn));
    const newWinner = searchWinner(newBoard)
    if(newWinner){ setWinner(()=>{
      return newWinner
    }
    );
  }else if(empateCheck(newBoard)){
    setWinner(false);
  }
  }

  // Componentes 
  // Componente Square para ordenar la aplicacion 
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
  const ClearGame = (mensaje: clearGame)=>{
    const {message} = mensaje;
    const clicekd = ()=>{
      const newBoard = [...board];
      setBoard(newBoard.fill(''));
      setWinner(false);
      // se limpia la informacion del localStorage para la recarga 
      window.localStorage.setItem('board', JSON.stringify(newBoard.fill('')));
    }
    return (
      <>
        <button onClick={clicekd}>{message}</button>
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
    <ClearGame message='Iniciar Juego' />
    </section>
    {
      winner == true && (
        <section className='winner'>
          <div className="text">
            <h2>
              {
                empateCheck(board)
                ? 'Empate'
                : 'Ganó'
              }
            </h2>
            <header className="win">
              {!empateCheck(board) ? <Square>{!turn ? turnos.X : turnos.O}</Square> : <Square>=</Square>}
            </header>

            <footer>
              <ClearGame message='Empezar de Nuevo' />
            </footer>
          </div>
        </section>
      )
    }
    </main>
    </>
  )
}

export default App

