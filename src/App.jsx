import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import PokemonsPage from './pages/PokemonsPage'
import PokemonPage from './pages/PokemonPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>}></Route>
      <Route path="/pokemons" element={<PokemonsPage/>}></Route>
      <Route path="/pokemon/:id" element={<PokemonPage/>}></Route>
    </Routes>
  )
}

export default App
