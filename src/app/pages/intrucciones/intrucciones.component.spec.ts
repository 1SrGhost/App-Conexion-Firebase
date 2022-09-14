import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntruccionesComponent } from './intrucciones.component';

describe('IntruccionesComponent', () => {
  let component: IntruccionesComponent;
  let fixture: ComponentFixture<IntruccionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntruccionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntruccionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
