import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Room } from '../../models/Room';

@Component({
  selector: 'edit-room',
  templateUrl: 'search-room.html'
})
export class EditRoom implements OnInit {
    rooms: Room[]

    constructor(public navCtrl: NavController) {

    }

    ngOnInit() {

    }
}
