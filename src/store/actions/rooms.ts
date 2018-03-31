import { Action } from '@ngrx/store';

import { Room } from '../../models/Room';
import { PageStates } from '../../models/Enums';

export const ActionTypes = {
    CHANGE_STATE: 'ChangeState',

    LOAD_ROOMS: 'FetchRooms',
    LOAD_ROOMS_SUCCESS: 'LoadRoomsSuccess',
    LOAD_ROOMS_ERROR: 'LoadRoomsError',

    EDIT_ROOM: 'EditRoom',
    EDIT_ROOM_SUCCESS: 'EditRoomSuccess',
    EDIT_ROOM_ERROR: 'EditRoomError',
};

export class ChangeState implements Action {
    type = ActionTypes.CHANGE_STATE
    constructor(public payload: PageStates) { }
}

export class FetchRooms implements Action {
    type = ActionTypes.LOAD_ROOMS
    constructor(public payload: any) { }
}

export class LoadRoomsSuccess implements Action {
    type = ActionTypes.LOAD_ROOMS_SUCCESS
    constructor(public payload: Room[]) { }
}

export class LoadRoomsError implements Action {
    type = ActionTypes.LOAD_ROOMS_ERROR
    constructor(public payload: any) { }
}

export type Actions = FetchRooms
    | LoadRoomsSuccess
    | LoadRoomsError
    | ChangeState;