import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Room } from '../../../models/Room';

@Component({
  selector: 'edit-room',
  templateUrl: 'edit-room.html'
})
export class EditRoom implements OnInit {
    rooms: Room[];

    title: string;
    description: string;

    @Output() save = new EventEmitter();

    constructor() {
      
    }

    ngOnInit() {

    }

    onSave() {
        this.save.emit(new Room(this.title, this.description));
    }
}
