import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import PokemonCard from "./PokemonCard";
import { Link } from "react-router-dom";
import pokemonLogo from "../Components/images/pokemonLogo3.png";
import videoBg from "../Components/videos/paisaje3.mp4";
import {
  Button,
  Input,
  Navbar,
  Typography,
} from "@material-tailwind/react";

const Pokemons = () => {
  const pokeName = useSelector((state) => state.pokeName);

  const [pokemonsId, setpokemonsId] = useState([]);
  const [inputSearch, setinputSearch] = useState("");
  const [poketype, setpoketype] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1279")
      .then((res) => setpokemonsId(res.data.results));

    axios
      .get("https://pokeapi.co/api/v2/type/") /*9:30 ver clase para entender*/
      .then((res) => setpoketype(res.data.results));
  }, []);

  const [page, setpage] = useState(1);
  const pokemonsPerPage = 16; //pokemones por pagina
  const lastIndex = page * pokemonsPerPage;
  const firstIndex = lastIndex - pokemonsPerPage;
  const pokemonsPaginated = pokemonsId.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(pokemonsId.length / pokemonsPerPage);

  const search = () => {
    navigate(`/Pokemons/${inputSearch}`);
  };

  const filterTypes = (e) => {
    axios.get(e.target.value).then((res) => setpokemonsId(res.data.pokemon));
  };

  return (
    <div className={`w-full  bg-[#0080b7] relative overflow-hidden  scrollbar-none`}>
      <div className="video-container ">
        <video autoPlay loop muted className="object-cover w-full h-full">
          <source src={videoBg} type="video/mp4" />
          {/* Agrega más <source> según los formatos de video compatibles */}
          Tu navegador no admite el elemento de video.
        </video>
      </div>

      <>
        <Navbar
          variant="gradient"
          color="blue-gray"
          className="max-w-none w-full from-[#0069a7] to-[#004185] px-4 py-3 rounded-none relative z-20"
        >
          <div className="flex flex-wrap items-center justify-center md:justify-between gap-y-4 text-white">
            <Link to={"/"}>
              <img src={pokemonLogo} alt="" className="w-52" />
            </Link>

            <div className="relative flex w-full gap-2 md:w-max items-end">
              <div className="select-container text-white ">
                <h3>Types</h3>
                <select
                  className="custom-select bg-[#062e4b] scrollbar-none"
                  onChange={filterTypes}
                  name="pokemonTypes"
                  id="pokemonTypes"
                >
                  <option value={pokemonsId}>All</option>
                  {poketype.map((types) => (
                    <option key={types.url} value={types.url}>
                      {types.name}
                    </option>
                  ))}
                </select>
              </div>

              <Input
                type="search"
                value={inputSearch}
                onChange={(e) => setinputSearch(e.target.value)}
                color="white"
                label="search pokemon "
                className="pr-20"
                containerProps={{
                  className: "min-w-[320px]",
                }}
              />
              <Button
                size="sm"
                color="white"
                className="!absolute right-1 top-[1.8rem] rounded"
                onClick={search}
              >
                Search
              </Button>
            </div>
          </div>
        </Navbar>

        <div className="w-full relative z-10 ">
          <div className="welcome-type relative z-10">
            <h1>Bienvenid@ aquí puedes encontrar tu pokemon favorito</h1>
          </div>
        </div>

        <div className="relative flex justify-center items-center z-10">
          <Button
            
            className="gradient-button"
            onClick={() => setpage(page - 1)}
            disabled={page === 1}
          >
            <i className="fa-solid fa-arrow-left text-2xl"></i>
          </Button>
          <div className="number-page ">
            {" "}
            <h5>pages</h5>{" "}
            <h3>
              {" "}
              {page} / {totalPages}{" "}
            </h3>
          </div>

          <Button
            
            className="gradient-button"
            onClick={() => setpage(page + 1)}
            disabled={page === totalPages}
          >
            <i className="fa-solid fa-arrow-right text-2xl"  ></i>
          </Button>
        </div>

        <div className="grid grid-cols-2 px-0 gap-0  sm:flex flex-wrap justify-center justify-items-center md:gap-[3.8rem]  z-10 relative md:px-28">
          {pokemonsPaginated.map((pokemon) => (
            <PokemonCard
              url={pokemon.url ? pokemon.url : pokemon.pokemon.url}
              key={pokemon.url ? pokemon.url : pokemon.pokemon.url}
            />
          ))}
        </div>
      </>
      <div className="relative flex  justify-center items-center z-10">
          <Button
            
            className="gradient-button"
            onClick={() => setpage(page - 1)}
            disabled={page === 1}
          >
            <i className="fa-solid fa-arrow-left text-2xl"></i>
          </Button>
          <div className="number-page  ">
            {" "}
            <h5>pages</h5>{" "}
            <h3>
              {" "}
              {page} / {totalPages}{" "}
            </h3>
          </div>

          <Button
            
            className="gradient-button"
            onClick={() => setpage(page + 1)}
            disabled={page === totalPages}
          >
            <i className="fa-solid fa-arrow-right text-2xl"  ></i>
          </Button>
        </div>
    </div>
  );
};

export default Pokemons;
