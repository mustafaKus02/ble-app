import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { KatCatiPage } from './kat-cati';

@NgModule({
  declarations: [
    KatCatiPage,
  ],
  imports: [
    IonicPageModule.forChild(KatCatiPage),
  ],
})
export class KatCatiPageModule {}
