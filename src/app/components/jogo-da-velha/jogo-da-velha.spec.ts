import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JogoDaVelha } from './jogo-da-velha';

describe('JogoDaVelha', () => {
  let component: JogoDaVelha;
  let fixture: ComponentFixture<JogoDaVelha>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JogoDaVelha],
    }).compileComponents();

    fixture = TestBed.createComponent(JogoDaVelha);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
