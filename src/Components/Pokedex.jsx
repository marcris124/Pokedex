import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changePokemon } from "../store/slices/pokeNames.slice";

import pokemonLogo from "../Components/images/pokemonLogo3.png";
import teamRocket from "../Components/images/teamRocketTransparente.webp";
import pikachuDiamond from "../Components/images/pikachuDiamond.png";
import bgMain from "../Components/images/pokemon-backgroun-home.webp";
import {
  Button,
  Card,
  Checkbox,
  Input,
  Typography,
} from "@material-tailwind/react";

const Pokedex = () => {
  const dispatch = useDispatch();
  const [inputValue, setinputValue] = useState("");
  const navigate = useNavigate();

  const clickButton = () => {
    if (inputValue === "") {
      alert("Por favor ingresa tu nombre");
    } else {
      dispatch(changePokemon(inputValue));
      navigate("/Pokemons");
    }
  };

  return (
    <div
      style={{
        background: `url("${bgMain}")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="grid grid-cols-1 "
    >
      <div className=" bg-[#090b30] h-screen grid grid-cols-1 md:clip-polygon">
        <div className=" border-white grid justify-center md:justify-start content-center justify-items-center gap-4">
          <img src={pokemonLogo} width={300} height={150} />

          <Card
            shadow={false}
            placeholder={""}
            className='p-4 md:p-8 bg-[url("https://i.pinimg.com/736x/ae/7f/6d/ae7f6d86e683e0d2b87a31ee0358054b.jpg")] bg-no-repeat bg-cover bg-bottom'
          >
            <Typography variant="h4" color="white" placeholder={""}>
              Registrate
            </Typography>
            <Typography
              color="black"
              className="mt-1 font-normal font-semibold"
              placeholder={""}
            >
              ¡Encantado de conocerlo!
            </Typography>
            <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
              <div className="mb-1 flex flex-col gap-6">
                <Typography
                  variant="h6"
                  color="white"
                  className="-mb-3"
                  placeholder={""}
                >
                 Tu Nombre
                </Typography>
                <Input
                  crossOrigin={""}
                  color="black"
                  size="lg"
                  placeholder="Tu nombre Aqui"
                  className="font-bold !border-t-blue-900 focus:!border-t-light-blue-800 text-black  "
                  labelProps={{
                    className: "before:content-none after:content-none ",
                  }}
                  value={inputValue}
                  onChange={(e) => setinputValue(e.target.value)}
                  id="user"
                />
                
              </div>

              <Button
                type="submit"
                color="blue"
                className="mt-6"
                fullWidth
                placeholder={""}
                onClick={clickButton}
              >
                Registrarse
              </Button>
            </form>
          </Card>
        </div>
      </div>

     
    </div>
  );
};

export default Pokedex;
<h1>Pokedex ID</h1>;
