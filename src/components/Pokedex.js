import React from 'react';
import PokeCard from './PokeCard';
import './Pokedex.css';
import './PokeCard.css';
import PokeCardWithData from './PokeCardWithData';
function Pokedex(props) {
	console.log(props.pokemon);
	return (
		<div className='Pokedex'>
			<h1>Pokedex</h1>
			<div className='Pokedex-cards' />
			<PokeCardWithData id={7} name='Squirtle' type={'water'} base_exp={63} />
			{props.pokemon.map((p) => <PokeCard id={p.id} name={p.name} type={p.type} exp={p.base_exp} />)}
		</div>
	);
}
Pokedex.defaultProps = {
	pokemon: [
		{ id: 4, name: 'Charmander', type: 'fire', base_exp: 62 },

		{ id: 7, name: 'Squirtle', type: 'water', base_exp: 63 },

		{ id: 11, name: 'Metapod', type: 'bug', base_exp: 72 },

		{ id: 12, name: 'Butterfree', type: 'flying', base_exp: 178 },

		{ id: 25, name: 'Pikachu', type: 'electric', base_exp: 112 },

		{ id: 39, name: 'Jigglypuff', type: 'normal', base_exp: 95 },

		{ id: 94, name: 'Gengar', type: 'poison', base_exp: 225 },

		{ id: 133, name: 'Eevee', type: 'normal', base_exp: 65 },
	],
};

// 	return (
// 		<div className='Pokedex'>
// 			<h1>Pokedex</h1>
// 			{props.pokemon.map((p) => <PokeCard id={p.id} name={p.name} type={p.type} exp={p.base_exp} />)}
// 		</div>
// 	);
// }

export default Pokedex;
