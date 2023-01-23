import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PokemonCard = ({url}) => {

  const [pokemon, setpokemon] = useState({})

  const navigate = useNavigate()

  useEffect(() => {
    axios.get( url )
    .then(res => setpokemon(res.data))
  },[])


  return (
    <div 
    className='pokemon-card' 
    onClick={() => navigate(`/Pokemons/${pokemon.id}`)}>
    
       
      <img src={pokemon.sprites?.other.home.front_default} alt="" />
      <div className='info-card'>
       <p><b>Nº: </b> {pokemon.id} </p>
        <h2>{pokemon.name} </h2>
        <h3><b>type:</b> {pokemon.types?.[0].type.name} </h3>
      </div>

    </div>
  );
};

export default PokemonCard;