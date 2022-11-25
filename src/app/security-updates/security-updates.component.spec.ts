import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityUpdatesComponent } from './security-updates.component';

describe('SecurityUpdatesComponent', () => {
  let component: SecurityUpdatesComponent;
  let fixture: ComponentFixture<SecurityUpdatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecurityUpdatesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecurityUpdatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
