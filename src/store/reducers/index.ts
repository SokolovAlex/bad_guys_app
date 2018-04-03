import { ActionReducerMap } from '@ngrx/store';
import { reducer as roomReducer, RoomState, initialState as roomInitialState } from './rooms';

export interface AppState {
    rooms: RoomState
}

export const reducers: ActionReducerMap<AppState> = {
  rooms: roomReducer
};

export const initialState = { rooms: roomInitialState };
