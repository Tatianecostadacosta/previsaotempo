import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Forecast } from './forecast';

describe('Forecast', () => {
  let component: Forecast;
  let fixture: ComponentFixture<Forecast>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Forecast],
    }).compileComponents();

    fixture = TestBed.createComponent(Forecast);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deve retornar lista vazia quando forecastData for null', () => {
    component.forecastData = null;
    const result = component.getDailyForecasts();
    expect(result.length).toBe(0);
  });

  it('deve retornar no máximo 5 dias', () => {
    component.forecastData = {
      list: [
        { dt_txt: '2024-01-01 12:00:00', main: { temp: 25 }, weather: [{ icon: '01d', description: 'sol' }] },
        { dt_txt: '2024-01-02 12:00:00', main: { temp: 22 }, weather: [{ icon: '02d', description: 'nublado' }] },
        { dt_txt: '2024-01-03 12:00:00', main: { temp: 20 }, weather: [{ icon: '03d', description: 'chuva' }] },
        { dt_txt: '2024-01-04 12:00:00', main: { temp: 18 }, weather: [{ icon: '04d', description: 'trovoada' }] },
        { dt_txt: '2024-01-05 12:00:00', main: { temp: 21 }, weather: [{ icon: '01d', description: 'sol' }] },
        { dt_txt: '2024-01-06 12:00:00', main: { temp: 23 }, weather: [{ icon: '02d', description: 'nublado' }] },
      ]
    };
    const result = component.getDailyForecasts();
    expect(result.length).toBeLessThanOrEqual(5);
  });

  it('deve retornar apenas um item por dia', () => {
    component.forecastData = {
      list: [
        { dt_txt: '2024-01-01 09:00:00', main: { temp: 20 }, weather: [{ icon: '01d', description: 'sol' }] },
        { dt_txt: '2024-01-01 12:00:00', main: { temp: 25 }, weather: [{ icon: '01d', description: 'sol' }] },
        { dt_txt: '2024-01-01 15:00:00', main: { temp: 23 }, weather: [{ icon: '01d', description: 'sol' }] },
        { dt_txt: '2024-01-02 12:00:00', main: { temp: 22 }, weather: [{ icon: '02d', description: 'nublado' }] },
      ]
    };
    const result = component.getDailyForecasts();
    const dates = result.map((item: any) => item.dt_txt.split(' ')[0]);
    const uniqueDates = new Set(dates);
    expect(uniqueDates.size).toBe(result.length);
  });
});