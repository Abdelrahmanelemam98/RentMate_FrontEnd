import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyHomeComponent } from './property-home.component';

describe('PropertyHomeComponent', () => {
  let component: PropertyHomeComponent;
  let fixture: ComponentFixture<PropertyHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertyHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropertyHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
