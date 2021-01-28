import React from 'react';
import 'w3-css/w3.css';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Plats from './components/Plats/Plats';
import Decoration from './components/Decoration/Decoration';
import Chaises from './components/Chaises/Chaises';
import Couverts from './components/Couverts/Couverts';
import Tentes from './components/Tentes/Tentes';

const App = (props) => {

  return (
		<main className=''>
			<Header />
			<div className='w3-content'>
				<Banner />
				<Plats />
				<Decoration />
				<Chaises />
				<Couverts />
				<Tentes />
			</div>
		</main>
	);
};

export default App;