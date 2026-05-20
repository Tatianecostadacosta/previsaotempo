import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Header } from './header';

describe('Header', () => {
  let component: Header;
  let fixture: ComponentFixture<Header>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Header],
    }).compileComponents();

    fixture = TestBed.createComponent(Header);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('deve criar o componente', () => {
    expect(component).toBeTruthy();
  });

  it('deve iniciar com darkMode false', () => {
    expect(component.darkMode).toBe(false);
  });

  it('deve ativar o darkMode ao chamar toggleDark', () => {
    component.toggleDark();
    expect(component.darkMode).toBe(true);
  });

  it('deve desativar o darkMode ao chamar toggleDark duas vezes', () => {
    component.toggleDark();
    component.toggleDark();
    expect(component.darkMode).toBe(false);
  });

  it('deve adicionar classe dark no html ao ativar', () => {
    component.toggleDark();
    expect(document.documentElement.classList.contains('dark')).toBe(true);
  });

  it('deve remover classe dark no html ao desativar', () => {
    component.toggleDark();
    component.toggleDark();
    expect(document.documentElement.classList.contains('dark')).toBe(false);
  });
});