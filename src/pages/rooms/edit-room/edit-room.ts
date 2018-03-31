import { Component, OnInit } from '@angular/core';

import { Room } from '../../../models/Room';

@Component({
  selector: 'edit-room',
  templateUrl: 'edit-room.html'
})
export class EditRoom implements OnInit {
    rooms: Room[]

    constructor() {
      
    }

    ngOnInit() {

    }

    create() {
    }
}
