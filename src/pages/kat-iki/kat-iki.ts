import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {geoJSON, latLng} from "leaflet";
import {HttpClient} from "@angular/common/http";

/**
 * Generated class for the KatIkiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-kat-iki',
  templateUrl: 'kat-iki.html',
})
export class KatIkiPage {

  alanData:any;
  yolData:any;
  options:any;

  constructor(public navCtrl: NavController, http:HttpClient) {
    http.get("assets/data/Alan_Kat2.json").subscribe(data=>{
      this.alanData=data;

      http.get("assets/data/Yol_Kat2.json").subscribe(data=>{
        this.yolData=data;
        this.options = {
          layers: [
            geoJSON((this.alanData)),
            geoJSON((this.yolData))
          ],
          zoom: 17,
          center: latLng( 38.766291,35.409356)
        };
      })

    })
  }


}
