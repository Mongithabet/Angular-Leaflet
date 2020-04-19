import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit {
  map;
  smallIcon = new L.Icon({
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-icon.png',
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-icon-2x.png',
    iconSize:    [25, 41],
    iconAnchor:  [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    shadowSize:  [41, 41]
  });
  constructor() { }

  ngAfterViewInit(): void {
    this.createMap();
  }
 createMap(){
   const parcThabor = {
     lat:33.8871054,
     lng: 10.1031313,
   };
   const zoomLevel = 12;
   this.map=L.map('map', {
    center: [parcThabor.lat,parcThabor.lng],
    zoom: zoomLevel
});
const mainLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  minZoom: 12,
  maxZoom: 50,
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});
mainLayer.addTo(this.map);
const desc=`TECHNOPC`
this.addMarker(parcThabor,desc,true);
 }

addMarker(coords,text,open){
  const marker = L.marker([coords.lat,coords.lng],{icon:this.smallIcon});
 if(open){
  marker.addTo(this.map).bindPopup(text).openPopup();

 }else{
  marker.addTo(this.map).bindPopup(text);
 }
}
}