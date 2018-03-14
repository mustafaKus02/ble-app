import {Component, Input, OnInit} from '@angular/core';
import {LatLng, MapOptions, tileLayer, geoJSON, latLng} from "leaflet";
import {NavController} from "ionic-angular";
import {HttpClient} from "@angular/common/http";

/**
 * Generated class for the LeafletMapComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'leaflet-map',
  templateUrl: 'leaflet-map.html'
})
export class LeafletMapComponent{

  alanData:any;
  yolData:any;
  @Input() alanURL:string;
  @Input() yolURL:string;
  @Input() title:string;
  options:MapOptions;
  zoom:number=18;
  center:LatLng;
  http:HttpClient;

  constructor(public navCtrl: NavController, http:HttpClient) {

    this.http=http;


  }


  ionViewDidEnter(){
    this.fitGeoJSON();
  }

  ionViewAfterInit(){
    this.http.get("assets/data/"+this.alanURL+".json").subscribe(data=>{
      this.alanData=data;

      debugger;

      this.http.get("assets/data/"+this.yolURL+".json").subscribe(data=>{
        this.yolData=data;
        this.options = {
          layers: [
            tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'),
            geoJSON((this.alanData)),
            geoJSON((this.yolData))
          ],
          zoom:18,
          center: latLng( 38.766291,35.409356)
        };
      })

    });
  }



  zoomToLocation(){
    this.center=latLng(38,35);
  }

  fitGeoJSON(){
    this.center=latLng( 38.766291,35.409356);
    this.zoom=18;
  }


}
