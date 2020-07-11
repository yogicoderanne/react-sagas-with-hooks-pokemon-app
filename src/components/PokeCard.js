import React from 'react';
import './PokeCard.css';

const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3) : number);
//^^function 'padToThree' takes a #; if the number is greater than 999, it gets no padding and will return the number.Otherwise, taking 2 zeros plus whatever # (of the card) and slicing 3 out of it and then returing those 3 values/numbers.

//OR can be written like: props.data.id.toString().padStart('0',3)

const PokeCard = (props) => {
	let imgSrc = `${POKE_API}${padToThree(props.id)}.png`;
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
