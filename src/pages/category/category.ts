import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TopicsPage } from '../topics/topics';

@IonicPage()
@Component({
  selector: 'page-category',
  templateUrl: 'category.html',
})
export class CategoryPage {
  categories: Array<Object> = [
    {
      title: 'Doctor',
      imageUrl: 'http://www.hospitalvozandes.com/assets/public/images/downloads/img_445_doctor.jpg?1473875896'
    },
    {
      title: 'Dentist',
      imageUrl: 'https://www.frequencevih.ca/wp-content/uploads/2017/01/Dental-Patient-During-Her-Dentist-Appointment-GSK-200x200.jpg'
    },
    {
      title: 'Makeup',
      imageUrl: 'http://images.locanto.net/1469386339/Professional-Makeup-Artist-in-Delhi-Makeup-Artist_2.jpg'
    },
    {
      title: 'Barber',
      imageUrl: 'https://igx.4sqi.net/img/general/200x200/QNlF1Cwf2-GmKAalmRtwA_LwLhiTD8MP8Rnc2CcBrlw.jpg'
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goToTopics(){
    this.navCtrl.push(TopicsPage)
  }

}
