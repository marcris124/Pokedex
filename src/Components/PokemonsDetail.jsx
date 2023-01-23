import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

import lifeImg from '../Components/images/life.png'
import atack from '../Components/images/atack.png'
import defence from '../Components/images/defence.png'
import speed from '../Components/images/speed.png'


const PokemonsDetail = () => {

  const { id } = useParams()

  const [pokemon,setpokemon] = useState({})

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then(res => setpokemon(res.data))

  },[])


console.log(pokemon);

  return (
    <div className='details-container'>

      <div className='descrip-pokemon'> 
        
         <div className='detail-image'>
         <img src={pokemon.sprites?.other.home.front_default} alt="" />
        </div>
      </div>

      <div className='pokemon-details'>
        <div className='content-details'>
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