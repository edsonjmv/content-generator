import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SuggestionsPage } from '../suggestions/suggestions';

@IonicPage()
@Component({
  selector: 'page-recurrence',
  templateUrl: 'recurrence.html',
})
export class RecurrencePage {
  recurrences: Array<Object> = [
    {
      title: 'Every day',
      imageUrl: 'https://s-media-cache-ak0.pinimg.com/originals/24/c3/f9/24c3f9bbcb3d2ce385521414900b5757.png'
    },
    {
      title: 'Every two days',
      imageUrl: 'https://s-media-cache-ak0.pinimg.com/originals/24/c3/f9/24c3f9bbcb3d2ce385521414900b5757.png'
    },
    {
      title: 'Twice a week',
      imageUrl: 'https://s-media-cache-ak0.pinimg.com/originals/24/c3/f9/24c3f9bbcb3d2ce385521414900b5757.png'
    },
    {
      title: 'Once a week',
      imageUrl: 'https://s-media-cache-ak0.pinimg.com/originals/24/c3/f9/24c3f9bbcb3d2ce385521414900b5757.png'
    },
    {
      title: 'Twice a month',
      imageUrl: 'https://s-media-cache-ak0.pinimg.com/originals/24/c3/f9/24c3f9bbcb3d2ce385521414900b5757.png'
    },
    {
      title: 'Once a month',
      imageUrl: 'https://s-media-cache-ak0.pinimg.com/originals/24/c3/f9/24c3f9bbcb3d2ce385521414900b5757.png'
    }
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goToSuggestions() {
    this.navCtrl.push(SuggestionsPage)
  }

}
