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

        case ActionTypes.SAVE_ROOM:
            const room = action.payload;
            let newRoomList: Room[];
            if (room.isNew) {
                newRoomList = [...state.roomList, room];
            } else {
                const editedRoom = state.roomList.find((item: Room) => item.id === room.id);
                if (editedRoom) {
                    editedRoom.description = room.description;
                    editedRoom.title = room.title;
                }
            }
            return tassign(state, { roomList: newRoomList });

        case ActionTypes.LOAD_ROOMS_SUCCESS:
            return tassign(state, { currentState: PageStates.List, roomList: action.payload });

        default:
            return state;
    }
}