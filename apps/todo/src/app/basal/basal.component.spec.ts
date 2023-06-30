import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasalComponent } from './basal.component';

describe('BasalComponent', () => {
  let component: BasalComponent;
  let fixture: ComponentFixture<BasalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
