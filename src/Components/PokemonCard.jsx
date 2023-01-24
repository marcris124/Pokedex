import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import ImgNull from '../Components/images/nullPokemonImg.png'
import ImgAll from '../Components/images/typeAll.jpg'
import ImgWater from '../Components/images/typeWater.jpg'
import ImgFire from '../Components/images/typeFire.png'
import ImgGhost from '../Components/images/typeGhost.jpg'
import ImgIce from '../Components/images/typeIce.jpg'
import ImgPsychic from '../Components/images/typePsychic.png'
import ImgRock from '../Components/images/typeRock.jpg'




const PokemonCard = ({ url }) => {

  const [pokemon, setpokemon] = useState({})

  const navigate = useNavigate()

  const [isLoading, setisLoading] = useState(true)

  useEffect(() => {
    axios.get(url)
      .then(res => {
        setpokemon(res.data)
        //Pantalla de carga
        //setTimeout(() =>setisLoading(false), 10000)
        setisLoading(false)
      })
  }, [])

  const typeOne = pokemon?.types?.[1]?.type.name;
  const typeTwo = pokemon?.types?.[0]?.type.name;
  const changeColorCardPokemon = () => {
    if (typeTwo === "normal" || typeOne === "") {
      return "rgb(10 98 4)";
    } else if (typeTwo === "fighting" || typeOne === "") {
      return "#973F26";
    } else if (typeTwo === "poison" || typeOne === "") {
      return "#5B2D86";
    } else if (typeTwo === "ground" || typeOne === "") {
      return "#FFEB3B";
    } else if (typeTwo === "rock" || typeOne === "") {
      return "#46180B";
    } else if (typeTwo === "bug" || typeOne === "") {
      return "rgb(159 191 32)";
    } else if (typeTwo === "ghost" || typeOne === "") {
      return "rgb(61 43 104)";
    } else if (typeTwo === "fire" || typeOne === "") {
      return "rgb(253 0 47 / 94%)";
    } else if (typeTwo === "water" || typeOne === "") {
      return "rgb(0 98 245)";
    } else if (typeTwo === "grass" || typeOne === "") {
      return "rgb(84 255 89 / 78%)";
    } else if (typeTwo === "electric" || typeOne === "") {
      return "#E2E02D";
    } else if (typeTwo === "ice" || typeOne === "") {
      return "#86D2F4";
    } else if (typeTwo === "dragon" || typeOne === "") {
      return "rgb(151 39 253 / 92%)";
    } else if (typeTwo === "dark" || typeOne === "") {
      return "rgb(64 0 167)";
    } else if (typeTwo === "fairy" || typeOne === "") {
      return "rgb(255 130 199)";
    } else if (typeTwo === "psychic" || typeOne === "") {
      return "rgb(177 64 247)";
    } else if (typeTwo === "steel" || typeOne === "") {
      return "rgb(68 78 80)";
    } else {
      return "#CEB8D7";
    }
  };
  const changeBackgroundCardPokemon = () => {
    if (typeTwo === "normal" || typeOne === "") {
      return ImgAll;
    } else if (typeTwo === "fighting" || typeOne === "") {
      return ImgAll;
    } else if (typeTwo === "poison" || typeOne === "") {
      return ImgPsychic;
    } else if (typeTwo === "ground" || typeOne === "") {
      return ImgRock;
    } else if (typeTwo === "rock" || typeOne === "") {
      return ImgRock;
    } else if (typeTwo === "bug" || typeOne === "") {
      return ImgAll;
    } else if (typeTwo === "ghost" || typeOne === "") {
      return ImgGhost;
    } else if (typeTwo === "fire" || typeOne === "") {
      return ImgFire;
    } else if (typeTwo === "water" || typeOne === "") {
      return ImgWater;
    } else if (typeTwo === "grass" || typeOne === "") {
      return ImgAll;
    } else if (typeTwo === "electric" || typeOne === "") {
      return ImgPsychic;
    } else if (typeTwo === "ice" || typeOne === "") {
      return ImgIce;
    } else if (typeTwo === "dragon" || typeOne === "") {
      return ImgAll;
    } else if (typeTwo === "dark" || typeOne === "") {
      return ImgGhost;
    } else if (typeTwo === "fairy" || typeOne === "") {
      return ImgRock;
    } else if (typeTwo === "psychic" || typeOne === "") {
      return ImgPsychic;
    } else if (typeTwo === "steel" || typeOne === "") {
      return ImgRock;
    } else {
      return ImgAll;
    }
  };


  const imagePokemon = pokemon.sprites?.other.home.front_default;


  return (
    <div
      className='pokemon-card'
      style={{ backgroundImage: `url(${changeBackgroundCardPokemon()})` }}
      onClick={() => navigate(`/Pokemons/${pokemon.id}`)}>

      {
        isLoading ? (
          <div className='screen'><img src="https://i.gifer.com/origin/06/068c8f36ce4e0216bcc86ccc2e2401a0.gif" alt="" /></div>
        ) : (
          <>


            <img src={imagePokemon ? imagePokemon : ImgNull} alt="" />
            <div className='info-card' style={{ background: changeColorCardPokemon() }}>
              <p><b>Nº: </b> {pokemon.id} </p>
              <h2>{pokemon.name} </h2>
              <h3><b>type:</b> {pokemon.types?.[0].type.name} </h3>
            </div>
          </>
        )
      }



    </div>
  );
};

export default PokemonCard;