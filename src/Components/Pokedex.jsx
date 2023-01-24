import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changePokemon } from '../store/slices/pokeNames.slice';

import pokemonLogo from '../Components/images/pokemonLogo3.png'
import teamRocket from '../Components/images/teamRocketTransparente.png'
const Pokedex = () => {

  const dispatch = useDispatch()
  const [inputValue, setinputValue] = useState("")
  const navigate = useNavigate()

  const clickButton = () => {
    if (inputValue === "") {
      alert("Por favor ingresa tu nombre")
    } else {
      dispatch(changePokemon(inputValue));
      navigate("/Pokemons")
    }



  }

  return (
    <div className='user-id'>

      <div className='user-info'>
        <img className='user-logo' src={pokemonLogo} alt="" />


        <img className='team-rocket' src={teamRocket} alt="" />
        <div className='register'>
          <h1>Register</h1>
        </div>

        <div className="input-user">

          <label htmlFor="user">
            <h2>Name</h2>
          </label>
          <div className='input'>
            <input
              type="text"
              placeholder='Introduce Your Name'
              value={inputValue}
              onChange={(e) => setinputValue(e.target.value)}
              id="user"
            />
            <button onClick={clickButton}><i className="fa-solid fa-address-card"></i></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pokedex; <h1>Pokedex ID</h1>