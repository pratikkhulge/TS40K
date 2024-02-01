import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const PokemonCard = ({ pokemon }) => {
  const { name, url } = pokemon;

  const [imageUrl, setImageUrl] = useState(null);
  const [height, setHeight] = useState(0);
  const [detail, setDetail] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setImageUrl(data.sprites.other.dream_world.front_default);
        setHeight(data.height);
      } catch (error) {
        console.error('Error fetching Pokemon details:', error);
      }
    };

    fetchPokemonDetails();
  }, [url]);

  const handleKnowMoreClick = () => {
    setDetail(true);
    navigate(`/pokemon/${name}`);
  };

  return (
    <div className="pokemon-card">
      <img src={imageUrl || 'placeholder-image-url'} alt={name} />
      <h2>{name}</h2>
      {detail && (
        <>
          <p>Height: {height}</p>
        </>
      )}
      <Link to={`/pokemon/${name}`}>
        <button onClick={handleKnowMoreClick}>Know More</button>
      </Link>
    </div>
  );
};

export default PokemonCard;
