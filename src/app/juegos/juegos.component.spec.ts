import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuegosComponent } from './juegos.component';

describe('JuegosComponent', () => {
  let component: JuegosComponent;
  let fixture: ComponentFixture<JuegosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JuegosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JuegosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('El componente Juego ha sido creado', () => {
    expect(component).toBeTruthy();
  });
});
