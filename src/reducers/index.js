import { combineReducers } from 'redux';
import CharactersReducer from './reducer_characters';

const rootReducer = combineReducers({
    charactersReducer: CharactersReducer
});

export default rootReducer;
