import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RecurrencePage } from './recurrence';

@NgModule({
  declarations: [
    RecurrencePage,
  ],
  imports: [
    IonicPageModule.forChild(RecurrencePage),
  ],
  exports: [
    RecurrencePage
  ]
})
export class RecurrencePageModule {}
