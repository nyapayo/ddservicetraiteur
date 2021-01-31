import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import 'w3-css/w3.css';
import './index.css';

import App from './App';

ReactDOM.render(
  <React.StrictMode>
		<Router>
			<App />
		</Router>
	</React.StrictMode>, 
	document.querySelector('#root')
);

// Google maps API key: AIzaSyDPyJOdYvHcT09LuwNRhuAWEgYillMUlFQ