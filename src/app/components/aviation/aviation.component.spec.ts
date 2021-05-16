import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AviationComponent } from './aviation.component';

describe('AviationComponent', () => {
  let component: AviationComponent;
  let fixture: ComponentFixture<AviationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AviationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AviationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
