import React, { useEffect, useState } from 'react';
import './PokeCard.css';
import axios from 'axios';

const IMAGE_SRC = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';
const POKE_API = 'https://pokeapi.co/api/v2/pokemon/'

let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3) : number);
//^^function 'padToThree' takes a #; if the number is greater than 999, it gets no padding and will return the number.Otherwise, taking 2 zeros plus whatever # (of the card) and slicing 3 out of it and then returing those 3 values/numbers.

//OR can be written like: props.data.id.toString().padStart('0',3)

const PokeCard = (props) => {
  // put here 3 useState hooks for loading, error, and pokemon (initiate as null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [pokemon, setPokemon] = useState(null)  

  useEffect(() => {
    async function fetchData() {
      const result = await axios(`${POKE_API}${props.id}`);
      console.log(result)
      // setData(result.data.results);
      const basePokemon = {
        name: 'Squirtle',
        type: 'water',
        base_exp: 63 
      }
      setPokemon(basePokemon)
      setLoading(false)
    }
    fetchData();
  }, []);

  // make if statement to return <div>loading</div> if loading or error
  if (!pokemon || loading) {
    return <div className='loading'>loading pokemon...</div>
  } else if (error) {
    return <div className=''>Error</div>
  }

	let imgSrc = `${IMAGE_SRC}${padToThree(props.id)}.png`;

  // change props to be from the pokemon instead
	return (
		<div className='PokeCard'>
			<h1 ClassName='PokeCard-title'>WithData({pokemon.name})</h1>
			<img src={imgSrc} alt={pokemon.name} />
			<div className='PokeCard-data'>Type:{pokemon.type}</div>
			<div className='PokeCard-data'>Exp:{pokemon.base_exp}</div>
		</div>
	);
};

export default PokeCard;
