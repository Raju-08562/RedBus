import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableBusesListComponent } from './available-buses-list.component';

describe('AvailableBusesListComponent', () => {
  let component: AvailableBusesListComponent;
  let fixture: ComponentFixture<AvailableBusesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvailableBusesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailableBusesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
