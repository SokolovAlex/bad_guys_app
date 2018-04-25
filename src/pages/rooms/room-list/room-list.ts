import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

import { Room } from '../../../models/Room';

@Component({
  selector: 'room-list',
  templateUrl: 'room-list.html'
})
export class RoomList implements OnInit {
    @Input() rooms: Room[];

    @Output() edit = new EventEmitter();
    @Output() remove = new EventEmitter();
    @Output() join = new EventEmitter();

    constructor() { }

    ngOnInit() { }
}
