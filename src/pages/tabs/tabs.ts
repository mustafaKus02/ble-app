import { Component } from '@angular/core';

import {KatBir} from '../kat-bir/kat-bir';
import {KatGiris} from '../kat-giris/kat-giris';
import {KatBodrumPage} from "../kat-bodrum/kat-bodrum";
import {KatIkiPage} from "../kat-iki/kat-iki";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab0Root = KatGiris;
  tab1Root = KatBir;
  tab2Root = KatIkiPage;
  tab3Root = KatBir;
  tab4Root = KatGiris
  tab5Root = KatBir;
  tab6Root = KatGiris;
  tab7Root = KatBir;
  tab8Root = KatGiris;
  tab9Root = KatBodrumPage;


  constructor() {

  }
}
