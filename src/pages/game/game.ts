import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'game',
  templateUrl: 'game.html'
})
export class GamePage {
  selectedItem: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.selectedItem = navParams.get('item');
  }

  itemTapped(event, item) {
    this.navCtrl.push(GamePage, {
      item: item
    });
  }
}
