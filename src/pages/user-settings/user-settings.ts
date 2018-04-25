import { Component, OnInit } from '@angular/core';

import { UserService } from '../../services/user.service';

@Component({
  selector: 'user-settings',
  templateUrl: 'user-settings.html'
})
export class UserSettingsPage implements OnInit {
    applicationId: string

  constructor(private userService: UserService) { }

  authByGoogle() {
    fetch('auth/google', {
        method: 'get'
    })
    .then((data) => {
        debugger;
    })
    .catch((err) => {
        debugger;
    });
  }

  getInfo() {
      this.userService.getId().then((applicationId) => this.applicationId = applicationId);
  }

  ngOnInit(): void {
      this.getInfo();
  }
}
