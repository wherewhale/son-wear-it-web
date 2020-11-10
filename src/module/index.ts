import { combineReducers } from 'redux';
import location from './location/reducer';
import { Location } from './location/types';



export type RootState = {
location : Location
};

const rootReducer = combineReducers({
    location
});

export default rootReducer;