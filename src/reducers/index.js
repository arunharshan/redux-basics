import { combineReducers  } from 'redux';
import personReducer from './personReducer';

 

const rootReducer = combineReducers({
    person: personReducer
});

export default rootReducer;