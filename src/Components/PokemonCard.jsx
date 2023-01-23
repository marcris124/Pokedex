import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import ImgNull from '../Components/images/nullPokemonImg.png'

const PokemonCard = ({url}) => {

  const [pokemon, setpokemon] = useState({})

  const navigate = useNavigate()

  useEffect(() => {
    axios.get( url )
    .then(res => setpokemon(res.data))
  },[])

  const types = pokemon.types?.[0].type.name




  const changeColorCardPokemon =()=>{
    if (types ==='normal') {
        return '#735159'
    }else if (types === 'fighting') {
        return '#973f26'
    }
}

  console.log(pokemon);

const imagePokemon = pokemon.sprites?.other.home.front_default;


  return (
    <div 
    className='pokemon-card' 
    onClick={() => navigate(`/Pokemons/${pokemon.id}`)}>
    
       
      <img src={imagePokemon ? imagePokemon : ImgNull} alt="" />
      <div className='info-card'>
       <p><b>Nº: </b> {pokemon.id} </p>
        <h2>{pokemon.name} </h2>
        <h3><b>type:</b> {pokemon.types?.[0].type.name} </h3>
      </div>

    </div>
  );
};

export default PokemonCard;