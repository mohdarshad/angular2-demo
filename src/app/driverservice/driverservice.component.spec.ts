import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverserviceComponent } from './driverservice.component';

describe('DriverserviceComponent', () => {
  let component: DriverserviceComponent;
  let fixture: ComponentFixture<DriverserviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriverserviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
