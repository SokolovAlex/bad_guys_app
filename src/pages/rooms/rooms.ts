import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/do';

import { AppState } from '../../store/reducers';
import * as Selectors from '../../store/selectors/rooms';
import { ChangeState, SaveRoom } from '../../store/actions/rooms';

import { PageStates } from '../../models/Enums';
import { Room } from '../../models/Room';

@Component({
    selector: 'rooms',
    templateUrl: 'rooms.html'
})
export class RoomsPage implements OnInit {
    state$: Observable<PageStates>;

    rooms$: Observable<Room[]>;

    PageStates = PageStates;

    constructor(public navCtrl: NavController, public navParams: NavParams, private store: Store<AppState>) {
        this.state$ = store.select(Selectors.getState);
        this.rooms$ = this.store.select(Selectors.getRooms);
    }

    ngOnInit() {
        this.store.dispatch(new ChangeState(PageStates.Loading));
        setTimeout(() => {
            this.store.dispatch(new ChangeState(PageStates.List));
        }, 100);
    }

    openEdit(room: Room){
        this.store.dispatch(new ChangeState(PageStates.Edit));
    }

    onCreateNew(room: Room){
        this.store.dispatch(new SaveRoom(room));
    }
}
