import { NgModule } from '@angular/core';
import { LeafletMapComponent } from './leaflet-map/leaflet-map';
import {IonicModule} from "ionic-angular";
import {LeafletModule} from "@asymmetrik/ngx-leaflet";
@NgModule({
	declarations: [LeafletMapComponent],
	imports: [IonicModule, LeafletModule],
	exports: [LeafletMapComponent]
})
export class ComponentsModule {}
