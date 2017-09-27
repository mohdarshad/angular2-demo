import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class WeatherServiceProvider{
  constructor(private _http : Http){

  }

  getCityWeather(city) : Promise<any>{
    let url = "http://api.openweathermap.org/data/2.5/weather?q=";
    url =  url+city+"&appid=2b886295a261886bade3bff009a7c185";
    return this._http.get(url)
    .toPromise()
    .then(res => res.json())
    .catch(this.handleError)
}

  handleError(error:any){
    return Promise.reject(error.message || error);
  }
}
