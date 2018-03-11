import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'main-menu',
  templateUrl: 'menu.html'
})
export class MenuPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
}
