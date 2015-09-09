import alt from '../alt';
import FooterActions from '../actions/FooterActions';

class FooterStore {
	constructor() {
		// bindActions is a 'magic' action from Alt.js which binds actions to their handlers in the store
		this.bindActions(FooterActions);
		this.characters = [];
	}

	// onGetTopCharactersSuccess correspons to the getTopCharacters action in FooterActions.js
	onGetTopCharactersSuccess(data) {
		this.characters = data.slice(0,5);
	}

	onGetTopCharactersFail(jqXhr) {
		// Handle multiple response formats, fallback to HTTP status code #
		toaster.error(jqXhr.responseJSON && jqXhr.responseJSON.message || jqXhr.responseText || jqXhr.statusText);
	}
}

// here alt.js is used to simplify creating the store
export default alt.createStore(FooterStore);
