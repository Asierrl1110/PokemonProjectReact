import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import PokemonsPage from './pages/PokemonsPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>}></Route>
      <Route path="/pokemons" element={<PokemonsPage/>}></Route> 
    </Routes>
  )
}

export default App
