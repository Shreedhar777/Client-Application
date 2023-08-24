import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPage1Component } from './user-page1.component';

describe('UserPage1Component', () => {
  let component: UserPage1Component;
  let fixture: ComponentFixture<UserPage1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserPage1Component]
    });
    fixture = TestBed.createComponent(UserPage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
