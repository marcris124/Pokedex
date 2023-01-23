import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

import lifeImg from '../Components/images/life.png'
import atack from '../Components/images/atack.png'
import defence from '../Components/images/defence.png'
import speed from '../Components/images/speed.png'

import { Link } from 'react-router-dom';

import ImgNull from '../Components/images/nullPokemonImg.png'

const PokemonsDetail = () => {

  const { id } = useParams()
  const [pokemon,setpokemon] = useState({})

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then(res => setpokemon(res.data))

  },[])


  const [btnChange,setbtnChange] = useState(false)

  const btnClick = () =>{
    setbtnChange(!btnChange) 
  }

  const body = document.body.className=btnChange ? "dark" : "active"


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

  const imagePokemon = pokemon.sprites?.other.home.front_default;


  return (
    <div className='details-container'>
      <div className='btn-mode'>
      <button onClick={btnClick} className={btnChange ? "switch active" : "switch"} id="switch">
           <span><i className="fa-solid fa-sun"></i></span>
           <span><i className="fa-solid fa-moon"></i></span>  
             </button>
    </div>
      <div className='descrip-pokemon'> 
        
         <div className='detail-image'>
         <img src={imagePokemon ? imagePokemon : ImgNull} alt="" />
        </div>
      </div>
      <div className='return-btn'>
        <Link to={"/Pokemons"}><i className="fa-solid fa-arrow-left"></i></Link>
        </div>
       

      <div className='pokemon-details'>
        <div className='content-details'
              style={{background:changeColorCardPokemon()}}
        >
          <h2 className='id'># {pokemon.id} </h2>
          <h1>{pokemon.name}  </h1>

          <div className='info-1'>
            <div className="info-1-content"><h2>Weight <br /> </h2><p> {pokemon.weight} Kg </p>   </div>
            <div className="info-1-content"> <h2>height <br /> </h2><p> {pokemon.height} M </p>  </div>        

            <div className="info-1-content"><h2> Type <br /> </h2> <p><span> {pokemon.types?.[0].type.name}</span></p> </div>
            <div className="info-1-content"><h2>Abilities <br /> </h2> <p> <span> {pokemon.abilities?.[0].ability.name}</span><span> {pokemon.abilities?.[1].ability.name} </span></p> </div>
           



          </div>
       
          <div className='stats'>
         
         <div className='stats-content'>

            <div className='stats-info'>
               <div className='stats-name'><img src={lifeImg} alt="" /><h2>{pokemon.stats?.[0].stat.name} </h2></div>    <h3>{pokemon.stats?.[0].base_stat} </h3>
            </div>

            <div className='stats-info'>
               <div className='stats-name'> <img src={atack} alt="" /> <h2>{pokemon.stats?.[1].stat.name} </h2> </div>     <h3>{pokemon.stats?.[1].base_stat} </h3>
            </div>

            <div className='stats-info'>
                <div className='stats-name'> <img src={defence} alt="" /> <h2>{pokemon.stats?.[2].stat.name} </h2> </div><h3>{pokemon.stats?.[2].base_stat} </h3>
            </div>

            <div className='stats-info'>
                 <div className='stats-name'> <img src={speed} alt="" /> <h2>{pokemon.stats?.[5].stat.name} </h2></div>    <h3>{pokemon.stats?.[5].base_stat} </h3>
            </div>


          </div>

</div>
          <div className="info-2">
              <h2>Movements</h2>
            <div className="movements">
              {
                pokemon.moves?.map(movements => (
                  <div key={movements?.move.url} className='info-2-content'>
                   <h3>{movements?.move.name}</h3>  
                  </div> 
                ))
              }

            </div>

          </div>

        </div>
      </div>

    </div>
  );
};

export default PokemonsDetail;