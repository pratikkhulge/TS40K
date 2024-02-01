import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './PokemonDetails.css';

const PokemonDetails = () => {
  const { name } = useParams();
  const [imageUrl, setImageUrl] = useState(null);
  const [height, setHeight] = useState(0);
  const [id, setId] = useState(0);
  const [stats, setStats] = useState([]);
  const [types, setTypes] = useState([]);
  const [weight, setWeight] = useState(0);

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        const data = await response.json();

        setImageUrl(data.sprites.other.dream_world.front_default);
        setHeight(data.height);
        setId(data.id);
        setStats(data.stats);
        setTypes(data.types);
        setWeight(data.weight);
      } catch (error) {
        console.error('Error fetching Pokemon details:', error);
      }
    };

    fetchPokemonDetails();
  }, [name]);

  return (
    <div className="pokemon-details-container">
      <div className="pokemon-image-container">
        <img src={imageUrl || 'placeholder-image-url'} alt={name} className="pokemon-image" />
      </div>
      <div className="pokemon-info">
        <h3 className="pokemon-name">{name}</h3>
        <p className="pokemon-id">ID: {id}</p>
        <p className="pokemon-height">Height: {height} cm</p>
        <p className="pokemon-weight">Weight: {weight} kg</p>

        <div className="pokemon-stats">
          <h4>Stats:</h4>
          <ul>
            {stats.map((stat, index) => (
              <li key={index} className="stat-item">{`${stat.stat.name}: ${stat.base_stat}`}</li>
            ))}
          </ul>
        </div>

        <div className="pokemon-types">
          <h4>Types:</h4>
          <ul>
            {types.map((type, index) => (
              <li key={index} className="type-item">{type.type.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetails;

