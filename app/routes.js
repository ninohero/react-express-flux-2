import React from 'react';
import {Route} from 'react-router';
import App from './components/App';
import Home from './components/Home';
import Character from './components/Character';
import AddCharacter from './components/AddCharacter';

export default (
	<Route handler={App}>
		<Route path='/' handler={Home} />
		<Route path='/characters/:id' handler={Character} />
		<Route path='/add' handler={AddCharacter} />

	</Route>
);
