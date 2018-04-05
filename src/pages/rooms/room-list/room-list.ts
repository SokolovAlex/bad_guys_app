import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Room } from '../../../models/Room';

@Component({
  selector: 'room-list',
  templateUrl: 'room-list.html'
})
export class RoomList implements OnInit {
    rooms: Room[];

    @Output() openEdit = new EventEmitter();

    constructor() { }

    ngOnInit() { }

}
