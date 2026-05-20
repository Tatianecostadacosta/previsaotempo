import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Weather {
  private apiKey = 'b79c84d040428a271019ef42afe59bd8';
  private apiUrl = 'https://api.openweathermap.org/data/2.5';

  constructor(private http: HttpClient) {}

  getWeather(city: string): Observable<any> {
    return this.http.get(
      `${this.apiUrl}/weather?q=${city}&appid=${this.apiKey}&units=metric&lang=pt_br`
    );
  }

  getForecast(city: string): Observable<any> {
    return this.http.get(
      `${this.apiUrl}/forecast?q=${city}&appid=${this.apiKey}&units=metric&lang=pt_br`
    );
  }
}