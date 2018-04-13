import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { map, switchMap, catchError } from 'rxjs/operators';

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

import * as fromRoot from '../../../app/store';
import * as movieActions from '../actions/movie.action';
import * as fromServices from '../../services';

@Injectable()
export class MoviesEffects {
  constructor(
    private actions$: Actions,
    private movieService: fromServices.MoviesService
  ) {}

  @Effect()
  loadMovies$ = this.actions$.ofType(movieActions.LOAD_MOVIES).pipe(
    switchMap(() => {
      return this.movieService
        .getMovies()
        .pipe(
          map(movies => new movieActions.LoadMoviesSuccess(movies)),
          catchError(error => of(new movieActions.LoadMoviesFail(error)))
        );
    })
  );

}