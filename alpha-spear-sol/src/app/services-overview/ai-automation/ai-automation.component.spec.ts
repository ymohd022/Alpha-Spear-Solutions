import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiAutomationComponent } from './ai-automation.component';

describe('AiAutomationComponent', () => {
  let component: AiAutomationComponent;
  let fixture: ComponentFixture<AiAutomationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AiAutomationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiAutomationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
