import { Component, OnInit } from '@angular/core';
import {WeatherServiceProvider} from './weather.service'

@Component({
  selector: 'app-weatherservice',
  templateUrl: './weatherservice.component.html',
  styleUrls: ['./weatherservice.component.css']
})
export class WeatherserviceComponent implements OnInit {

  private noResult : boolean = false;
  private searchMade :  boolean =  false;

  private searchFor : string;
  private city : string = "";
  private lat : number;
  private lng : number;
  private description : string = "";
  private tempMin : number;
  private tempMax : number;
  private visibility : number;
  private wind : number;
  private icon :  string = "http://openweathermap.org/img/w/";

  constructor(private weatherServiceProvider : WeatherServiceProvider) { }

  ngOnInit() {
  }

  getCityWeather(){

    this.icon = "http://openweathermap.org/img/w/";
    this.weatherServiceProvider.getCityWeather(this.searchFor)
      .then(res =>{
          this.searchMade =  true;
          this.noResult =  false;
          console.log(JSON.stringify(res));
          this.city = res.name;
          this.lat =  res.coord.lat;
          this.lng =  res.coord.lon;
          this.description =  res.weather[0].description;
          this.tempMax = res.main.temp_max;
          this.tempMin =  res.main.temp_min;
          this.visibility = res.visibility;
          this.wind = res.wind.speed;
          this.icon = this.icon+res.weather[0].icon+".png";
      })
      .catch(error => this.handleError(error))
  }

  handleError(error:any){
    this.searchMade =  true;
    this.noResult =  true;
    this.city =  this.searchFor;
    console.log("error"+error);
  }

}
