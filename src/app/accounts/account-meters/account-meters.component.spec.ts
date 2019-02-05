import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountMetersComponent } from './account-meters.component';

describe('AccountMetersComponent', () => {
  let component: AccountMetersComponent;
  let fixture: ComponentFixture<AccountMetersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountMetersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountMetersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
