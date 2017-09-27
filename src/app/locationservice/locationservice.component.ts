import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-locationservice',
  templateUrl: './locationservice.component.html',
  styleUrls: ['./locationservice.component.css']
})
export class LocationserviceComponent implements OnInit {

  private options: any;

  constructor() { }

  ngOnInit() {
  this.options = {
      layers: [
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        })
      ],
      zoom:10,
      center: L.latLng([ 46.879966, -121.726909 ])
    };
  }

}
