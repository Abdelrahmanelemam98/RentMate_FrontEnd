import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PremuimSectionComponent } from './premuim-section.component';

describe('PremuimSectionComponent', () => {
  let component: PremuimSectionComponent;
  let fixture: ComponentFixture<PremuimSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PremuimSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PremuimSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
