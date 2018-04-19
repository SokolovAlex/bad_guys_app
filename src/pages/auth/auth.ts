import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'auth',
  templateUrl: 'auth.html'
})
export class LoginPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) { }

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
}
