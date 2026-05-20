import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Search } from './search';

describe('Search', () => {
  let component: Search;
  let fixture: ComponentFixture<Search>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Search],
    }).compileComponents();

    fixture = TestBed.createComponent(Search);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('deve criar o componente', () => {
    expect(component).toBeTruthy();
  });

  it('deve emitir o nome da cidade ao buscar', () => {
    let cidadeEmitida = '';
    component.searchCity.subscribe((city: string) => {
      cidadeEmitida = city;
    });

    component.cityInput = { nativeElement: { value: 'Rio de Janeiro' } } as any;
    component.onSearch(new Event('submit'));

    expect(cidadeEmitida).toBe('Rio de Janeiro');
  });

  it('não deve emitir quando o input estiver vazio', () => {
    let emitiu = false;
    component.searchCity.subscribe(() => {
      emitiu = true;
    });

    component.cityInput = { nativeElement: { value: '   ' } } as any;
    component.onSearch(new Event('submit'));

    expect(emitiu).toBe(false);
  });

  it('deve remover espaços extras do nome da cidade', () => {
    let cidadeEmitida = '';
    component.searchCity.subscribe((city: string) => {
      cidadeEmitida = city;
    });

    component.cityInput = { nativeElement: { value: '  São Paulo  ' } } as any;
    component.onSearch(new Event('submit'));

    expect(cidadeEmitida).toBe('São Paulo');
  });
});