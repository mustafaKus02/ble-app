import {Component, NgZone} from '@angular/core';

import {KatBir} from '../kat-bir/kat-bir';
import {KatGiris} from '../kat-giris/kat-giris';
import {KatBodrumPage} from "../kat-bodrum/kat-bodrum";
import {KatIkiPage} from "../kat-iki/kat-iki";

import {DeviceModel} from "../../models/device-model";
import {LocationModel} from "../../models/location-model";

import {Vector, Circle, laterate} from "lateration";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AlertController, ToastController} from "ionic-angular";
import {BLE} from "@ionic-native/ble";

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

  devices:DeviceModel[]=[];
  statusMessage:string="";

  httpBase:string="http//10.6.0.35:59961/api/Mac/";

  POSITION:Vector=new Vector(0,0);

  TIME_IN_MS_FOR_INTERVAL:number=10000;
  TIME_IN_SECOND_FOR_SCAN:number=7;


  constructor(private http:HttpClient,
              private toastCtrl:ToastController,
              private ble:BLE,
              private ngZone:NgZone,
              private alertCtrl:AlertController) {

    let hideFooterTimeOut=setInterval(()=>{
      this.startScan();
    },this.TIME_IN_MS_FOR_INTERVAL)

  }

  ionViewDidEnter(){

  }

  startScan() {
    this.ble.isEnabled().then((result)=>{
      if(result){
        this.scan();
      }else{
        this.enableThenScan();
      }
    },(error)=>{
       console.log(error);
    });

  }

  enableThenScan(){
    this.ble.enable().then((data)=>{
      if(data=="OK"){
        this.scan();
      }
    },(error)=>{
      this.bleNotActivatedAlert();
    });

  }

  scan(){
    this.devices=[];
    this.ble.scan([],this.TIME_IN_SECOND_FOR_SCAN).subscribe(
      device=>this.onDeviceDiscovered(device)
    )

  }

  findLocationByTrilateration(devices: DeviceModel[]) {

    if (devices.length >= 3) {
      const beacons = [];
      for (let i: number = 0; i < 3; i++) {
        let beaconItem = new Circle(new Vector(parseFloat(devices[i].location.lat.replace(",", ".")),
          parseFloat(devices[i].location.lng.replace(",", "."))),
          this.calculateDistanceFromRSSI(devices[i].rssi, -65)
        );
        beacons.push(beaconItem);
      }
      debugger;
      this.POSITION = laterate(beacons);
      console.log(this.POSITION);
    }
  }

  calculateDistanceFromRSSI(rssi, txPower) {

    //hard coded power value. Usually ranges between -59 to -65

    if (rssi == 0) {
      return -1.0;
    }

    var ratio = rssi * 1.0 / txPower;
    if (ratio < 1.0) {
      return Math.pow(ratio, 10);
    }
    else {
      var distance = (0.89976) * Math.pow(ratio, 7.7095) + 0.111;
      return distance;
    }
  }

  onDeviceDiscovered(device) {

    this.ngZone.run(() => {

      let item: DeviceModel = new DeviceModel();
      item.id = device.id;
      item.advertising = device.advertising;
      item.name = device.name;
      item.rssi = device.rssi;

      let httpHeaders = new HttpHeaders()
        .set("Content-Type", "application/x-www-form-urlencoded");
      this.http.get<LocationModel>(this.httpBase + device.id, { headers: httpHeaders }).subscribe(data => {
          //console.log(data);
          item.location = data

          if (device.name == "xBeacon") {
            this.devices.push(item);
          }


          this.findLocationByTrilateration(this.devices);
        },
        error => {
          console.log(error);
        });

    });
  }

  bleNotActivatedAlert() {
    let alert = this.alertCtrl.create({
      title: 'Bluetooth açılamadı',
      subTitle: 'Açmak için "Aç" tuşuna basınız.',
      buttons: [
        {
          text: 'Vazgeç',
          role: 'cancel',
          handler: () => {
            let toast = this.toastCtrl.create({
              message: 'Bluetooth açılamadı.',
              position: 'middle',
              duration: 5000
            });
            toast.present();
          }
        },
        {
          text: 'Aç',
          handler: () => {
            this.startScan();
          }
        }
      ]
    });
    alert.present();
  }

}
