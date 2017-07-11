import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SuggestionsPage } from '../suggestions/suggestions';

@IonicPage()
@Component({
  selector: 'page-recurrence',
  templateUrl: 'recurrence.html',
})
export class RecurrencePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goToSuggestions() {
    this.navCtrl.push(SuggestionsPage)
  }

}
