import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {geoJSON, latLng, LatLng, MapOptions} from "leaflet";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'page-kat-bir',
  templateUrl: 'kat-bir.html'
})
export class KatBir {

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
            geoJSON((this.alanData)),
            geoJSON((this.yolData))
          ],
          zoom: 17,
          center: latLng( 38.766291,35.409356)
        };
      })

    })
  }

  ionViewDidEnter(){
    this.fitGeoJSON();
  }



  zoomToLocation(){
    this.center=latLng(38,35);
  }

  fitGeoJSON(){
    this.center=latLng( 38.766291,35.409356);
    this.zoom=18;
  }

}
