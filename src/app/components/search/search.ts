import { Component, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-search',
  imports: [],
  templateUrl: './search.html',
  styleUrl: './search.css'
})
export class Search {
  @ViewChild('cityInput') cityInput!: ElementRef;
  @Output() searchCity = new EventEmitter<string>();

  onSearch(event: Event) {
    event.preventDefault();
    const value = this.cityInput.nativeElement.value.trim();
    console.log('Buscando:', value);
    if (value.length > 0) {
      this.searchCity.emit(value);
    }
  }
}