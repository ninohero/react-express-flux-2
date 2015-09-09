import alt from '../alt';
import HomeActions from '../actions/HomeActions';

class HomeStore {
	constructor() {
		this.bindActions(HomeActions);
		this.characters = [];
	}

	onGetTwoCharactersSuccess(data) {
		this.characters = [];
	}

	onGetTwoCharactersFail(errorMessage){
		toasr.error(errorMessage);
	}

	onVoteFail(errorMessage) {
		toastr.error(errorMessage);
	}

}

export default alt.createStore(HomeStore);
