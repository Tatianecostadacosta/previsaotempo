import { TestBed } from '@angular/core/testing';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';
import { Weather } from './weather';

describe('Weather', () => {
  let service: Weather;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        Weather,
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });
    service = TestBed.inject(Weather);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
    TestBed.resetTestingModule();
  });

  it('deve criar o serviço', () => {
    expect(service).toBeTruthy();
  });

  it('deve chamar URL com /weather ao buscar clima', () => {
    service.getWeather('London').subscribe();
    const req = httpMock.expectOne((r) => r.url.includes('/weather'));
    expect(req.request.method).toBe('GET');
    req.flush({ name: 'London' });
  });

  it('deve chamar URL com /forecast ao buscar previsão', () => {
    service.getForecast('London').subscribe();
    const req = httpMock.expectOne((r) => r.url.includes('/forecast'));
    expect(req.request.method).toBe('GET');
    req.flush({ list: [] });
  });

  it('deve incluir o nome da cidade na URL', () => {
    service.getWeather('Paris').subscribe();
    const req = httpMock.expectOne((r) => r.url.includes('/weather'));
    expect(req.request.url).toContain('Paris');
    req.flush({});
  });
});