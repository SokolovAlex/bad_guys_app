import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { EditRoom } from './edit-room/edit-room';
import { RoomList } from './room-list/room-list';

import { State } from '../../store/reducers';
import * as Selectors from '../../store/selectors/rooms';
import { ChangeState } from '../../store/actions/rooms';

import { PageStates } from '../../models/Enums';
import { Room } from '../../models/Room';

@Component({
  selector: 'rooms',
  templateUrl: 'rooms.html'
})
export class RoomsPage {
    state$: Observable<PageStates>;

    rooms: Room[];

    PageStates = PageStates;

    constructor(public navCtrl: NavController, public navParams: NavParams, private store: Store<State>) {
      this.state$ = store.select(Selectors.getState);

      // this.state$ = store.select((sate) => {
      //   debugger;
      // });

      console.log(this.state$);
      
    }

    newRoom(){
      this.store.dispatch(new ChangeState(PageStates.Edit));
      // this.navCtrl.push(EditRoom);
    }
}
