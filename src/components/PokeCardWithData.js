import React, { useEffect } from 'react';
import './PokeCard.css';
import axios from 'axios';

const IMAGE_SRC = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';
const POKE_API = 'https://pokeapi.co/api/v2/pokemon/'

let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3) : number);
//^^function 'padToThree' takes a #; if the number is greater than 999, it gets no padding and will return the number.Otherwise, taking 2 zeros plus whatever # (of the card) and slicing 3 out of it and then returing those 3 values/numbers.

//OR can be written like: props.data.id.toString().padStart('0',3)

const PokeCard = (props) => {
	let imgSrc = `${IMAGE_SRC}${padToThree(props.id)}.png`;
  

  useEffect(() => {
    async function fetchData() {
      const result = await axios(`${POKE_API}${props.id}`);
      console.log(result)
      // setData(result.data.results);
    }
    fetchData();
  }, []);


	return (
		<div className='PokeCard'>
			<h1 ClassName='PokeCard-title'>{props.name}</h1>
			<img src={imgSrc} alt='props.name' />
			<div className='PokeCard-data'>Type:{props.type}</div>
			<div className='PokeCard-data'>Exp:{props.exp}</div>
		</div>
	);
};

export default PokeCard;
