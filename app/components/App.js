import React from 'react';
import {RouteHandler} from 'react-router';
// says there are supposed to be two more components that he didn't mention: './Navbar'
// and './Footer'

class App extends React.Compoment {
	render() {
		return (
			<div>
				<RouteHandler />
			</div>
		);
	}
}

export default App;
