import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-forecast',
  imports: [CommonModule],
  templateUrl: './forecast.html',
  styleUrl: './forecast.css'
})
export class Forecast {
  @Input() forecastData: any = null;

  getDailyForecasts() {
    if (!this.forecastData) return [];
    const daily: any[] = [];
    const seen = new Set<string>();

    for (const item of this.forecastData.list) {
      const date = item.dt_txt.split(' ')[0];
      if (!seen.has(date) && daily.length < 5) {
        seen.add(date);
        daily.push(item);
      }
    }
    return daily;
  }
}