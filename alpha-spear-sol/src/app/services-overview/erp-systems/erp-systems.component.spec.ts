import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErpSystemsComponent } from './erp-systems.component';

describe('ErpSystemsComponent', () => {
  let component: ErpSystemsComponent;
  let fixture: ComponentFixture<ErpSystemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ErpSystemsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErpSystemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
