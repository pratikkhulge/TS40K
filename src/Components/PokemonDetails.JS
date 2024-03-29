// // src/components/PokemonDetails.js
// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';

// const PokemonDetails = () => {
//   const { name } = useParams();
//   const [imageUrl, setImageUrl] = useState(null);
//   const [height, setHeight] = useState(0);
//   const [width, setWidth] = useState(0);
//   const [type, setType] = useState(null);

//   useEffect(() => {
//     const fetchPokemonDetails = async () => {
//       try {
//         const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
//         const data = await response.json();
//         setImageUrl(data.sprites.other.dream_world.front_default);
//         setHeight(data.height);
//         setWidth(data.width);
//         setType(data.types[0].type.name); // Assuming only one type for simplicity
//       } catch (error) {
//         console.error('Error fetching Pokemon details:', error);
//       }
//     };

//     fetchPokemonDetails();
//   }, [name]);

//   return (
//     <div className="pokemon-details">
//       <h1>{name}</h1>
//       <img src={imageUrl || 'placeholder-image-url'} alt={name} />
//       <p>Height: {height}</p>
//       <p>Width: {width}</p>
//       <p>Type: {type}</p>
//     </div>
//   );
// };

// export default PokemonDetails;


import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const PokemonDetails = () => {
  const { name } = useParams();
  const [imageUrl, setImageUrl] = useState(null);
  const [height, setHeight] = useState(0);
  const [type, setType] = useState(null);

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        const data = await response.json();
        setImageUrl(data.sprites.other.dream_world.front_default);
        setHeight(data.height);
        // You may need to extract the type data from the response
        // and set it to the 'type' state.
      } catch (error) {
        console.error('Error fetching Pokemon details:', error);
      }
    };

    fetchPokemonDetails();
  }, [name]);

  return (
    <div className="pokemon-details">
      <img src={imageUrl || 'placeholder-image-url'} alt={name} />
      <h3>{name}</h3>
      <p>Height: {height}</p>
      <p>Type: {type}</p>
    </div>
  );
};

export default PokemonDetails;
