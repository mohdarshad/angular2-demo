import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import { HttpModule }    from '@angular/http';
import { FormsModule }   from '@angular/forms';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

import { AppComponent } from './app.component';
import { HeaderandnavigationComponent } from './shared/headerandnavigation/headerandnavigation.component';
import { LocationserviceComponent } from './locationservice/locationservice.component';
import { DriverserviceComponent } from './driverservice/driverservice.component';
import { WeatherserviceComponent } from './weatherservice/weatherservice.component';
import {WeatherServiceProvider} from './weatherservice/weather.service'

const appRoutes : Routes =  [
  {path : 'locationservice', component : LocationserviceComponent},
  {path : 'driverservice', component : DriverserviceComponent},
  {path : 'weather', component : WeatherserviceComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderandnavigationComponent,
    LocationserviceComponent,
    DriverserviceComponent,
    WeatherserviceComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    LeafletModule.forRoot()
  ],
  providers: [WeatherServiceProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
