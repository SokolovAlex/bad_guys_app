import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Room } from '../../../models/Room';

@Component({
  selector: 'room-list',
  templateUrl: 'room-list.html'
})
export class RoomList implements OnInit {
    @Input() rooms: Room[];

    @Output() openEdit = new EventEmitter();

    constructor() { }

    ngOnInit() { }
}
