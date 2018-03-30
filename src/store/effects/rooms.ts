import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/fromPromise';
import 'rxjs/add/operator/switchMap';

import * as rooms from './../actions/rooms';

@Injectable()
export class RoomsEffects {
    constructor(
        private actions$: Actions
    ) { }

    // @Effect() loadInitConfig$ = this.actions$
    //     .ofType(rooms.ActionTypes.LOAD_ROOMS)
    //     .map<Action, void>(toPayload)
    //     .switchMap(() => this.settingsService.loadInitConfiguration()
    //         .map(settings => new rooms.LoadInitConfigurationCompleteAction(settings))
    //         .catch(error => Observable.of(new rooms.LoadInitConfigurationFailAction({ error })))
    //     );
}