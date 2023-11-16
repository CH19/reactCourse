import { useState } from 'react'
import './App.css';
import Hello from './hello';
import Twitter from './twitter';
import { data } from './types';
function App() {
  const users: data[] = [
    {
      username: 'CH19',
      name: 'Christian La Cruz',
    },
    {
      username: 'Avilapro',
      name: 'Eduardo Mejias',
    },
    {
      username: 'Midudev',
      name: 'Miguel34',
    },
    {
      username: 'Pedro',
      name: 'Pedro Miguel'
    }
  ]
  const [newName, setNewName] = useState('CH19');


  function changeNameValue(){
    setNewName(document.querySelector<HTMLInputElement>('#holi')?.value)
  }
  return (
    <>
    <div className="things">
    <input type="text" id='holi' />
    <button onClick={()=> changeNameValue()}>Select Here</button>

    </div>
        <Hello name='Christian' message="Hola Bro"></Hello>
    <div style={{display: 'flex', gap: '8px', flexFlow: 'column nowrap'}}>
      {
        users.map(user => {
          return (
            <>
            <Twitter key={user.name} username={user.username} name={user.name} initialIsFollowing={user.initialIsFollowing}>
            </Twitter>
            
            </>
          )
        })
      }
    </div>
    </>
  )
}

export default App
