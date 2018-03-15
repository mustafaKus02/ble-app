import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';


import { KatGiris } from '../pages/kat-giris/kat-giris';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {LeafletModule} from "@asymmetrik/ngx-leaflet";
import {HttpClientModule} from "@angular/common/http";
import {KatBir} from "../pages/kat-bir/kat-bir";
import {KatBodrumPage} from "../pages/kat-bodrum/kat-bodrum";
import {KatIkiPage} from "../pages/kat-iki/kat-iki";
import {ComponentsModule} from "../components/components.module";
import {BLE} from "@ionic-native/ble";

@NgModule({
  declarations: [
    MyApp,
    KatBir,
    KatIkiPage,
    KatGiris,
    KatBodrumPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    LeafletModule.forRoot(),
    HttpClientModule,
    ComponentsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    KatGiris,
    KatBir,
    KatIkiPage,
    KatBodrumPage,
    KatGiris,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BLE,
    {provide: ErrorHandler, useClass: IonicErrorHandler}

  ]
})
export class AppModule {}
