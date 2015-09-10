import alt from '../alt';
// the above alt is from alt.js require is 

class FooterActions {
	// the actions are created below with generateActions()
	constructor() {
		this.generateActions(
			'getTopCharactersSuccess',
			'getTopCharactersFail'
		);
	}

	getTopCharacters() {
		$.ajax({ url: '/api/characters/top' })
			.done((data) => {
				this.actions.getTopCharactersSuccess(data)
			})
			.fail((jqXhr) => {
			    this.actions.getTopCharactersFail(jqXhr);
			});
	}
}

// the below takes the two actions from above and turns them into this
/*
getTopCharactersFail(payload) {
  this.dispatch(payload);
}
*/
export default alt.createActions(FooterActions);
