import {TEST_ACTION, API_ACTION,ERROR_ACTION} from '../constants/ActionTypes';


const initState = {
	text: ''
}

export default function test(state=initState, action){
	switch (action.type){
		case TEST_ACTION:
			return Object.assign({}, state, {text: action.text});
		break;
		case API_ACTION:
			return Object.assign({}, state, {text: action.content});
		break;
		case ERROR_ACTION:
			return Object.assign({}, state, {text: action.error});
		break;
		default:
			return state;
		break;
	}
}