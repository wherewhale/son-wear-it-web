import { locationAction, Location } from './types';
import { createReducer } from 'typesafe-actions';
import { SET_LOCATION } from './actions';
import produce from 'immer';

//초기 상태
const initialState: Location = {
    location : "광진구"
};

//리듀서
const location = createReducer<Location, locationAction>(initialState, {
  [SET_LOCATION]: (state, action) =>
    produce(state, draft => {
      draft.location = action.payload.location;
    }),
});

export default location;