import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetdetailsComponent } from './planetdetails.component';

describe('PlanetdetailsComponent', () => {
  let component: PlanetdetailsComponent;
  let fixture: ComponentFixture<PlanetdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanetdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
