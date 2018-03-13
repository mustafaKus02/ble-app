import { Component } from '@angular/core';

import {KatBir} from '../kat-bir/kat-bir';
import { ContactPage } from '../contact/contact';
import {KatGiris} from '../kat-giris/kat-giris';
import {KatBodrumPage} from "../kat-bodrum/kat-bodrum";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab0Root = KatGiris;
  tab1Root = KatBir;
  tab2Root = ContactPage;
  tab3Root = KatBir;
  tab4Root = ContactPage;
  tab5Root = KatBir;
  tab6Root = ContactPage;
  tab7Root = KatBir;
  tab8Root = ContactPage;
  tab9Root = KatBodrumPage;


  constructor() {

  }
}
