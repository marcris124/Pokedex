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
      return "linear-gradient(143deg,#00b143 30%, #52ff5d 40%, #ffcd00 80%)";
    } else if (typeTwo === "fighting" || typeOne === "") {
      return "  linear-gradient(146deg,#da1c1c 30%, #656565 50%, #2078d2 60%)";
    } else if (typeTwo === "poison" || typeOne === "") {
      return " linear-gradient(217deg,rgba(181,3,255,0.92) 30%, rgba(72,0,136,0.91) 60%)";
    } else if (typeTwo === "ground" || typeOne === "") {
      return " linear-gradient(217deg,rgba(190,122,0,0.92) 30%, rgba(146,70,50,0.91) 60%)";
    } else if (typeTwo === "rock" || typeOne === "") {
      return "linear-gradient(217deg,rgba(0,149,12,0.92) 30%, #4bff00 45%, rgba(139,139,139,0.91) 60%)";
    } else if (typeTwo === "bug" || typeOne === "") {
      return "linear-gradient(217deg,rgba(3,255,126,0.92) 30%, rgba(0,136,49,0.91) 60%)";
    } else if (typeTwo === "ghost" || typeOne === "") {
      return "linear-gradient(217deg,rgba(123,15,167,0.92) 30%, #009dff 45%, rgba(63,18,139,0.91) 60%)";
    } else if (typeTwo === "fire" || typeOne === "") {
      return " linear-gradient(217deg,rgba(255,115,3,0.92) 30%, rgba(226,52,68,0.91) 60%)";
    } else if (typeTwo === "water" || typeOne === "") {
      return " linear-gradient(217deg,rgba(3,233,255,0.92) 30%, rgba(53,55,254,0.91) 60%)";
    } else if (typeTwo === "grass" || typeOne === "") {
      return "linear-gradient(197deg,#00c553 40%, #00ff00 80%)";
    } else if (typeTwo === "electric" || typeOne === "") {
      return " linear-gradient(217deg,rgba(3,158,255,0.92) 30%, rgba(243,226,15,0.91) 45%)";
    } else if (typeTwo === "ice" || typeOne === "") {
      return "linear-gradient(143deg,#00ece5 30%, #00bdff 40%, #d1e5f8 80%)";
    } else if (typeTwo === "dragon" || typeOne === "") {
      return "linear-gradient(143deg,#0c7ef3 30%, #eaf32a 50%, #ff0558 80%)";
    } else if (typeTwo === "dark" || typeOne === "") {
      return " linear-gradient(143deg,#000b92 30%, #22c9f3 70%, #3d0083 80%)";
    } else if (typeTwo === "fairy" || typeOne === "") {
      return " linear-gradient(217deg,rgba(181,3,255,0.92) 30%, rgba(254,119,188,0.91) 60%)";
    } else if (typeTwo === "psychic" || typeOne === "") {
      return " linear-gradient(217deg,rgba(46,236,254,0.92) 30%, #ff00df 45%, rgba(178,61,226,0.91) 60%)";
    } else if (typeTwo === "steel" || typeOne === "") {
      return " linear-gradient(143deg,#acacac 30%, #c5c5c5 40%, #6f6f6f 80%)";
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