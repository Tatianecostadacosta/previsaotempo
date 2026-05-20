import { Component, signal } from '@angular/core';
import { CommonModule, DecimalPipe, DatePipe } from '@angular/common';
import { Header } from './components/header/header';
import { Search } from './components/search/search';
import { WeatherCard } from './components/weather-card/weather-card';
import { Forecast } from './components/forecast/forecast';
import { Weather } from './services/weather';

@Component({
  selector: 'app-root',
  imports: [CommonModule, DecimalPipe, DatePipe, Header, Search, WeatherCard, Forecast],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  weatherData = signal<any>(null);
  forecastData = signal<any>(null);
  loading = signal<boolean>(false);

  constructor(private weatherService: Weather) {}

  onSearchCity(city: string) {
    this.loading.set(true);
    this.weatherData.set(null);
    this.forecastData.set(null);

    this.weatherService.getWeather(city).subscribe({
      next: (data) => {
        this.weatherData.set(data);
        this.loading.set(false);
      },
      error: () => {
        this.loading.set(false);
        alert('Cidade não encontrada!');
      }
    });

    this.weatherService.getForecast(city).subscribe({
      next: (data) => {
        this.forecastData.set(data);
      }
    });
  }
}