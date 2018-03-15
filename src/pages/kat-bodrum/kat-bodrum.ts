import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {geoJSON, latLng, LatLng, MapOptions, tileLayer} from "leaflet";
import {HttpClient} from "@angular/common/http";

/**
 * Generated class for the KatBodrumPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-kat-bodrum',
  templateUrl: 'kat-bodrum.html',
})
export class KatBodrumPage {

  alanData:any;
  yolData:any;
  options:MapOptions;
  zoom:number=18;
  center:LatLng;

  constructor(public navCtrl: NavController, http:HttpClient) {
    http.get("assets/data/Alan_Kat1.json").subscribe(data=>{
      this.alanData=data;

      http.get("assets/data/Yol_Kat1.json").subscribe(data=>{
        this.yolData=data;
        this.options = {
          layers: [
            //geoJSON((this.alanData)),
            //geoJSON((this.yolData))
          ],
          zoom: 17,
          center: latLng( 38.766291,35.409356)
        };
      })

    })
  }

  zoomToLocation(){
    this.center=latLng(38,35);
  }

  fitGeoJSON(){
    this.center=latLng( 38.766291,35.409356);
    this.zoom=18;
  }

}
