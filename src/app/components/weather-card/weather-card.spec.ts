import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WeatherCard } from './weather-card';

describe('WeatherCard', () => {
  let component: WeatherCard;
  let fixture: ComponentFixture<WeatherCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeatherCard],
    }).compileComponents();

    fixture = TestBed.createComponent(WeatherCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('deve criar o componente', () => {
    expect(component).toBeTruthy();
  });

  it('deve iniciar com weather null', () => {
    expect(component.weather).toBeNull();
  });

  it('deve iniciar com loading false', () => {
    expect(component.loading).toBe(false);
  });

  it('deve receber dados do clima via @Input', () => {
    component.weather = {
      name: 'Rio de Janeiro',
      sys: { country: 'BR' },
      main: { temp: 30, humidity: 80, feels_like: 32 },
      weather: [{ icon: '01d', description: 'céu limpo' }],
      wind: { speed: 2.5 }
    };
    expect(component.weather.name).toBe('Rio de Janeiro');
    expect(component.weather.main.temp).toBe(30);
  });

  it('deve receber loading true via @Input', () => {
    component.loading = true;
    expect(component.loading).toBe(true);
  });

  it('deve ter loading false por padrão', () => {
    component.loading = false;
    expect(component.loading).toBe(false);
  });
});