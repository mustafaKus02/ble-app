import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { KatUcPage } from './kat-uc';

@NgModule({
  declarations: [
    KatUcPage,
  ],
  imports: [
    IonicPageModule.forChild(KatUcPage),
  ],
})
export class KatUcPageModule {}
