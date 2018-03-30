import { Action } from '@ngrx/store';

import { Room } from '../../models/Room';

export const ActionTypes = {
    LOAD_ROOMS: 'FetchRooms',
    LOAD_ROOMS_SUCCESS: 'LoadRoomsSuccess',
    LOAD_ROOMS_ERROR: 'LoadRoomsError',
};

export class FetchRooms implements Action {
    type = ActionTypes.LOAD_ROOMS
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
    | LoadRoomsError;