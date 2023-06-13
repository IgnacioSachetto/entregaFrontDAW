import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservanteComponent } from './reservante.component';

describe('ReservanteComponent', () => {
  let component: ReservanteComponent;
  let fixture: ComponentFixture<ReservanteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReservanteComponent]
    });
    fixture = TestBed.createComponent(ReservanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
