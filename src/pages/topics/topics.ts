import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RecurrencePage } from '../recurrence/recurrence';

@IonicPage()
@Component({
  selector: 'page-topics',
  templateUrl: 'topics.html',
})
export class TopicsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goToRecurrence(){
    this.navCtrl.push(RecurrencePage)
  }

}
