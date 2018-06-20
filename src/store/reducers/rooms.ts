import { Actions, ActionTypes } from '../actions/rooms';
import { tassign } from 'tassign';

import { Room } from '../../models/Room';
import { PageStates } from '../../models/Enums';

import { filter } from 'lodash';

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

        case ActionTypes.SERVER_ERROR:
            return tassign(state, { currentState: PageStates.Error });

        case ActionTypes.CHANGE_STATE:
            return tassign(state, { currentState: action.payload });
        
        case ActionTypes.DELETE_ROOM_SUCCESS:
            debugger;
            const newList =  filter(state.roomList, (item) => item.id !== action.payload);
            return tassign(state, { roomList: newList, currentState: PageStates.List});

        case ActionTypes.EDIT_ROOM_SUCCESS:
            const room = action.payload as Room;
            const editedRoom = state.roomList.find((item: Room) => item.id === room.id);
            if (editedRoom) {
                editedRoom.description = room.description;
                editedRoom.title = room.title;
            }
            return tassign(state, { currentState: PageStates.List});

        case ActionTypes.SAVE_ROOM_SUCCESS:
            return tassign(state, { roomList:  [...state.roomList, action.payload], currentState: PageStates.List});

        case ActionTypes.LOAD_ROOMS_SUCCESS:
            return tassign(state, { currentState: PageStates.List, roomList: action.payload });

        default:
            return state;
    }
}