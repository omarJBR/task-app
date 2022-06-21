import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemSideBarComponent } from './system-side-bar.component';

describe('SystemSideBarComponent', () => {
  let component: SystemSideBarComponent;
  let fixture: ComponentFixture<SystemSideBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SystemSideBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
