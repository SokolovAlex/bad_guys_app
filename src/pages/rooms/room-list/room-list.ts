import { Component, OnInit } from '@angular/core';

import { Room } from '../../../models/Room';

@Component({
  selector: 'room-list',
  templateUrl: 'room-list.html'
})
export class RoomList implements OnInit {
    rooms: Room[]

    constructor() {
    }

    ngOnInit() {

    }

    create() {
    }
}
