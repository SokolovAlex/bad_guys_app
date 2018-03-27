import { Action } from '@ngrx/store';

export const ActionTypes = {
    LOAD_ROOMS: 'FetchRooms',
    LOAD_ROOMS_SUCCESS: 'LoadRoomsSuccess',
    LOAD_ROOMS_ERROR: 'LoadRoomsError',
};

export class FetchRooms implements Action {
    type = ActionTypes.LOAD_ROOMS
    constructor(public payload: any) { }
}

export class LoadRoomsSuccess implements Action {
    type = ActionTypes.LOAD_ROOMS_SUCCESS
    constructor(public payload: any) { }
}

export class LoadRoomsError implements Action {
    type = ActionTypes.LOAD_ROOMS_ERROR
    constructor(public payload: any) { }
}

export type Actions = FetchRooms
    | LoadRoomsSuccess
    | LoadRoomsError;