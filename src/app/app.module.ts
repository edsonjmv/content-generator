import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import * as firebase from 'firebase';
import { Facebook } from '@ionic-native/facebook';
import { HttpModule } from '@angular/http';
import { SwingModule } from 'angular2-swing';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CategoryPage } from '../pages/category/category';
import { TopicsPage } from '../pages/topics/topics';
import { RecurrencePage } from '../pages/recurrence/recurrence';
import { SuggestionsPage } from '../pages/suggestions/suggestions';
import { SessionProvider } from '../providers/session/session';

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
    HttpModule,
    SwingModule,
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
    Facebook,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SessionProvider
  ]
})
export class AppModule {}
