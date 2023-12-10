import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalizarPagoComponent } from './finalizar-pago.component';

describe('FinalizarPagoComponent', () => {
  let component: FinalizarPagoComponent;
  let fixture: ComponentFixture<FinalizarPagoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FinalizarPagoComponent]
    });
    fixture = TestBed.createComponent(FinalizarPagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
