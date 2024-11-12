import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubordinadoComponent } from './subordinado.component';

describe('SubordinadoComponent', () => {
  let component: SubordinadoComponent;
  let fixture: ComponentFixture<SubordinadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubordinadoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubordinadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
