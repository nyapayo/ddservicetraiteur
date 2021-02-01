import React from 'react';
import 'w3-css/w3.css';
import Header from './components/Header/Header';
import Ceremonies from './components/Ceremonies/Ceremonies';
import Contacts from './components/Contacts/Contacts';
import Services from './components/Services/Services';
import Plats from './components/Plats/Plats';

const App = (props) => {

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
				</div>					
			</div>
		</main>
	);
};

export default App;