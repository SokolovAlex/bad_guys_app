import { State } from './../reducers';
import { createSelector } from 'reselect';

export const getState = (state: State) => { debugger; return state.rooms.currentState; }
export const getRooms = (state: State) => state.rooms.rooms;
