import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderandnavigationComponent } from './headerandnavigation.component';

describe('HeaderandnavigationComponent', () => {
  let component: HeaderandnavigationComponent;
  let fixture: ComponentFixture<HeaderandnavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderandnavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderandnavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
