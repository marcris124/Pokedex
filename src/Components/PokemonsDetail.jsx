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

  const [isLoading,setisLoading] = useState(true)

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then(res => {
      
      setpokemon(res.data)
    
    
    setisLoading(false)
    //setTimeout(() =>setisLoading(false), 10000)
    })
    
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

  const imagePokemon = pokemon.sprites?.other.home.front_default;


  return (
    <div className='details-container'>

    {

isLoading ? (
  <div className='screen-2'><img src="https://i.gifer.com/Q568.gif" alt="" /></div>
) : (
  <>
  
  
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
  
  </>

)

    }


    </div>
  );
};

export default PokemonsDetail;