import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { KatYediPage } from './kat-yedi';

@NgModule({
  declarations: [
    KatYediPage,
  ],
  imports: [
    IonicPageModule.forChild(KatYediPage),
  ],
})
export class KatYediPageModule {}
