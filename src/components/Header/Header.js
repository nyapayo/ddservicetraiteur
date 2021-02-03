import React from 'react';
import 'w3-css/w3.css';
import './Header.css';

const Header = (props) => {
  return (
		<header className='' id='appHeader'>
			<div className='w3-card w3-round w3-animate-top' id='appHeaderPresentation'>
				<h1 className='animName' id='name'>
					&#127799; &#127804; 
					<strong className='kalamFont'>
						D&D Service-Traiteur
					</strong> 
					&#128280; &#127860;
				</h1>
				<p id='slogan'>
					<i className='kalamFont'>
						<strong>Vous satisfaire est notre plaisir!</strong>
					</i>   
					 &#x1F609;
				</p>
			</div>
		</header>
	);
};

export default Header;