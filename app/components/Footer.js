import React from 'react';
import {Link} from 'react-router';
import FooterStore from '../stores/FooterStore';
import FooterActions from '../actions/FooterActions';

class Footer extends React.Component {
	// this is es6 version of getInitial state and react,createComponent
	constructor(props) {
		super(props);
		this.state = FooterStore.getState();
		// notice 'this' is no longer auto bound to the react component (react.createComponent used to do this automatically)
		this.onChange = this.onChange.bind(this);
		// notice no commas are needed between class methods now
	} 

	componentDidMount() { // also, methods don't need to have ': fuction' before the parens ()
	    FooterStore.listen(this.onChange);
	    FooterActions.getTopCharacters();  
	}

	componentWillUnmount() {
	 	FooterStore.unlisten(this.onChange);
	}

	onChange(state) {
		this.setState(state);
	}

	render() {
		let leaderboardCharacters = this.state.characters.map(function(character) {
			return (
				<li key={character.characterId}>
					<Link to={'/characters/' + character.characterId}>
						<img className='thumb-md' src={'http://image.eveonline.com/Character/' + character.characterId + '_128.jpg'} />
					</Link>
				</li>
			);
		});

		return (
			<footer>
				<div className='container'>
					<div className='row'>
						<div className='col-sm-5'>
							<h3 className='lead'><strong>Information</strong> and <strong>Copyright</strong></h3>
							<p>Powered by <strong>Node.js</strong>, <strong>MongoDB</strong>, and <strong>React</strong> with Flux architecture and server-side rendering.</p>
							<p>You may view the <a href='https://github.com/sahat/newedenfaces-react'>Source Code</a> behind this project on GitHub.</p>
							<p>&copy; 2015 Sahat</p>
						</div>
						<div className='col-sm-7 hidden-xs'>
							<h3 className='col-sm-7 hidden-xs'>Leaderboard Top 5 Characters </h3>
							<ul className='list-inline'>
								{ leaderboardCharacters }
							</ul>
						</div>
					</div>
				</div>
			</footer>
		);
	}
}

export default Footer;
