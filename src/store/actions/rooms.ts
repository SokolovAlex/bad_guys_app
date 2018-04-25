import { Action } from '@ngrx/store';

import { Room } from '../../models/Room';
import { PageStates } from '../../models/Enums';

export const ActionTypes = {
    CHANGE_STATE: 'ChangeState',

    LOAD_ROOMS: 'FetchRooms',
    LOAD_ROOMS_SUCCESS: 'LoadRoomsSuccess',

    SAVE_ROOM: 'SaveRoom',
    SAVE_ROOM_SUCCESS: 'SaveRoomSuccess',
    EDIT_ROOM_SUCCESS: 'EditRoomSuccess',

    DELETE_ROOM: 'DeleteRoom',
    DELETE_ROOM_SUCCESS: 'DeleteRoomSuccess',

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

export class EditRoomSuccess implements Action {
    type = ActionTypes.EDIT_ROOM_SUCCESS
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
    constructor(public payload?) { }
}

export class LoadRoomsSuccess implements Action {
    type = ActionTypes.LOAD_ROOMS_SUCCESS
    constructor(public payload: Room[]) { }
}

export class DeleteRoom implements Action {
    type = ActionTypes.DELETE_ROOM
    constructor(public payload: number) { }
}

export class DeleteRoomSuccess implements Action {
    type = ActionTypes.DELETE_ROOM_SUCCESS
    constructor(public payload: number) { }
}

export type Actions = FetchRooms
    | LoadRoomsSuccess
    | ChangeState
    | SaveRoom
    | ServerError
    | DeleteRoom
    | DeleteRoomSuccess
    | SaveRoomSuccess
    | EditRoomSuccess;