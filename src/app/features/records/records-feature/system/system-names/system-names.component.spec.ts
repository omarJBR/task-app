import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemNamesComponent } from './system-names.component';

describe('SystemNamesComponent', () => {
  let component: SystemNamesComponent;
  let fixture: ComponentFixture<SystemNamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SystemNamesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemNamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
