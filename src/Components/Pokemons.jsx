import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import PokemonCard from './PokemonCard';
import { Link } from 'react-router-dom';

import pokemonLogo from '../Components/images/pokemonLogo3.png'
import pokedexLogo from '../Components/images/pokedexLogo.png'

const Pokemons = () => {

  const pokeName = useSelector(state => state.pokeName)

  const [pokemonsId, setpokemonsId] = useState([])
  const [inputSearch,setinputSearch] =useState("")
  const [poketype,setpoketype] = useState([])
  
  const navigate = useNavigate()

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon/")
    .then(res => setpokemonsId(res.data.results));

    axios.get("https://pokeapi.co/api/v2/type/")/*9:30 ver clase para entender*/
    .then(res => setpoketype(res.data.results))
  },[])

  const search = () =>{
    navigate(`/Pokemons/${inputSearch}`)
  }

  const filterTypes = e =>{
    axios.get(e.target.value)
    .then(res => setpokemonsId(res.data.pokemon))
  }

  return (
    <div className='container'>
      <div className='input-pokemons'>
        <div className='type-search'>
  
        <Link to={"/"}><img src={pokemonLogo} alt="" /></Link>  
        
  
      <div className='search-input'>
        <img src="data:image/png;base64,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" alt="" />
      
          
          <input
            placeholder='search for a pokemon by name or id' 
            type="text" 
            value={inputSearch}
            onChange={e => setinputSearch(e.target.value)}
           />
          <button onClick={search}><i className="fa-solid fa-magnifying-glass"></i></button>
        
      


      
      </div>
    </div>
 </div>
 <div className='welcome-container'>
  <div className='welcome-type'>
  <h1>welcome<span> {pokeName} </span> here you can find your favorite pokemon </h1>
      <div>
        <h3>Types</h3>
        <select onChange={filterTypes} name="" id="" >
          {poketype.map(types => (
            <option key={types.url} value={types.url}>{types.name}</option>
          ))}
        </select>
      </div>
    </div>
</div>

    <div className='container-pokemons'>
      {
        pokemonsId.map(pokemon =>(
         <PokemonCard 
            url= {pokemon.url? pokemon.url : pokemon.pokemon.url } 
            key={pokemon.url ? pokemon.url : pokemon.pokemon.url } 
            />
        ))
      }
      
      </div>
    </div>
  );
};

export default Pokemons;