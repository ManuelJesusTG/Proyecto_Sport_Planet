import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaProductosComponent } from './productos.component';

describe('ProductosComponent', () => {
  let component: ListaProductosComponent;
  let fixture: ComponentFixture<ListaProductosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaProductosComponent]
    });
    fixture = TestBed.createComponent(ListaProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
