// src/ExampleParentComponent.js
import React from 'react';
import PokemonCard from './components/PokemonCard';

const ExampleParentComponents = () => {
  const examplePokemon = {
    name: 'Pikachu',
    url: 'https://pokeapi.co/api/v2/pokemon/25/',
  };

  return <PokemonCard pokemon={examplePokemon} />;
};

export default ExampleParentComponents;
