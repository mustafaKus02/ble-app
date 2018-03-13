import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {geoJSON, latLng, tileLayer} from "leaflet";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'page-home',
  templateUrl: 'kat-giris.html'
})
export class KatGiris {

  alanData:any;
  yolData:any;
  options:any;

  constructor(public navCtrl: NavController, http:HttpClient) {
        http.get("assets/data/Alan_Kat0.json").subscribe(data=>{
          this.alanData=data;

          http.get("assets/data/Yol_Kat0.json").subscribe(data=>{
            this.yolData=data;
            this.options = {
              layers: [
                tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'),
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
