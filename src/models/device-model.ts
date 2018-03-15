import {LocationModel} from "./location-model";

export class DeviceModel{
  name:string;
  id:string;
  advertising:number[];
  rssi:number;
  location:LocationModel;

  constructor(){
    this.location=new LocationModel();
  }
}
