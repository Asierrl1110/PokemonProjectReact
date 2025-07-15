import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import PokemonsPage from './pages/PokemonsPage'
import PokemonPage from './pages/PokemonPage'
import ErrorPage from './pages/ErrorPage'
import PokemonDetails2 from './components/PokemonDetails2';
import DetailsWrapper from './hoc/DetailsWrapper';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>}></Route>
      <Route path="/pokemons" element={<PokemonsPage/>}></Route>
      <Route path="/pokemon/:id" element={<PokemonPage/>}></Route>

      <Route path="*" element={<ErrorPage/>}></Route>
    </Routes>
  )
}

export default App
