import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import { map, switchMap, catchError } from 'rxjs/operators';

import { RoomService} from '../../services/room.service';
import * as actions from './../actions/rooms';
import { crud } from './../../../common/enums';

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
              map((resp: any) => new actions.DeleteRoomSuccess(action.payload)),  
              catchError(error => of(new actions.ServerError(error)))
            );
          })
      )

    @Effect()
    loadRooms$ = this.actions$.ofType(actions.ActionTypes.LOAD_ROOMS)
      .pipe(
        switchMap((action: actions.FetchRooms) => {
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
              map((resp: any) => {
                  const room = resp.room;
                  return resp.type === crud.create ? new actions.SaveRoomSuccess(room) : new actions.SaveRoomSuccess(room);
              }),  
              catchError(error => of(new actions.ServerError(error)))
            );
          })
      )
}