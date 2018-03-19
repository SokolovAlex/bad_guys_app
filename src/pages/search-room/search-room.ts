import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Room } from '../../models/Room';

@Component({
  selector: 'search-room',
  templateUrl: 'search-room.html'
})
export class SearchRoomPage {
  rooms: Room[]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
      
  }

  createRoom() {

  }

  removeRoom() {
    
  }

  joinRoom() {
    
  }

  leaveRoom() {
    
  }
}
