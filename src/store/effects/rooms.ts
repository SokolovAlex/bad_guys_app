import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import { map, switchMap, catchError } from 'rxjs/operators';

import { RoomService} from '../../services/room.service';
import * as actions from './../actions/rooms';

@Injectable()
export class RoomsEffects {
    constructor(
        private actions$: Actions,
        private roomService: RoomService
    ) { }

    @Effect()
    deleteRoom$ = this.actions$.ofType(actions.ActionTypes.DELETE_ROOM)
      .pipe(
        switchMap((action: actions.DeleteRoom) => {
          return this.roomService
            .deleteRoom(action.payload)
            .pipe(
              map(() => new actions.ServerSuccess()),  
              catchError(error => of(new actions.ServerError(error)))
            );
          })
      )

    @Effect()
    loadRooms$ = this.actions$.ofType(actions.ActionTypes.LOAD_ROOMS)
      .pipe(
        switchMap(() => {
          return this.roomService
            .getRooms()
            .pipe(
              map((resp: any) => new actions.LoadRoomsSuccess(resp.rooms)),  
              catchError(error => of(new actions.ServerError(error)))
            );
          })
      )

    @Effect()
    saveRoom$ = this.actions$.ofType(actions.ActionTypes.SAVE_ROOM)
      .pipe(
        switchMap((action: actions.SaveRoom) => {
          return this.roomService
            .saveRoom(action.payload)
            .pipe(
              map(resp => {
                  return new actions.ServerSuccess();
              }),  
              catchError(error => of(new actions.ServerError(error)))
            );
          })
      )
}