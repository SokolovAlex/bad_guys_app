import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { State } from '../../store/reducers';
import * as Selectors from '../../store/selectors/rooms';
import { ChangeState } from '../../store/actions/rooms';

import { PageStates } from '../../models/Enums';
import { Room } from '../../models/Room';

@Component({
    selector: 'rooms',
    templateUrl: 'rooms.html'
})
export class RoomsPage implements OnInit {
    state$: Observable<PageStates>;

    rooms: Room[];

    PageStates = PageStates;

    constructor(public navCtrl: NavController, public navParams: NavParams, private store: Store<State>) {
        this.state$ = store.select(Selectors.getState);
    }

    ngOnInit() {
        this.store.dispatch(new ChangeState(PageStates.Loading));
        setTimeout(() => {
            this.store.dispatch(new ChangeState(PageStates.List));
        }, 2000);
    }

    onCreateNew(){
        this.store.dispatch(new ChangeState(PageStates.Edit));
    }
}
