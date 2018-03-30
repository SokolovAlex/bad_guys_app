import { Actions, ActionTypes } from '../actions/rooms';
import { tassign } from 'tassign';

import { Room } from '../../models/Room';
import { LoadStates } from '../../models/Enums';

export interface State {
  loadState: string,
  rooms: Room[]
}

const initialState: State = {
    loadState: LoadStates.Empty,
    rooms: []
};

export function reducer(state = initialState, action: Actions): State {
  switch (action.type) {
    case ActionTypes.LOAD_ROOMS: {
      return tassign(state, { loadState: LoadStates.InProgress });
    }

    case ActionTypes.LOAD_ROOMS_ERROR:
        return tassign(state, { loadState: LoadStates.Error });

    case ActionTypes.LOAD_ROOMS_SUCCESS:
        return tassign(state, { loadState: LoadStates.Loaded, rooms: action.payload.rooms });

    default:
      return state;
  }
}