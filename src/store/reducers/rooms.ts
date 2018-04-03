import { Actions, ActionTypes } from '../actions/rooms';
import { tassign } from 'tassign';

import { Room } from '../../models/Room';
import { PageStates } from '../../models/Enums';

export interface RoomState {
    currentState: PageStates,
    roomList: Room[]
}

export const initialState: RoomState = {
    currentState: PageStates.Empty,
    roomList: []
};

export function reducer(state = initialState, action: Actions): RoomState {
    switch (action.type) {
        case ActionTypes.LOAD_ROOMS:
            return tassign(state, { currentState: PageStates.Loading });

        case ActionTypes.LOAD_ROOMS_ERROR:
            return tassign(state, { currentState: PageStates.Error });

        case ActionTypes.CHANGE_STATE:
            return tassign(state, { currentState: action.payload });

        case ActionTypes.LOAD_ROOMS_SUCCESS:
            return tassign(state, { currentState: PageStates.List, roomList: action.payload.rooms });

        default:
            return state;
    }
}