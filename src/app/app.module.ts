import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CategoryPage } from '../pages/category/category';
import { TopicsPage } from '../pages/topics/topics';
import { RecurrencePage } from '../pages/recurrence/recurrence';
import { SuggestionsPage } from '../pages/suggestions/suggestions';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CategoryPage,
    TopicsPage,
    RecurrencePage,
    SuggestionsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CategoryPage,
    TopicsPage,
    RecurrencePage,
    SuggestionsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
