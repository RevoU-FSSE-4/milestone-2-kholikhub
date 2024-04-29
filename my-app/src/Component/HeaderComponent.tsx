import React from "react";
import { useState } from "react";
import Axios from "axios";

const HeaderComponent = () => {
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonChosen, setPokemonChosen] = useState(false);
  const [pokemon, setPokemon] = useState({
    name: "",
    species: "",
    img: "",
    hp: "",
    attack: "",
    defence: "",
    spAttack: "",
    spDefence: "",
    speed: "",
    type: "",
  });

  const searchPokemon = () => {
    Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then(
      (response) => {
        setPokemon({
          name: pokemonName,
          species: response.data.species.name,
          img: response.data.sprites.front_default,
          hp: response.data.stats[0].base_stat,
          attack: response.data.stats[1].base_stat,
          defence: response.data.stats[2].base_stat,
          spAttack: response.data.stats[3].base_stat,
          spDefence: response.data.stats[4].base_stat,
          speed: response.data.stats[5].base_stat,
          type: response.data.types[0].type.name,
        });
        setPokemonChosen(true);
      }
    );
  };

  return (
    <>
      <div className=" bg-blue-400 w-full h-80 flex justify-center flex-col text-center">
        <div className="  font-bold flex flex-col items-center">
          <h1 className="mt-12 text-5xl text-white"> POKEMON STATS </h1>
          <input
            type="text"
            onChange={(event) => {
              setPokemonName(event.target.value);
            }}
            className=" m-4 w-52 h-10 border rounded-xl p-3 text-xl"
          />
          <button
            onClick={searchPokemon}
            className=" hover:cursor-pointer border-sky-900 text-white bg-blue-700 w-40 h-10 border rounded-xl text-s"
          >
            Search Pokemon
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center text-3xl font-bold mt-5">
        {!pokemonChosen ? (
          <h1>Please chose a Pokemon</h1>
        ) : (
          <>
            <h1>{pokemon.name}</h1>
            <img src={pokemon.img} className=" w-52" />
            <h3>Species: {pokemon.species}</h3>
            <h3>Type: {pokemon.type}</h3>
            <h4>HP: {pokemon.hp}</h4>
            <h4>Attack: {pokemon.attack}</h4>
            <h4>Defence: {pokemon.defence}</h4>
            <h4>Special Attack: {pokemon.spAttack}</h4>
            <h4>Special Defence: {pokemon.spDefence}</h4>
            <h4>Speed: {pokemon.speed}</h4>
          </>
        )}
      </div>
    </>
  );
};

export default HeaderComponent;
