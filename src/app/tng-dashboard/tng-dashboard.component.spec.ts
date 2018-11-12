
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { TngDashboardComponent } from './tng-dashboard.component';

describe('TngDashboardComponent', () => {
  let component: TngDashboardComponent;
  let fixture: ComponentFixture<TngDashboardComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TngDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TngDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
