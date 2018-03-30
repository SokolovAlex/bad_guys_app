import { ActionReducer, combineReducers } from '@ngrx/store';
import { compose } from '@ngrx/core/compose';
import { storeFreeze } from 'ngrx-store-freeze';
import { storeLogger } from "ngrx-store-logger";
import { environment } from '../../environments/environment';

import * as rooms from './rooms';

export interface State {
    rooms: rooms.State
}

const reducers = {
  rooms: rooms.reducer
};

const developmentReducer: ActionReducer<State> = compose(storeLogger(), combineReducers)(reducers);
const productionReducer: ActionReducer<State> = combineReducers(reducers);

export function reducer(state: State, action: any) {
  if (environment.production) {
    return productionReducer(state, action);
  } else {
    return developmentReducer(state, action);
  }
}