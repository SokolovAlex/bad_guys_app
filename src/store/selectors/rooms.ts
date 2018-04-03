import { AppState } from './../reducers';

export const getState = (state: AppState) => state.rooms.currentState;
export const getRooms = (state: AppState) => state.rooms.roomList;
