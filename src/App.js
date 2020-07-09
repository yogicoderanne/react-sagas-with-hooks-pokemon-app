import React from 'react';
import './App.css';
import PokeCard from './components/PokeCard';

function App() {
	return (
		<div className='App'>
			<PokeCard id={4} name='Charmander' type='fire' exp={62} />
		</div>
	);
}

export default App;
