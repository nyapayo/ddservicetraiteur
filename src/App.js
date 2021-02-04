import React, { useEffect } from 'react';
import 'w3-css/w3.css';
import Header from './components/Header/Header';
import Ceremonies from './components/Ceremonies/Ceremonies';
import Contacts from './components/Contacts/Contacts';
import Services from './components/Services/Services';
import Plats from './components/Plats/Plats';
import Decoration from './components/Decoration/Decoration';
import Patisserie from './components/Patisserie/Patisserie';
import Jus from './components/Jus/Jus';
import Chaises from './components/Chaises/Chaises';
import Tentes from './components/Tentes/Tentes';
import Couverts from './components/Couverts/Couverts';
import Marmites from './components/Marmites/Marmites';

const App = (props) => {

	useEffect(() => {
		const handleWindowScroll = e => {
			console.log('Handle window scroll');
		}
		window.addEventListener('scroll', handleWindowScroll, false);
		return () => {
			window.removeEventListener('scroll', handleWindowScroll, false);
		}
	});

  return (
		<main className=''>
			<Header />
			<div className='w3-content'>
				{/* Container(padding-left and right) for these components on phone i.e maxWidth: 600px */}
				{/* Que les composents ne soient pas collés au bord de l'ecran */}
				<div className='w3-container'>
					<hr />
					<Ceremonies />
					<Contacts />
					<Services />
					<hr />
					<Plats />
					<Decoration />
					<Patisserie />
					<Jus />
					<Chaises />
					<Tentes />
					<Couverts />
					<Marmites />
					<hr />
				</div>					
			</div>
		</main>
	);
};

export default App;