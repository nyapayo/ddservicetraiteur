import React from 'react';
import 'w3-css/w3.css';
import './Header.css';

const Header = (props) => {
  return (
		<header id='appHeader'>
			<div id='appHeaderPresentation' className='w3-card w3-animate-top'>
				<h1 id='name' className='w3-text-purple'>&#127799; &#127804; <strong>D&D Service-Traiteur</strong> &#128280; &#127860;</h1>
				<p id='slogan'>
					<i className='w3-small'><b>Vous satisfaire est notre plaisir!</b> </i>  
					&#x1F609;
				</p>
			</div>
		</header>
	);
};

export default Header;