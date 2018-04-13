import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import { map, switchMap, catchError } from 'rxjs/operators';

import { RoomService} from '../../services/room';
import * as actions from './../actions/rooms';

@Injectable()
export class RoomsEffects {
    constructor(
        private actions$: Actions,
        private roomService: RoomService
    ) { }

    @Effect()
    saveRoom$ = this.actions$.ofType(actions.ActionTypes.SAVE_ROOM)
      .pipe(
        switchMap((action: actions.SaveRoom) => {
          return this.roomService
            .saveRoom(action.payload)
            .pipe(
              map(room => new actions.SaveRoomSuccess(room)),
              catchError(error => of(new actions.ServerError(error)))
            );
          })
      )
}