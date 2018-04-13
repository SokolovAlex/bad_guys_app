import { Action } from '@ngrx/store';

import { Room } from '../../models/Room';
import { PageStates } from '../../models/Enums';

export const ActionTypes = {
    CHANGE_STATE: 'ChangeState',

    LOAD_ROOMS: 'FetchRooms',
    LOAD_ROOMS_SUCCESS: 'LoadRoomsSuccess',
    LOAD_ROOMS_ERROR: 'LoadRoomsError',

    SAVE_ROOM: 'SaveRoom',
    SAVE_ROOM_SUCCESS: 'SaveRoomSuccess',
    SERVER_ERROR: 'ServerError',
};

export class SaveRoom implements Action {
    type = ActionTypes.SAVE_ROOM
    constructor(public payload: Room) { }
}

export class SaveRoomSuccess implements Action {
    type = ActionTypes.SAVE_ROOM_SUCCESS
    constructor(public payload: Room) { }
}

export class ServerError implements Action {
    type = ActionTypes.SERVER_ERROR
    constructor(public payload: String) { }
}

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
    | ChangeState
    | SaveRoom
    | ServerError
    | SaveRoomSuccess;