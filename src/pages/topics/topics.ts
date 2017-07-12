import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RecurrencePage } from '../recurrence/recurrence';

@IonicPage()
@Component({
  selector: 'page-topics',
  templateUrl: 'topics.html',
})
export class TopicsPage {
  topics: Array<Object> = [
    {
      title: 'Fun',
      imageUrl: 'https://s-media-cache-ak0.pinimg.com/originals/24/c3/f9/24c3f9bbcb3d2ce385521414900b5757.png'
    },
    {
      title: 'Life',
      imageUrl: 'https://s-media-cache-ak0.pinimg.com/originals/24/c3/f9/24c3f9bbcb3d2ce385521414900b5757.png'
    },
    {
      title: 'Business',
      imageUrl: 'https://s-media-cache-ak0.pinimg.com/originals/24/c3/f9/24c3f9bbcb3d2ce385521414900b5757.png'
    },
    {
      title: 'Debate',
      imageUrl: 'https://s-media-cache-ak0.pinimg.com/originals/24/c3/f9/24c3f9bbcb3d2ce385521414900b5757.png'
    },
    {
      title: 'Discussion',
      imageUrl: 'https://s-media-cache-ak0.pinimg.com/originals/24/c3/f9/24c3f9bbcb3d2ce385521414900b5757.png'
    },
    {
      title: 'Project',
      imageUrl: 'https://s-media-cache-ak0.pinimg.com/originals/24/c3/f9/24c3f9bbcb3d2ce385521414900b5757.png'
    },
    {
      title: 'Social',
      imageUrl: 'https://s-media-cache-ak0.pinimg.com/originals/24/c3/f9/24c3f9bbcb3d2ce385521414900b5757.png'
    },
    {
      title: 'Random',
      imageUrl: 'https://s-media-cache-ak0.pinimg.com/originals/24/c3/f9/24c3f9bbcb3d2ce385521414900b5757.png'
    },
    {
      title: 'Controversial',
      imageUrl: 'https://s-media-cache-ak0.pinimg.com/originals/24/c3/f9/24c3f9bbcb3d2ce385521414900b5757.png'
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goToRecurrence() {
    this.navCtrl.push(RecurrencePage)
  }

}
