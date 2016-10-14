import * as types from '../constants/ActionTypes';
import {CALL_API} from '../middleware/api';

export function testAction(text){
	return {type: types.TEST_ACTION, text};
}

export function apiAction(){
	return {
		    [CALL_API] : {
            types : [types.API_ACTION, null, null, types.ERROR_ACTION],
            payload : {}
        }
	}
}