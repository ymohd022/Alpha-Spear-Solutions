import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustryHealthcareComponent } from './industry-healthcare.component';

describe('IndustryHealthcareComponent', () => {
  let component: IndustryHealthcareComponent;
  let fixture: ComponentFixture<IndustryHealthcareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IndustryHealthcareComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndustryHealthcareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
