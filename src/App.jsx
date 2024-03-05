import "./index.css";
import './App.css'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Pokemons from './Components/Pokemons'
import PokemonsDetail from './Components/PokemonsDetail'
import Pokedex from './Components/Pokedex'
import ProtectedRoutes from './Components/protectedRoutes'

function App() {


  return (
    <div className="App ">
    <HashRouter>
      <Routes>
      
        <Route path='/' element={<Pokedex/>}/>
  
        <Route element={<ProtectedRoutes/>} />

        <Route path='/Pokemons' element={<Pokemons/>}/>
        <Route path='/Pokemons/:id' element={<PokemonsDetail/>}/>
      </Routes>


    </HashRouter>
    </div>
  )
}

export default App
