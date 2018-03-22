import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { EditRoom } from './edit-room';
import { Room } from '../../models/Room';

@Component({
  selector: 'search-room',
  templateUrl: 'search-room.html'
})
export class RoomsPage implements OnInit {
    rooms: Room[]

    constructor(public navCtrl: NavController, public navParams: NavParams) {

    }

    ngOnInit() {

    }

    newRoom(){
      this.navCtrl.push(EditRoom);
    }
}
