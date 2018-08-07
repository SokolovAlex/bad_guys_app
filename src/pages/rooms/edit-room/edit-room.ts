import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Room } from '../../../models/Room';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'edit-room',
  templateUrl: 'edit-room.html'
})
export class EditRoom implements OnInit {
    rooms: Room[];

    title: string;
    description: string;

    @Output() save = new EventEmitter();

    constructor(private userService: UserService) { }

    ngOnInit() {}

    async onSave() {
        var user = await this.userService.getUser();
        this.save.emit(new Room(this.title, this.description, [ user ]));
    }
}
