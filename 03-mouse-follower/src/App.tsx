import './App.css';
import {useState} from 'react'
import SearchList from './searchList';
import MouseMove from './mouseMove';
function App() {
 const [followMoude, setFollowMouse] = useState(false)
  return (
    <>
  <main>
    {followMoude && <MouseMove/>}
    <button onClick={()=> setFollowMouse(!followMoude)}>{!followMoude ? 'Activar Mouse' : 'Desactivar Mouse'}</button>
  </main>
  {/* <SearchList /> */}
    </>
  )
}

export default App
