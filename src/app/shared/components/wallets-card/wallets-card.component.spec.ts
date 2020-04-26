import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletsCardComponent } from './wallets-card.component';

describe('WalletsCardComponent', () => {
  let component: WalletsCardComponent;
  let fixture: ComponentFixture<WalletsCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletsCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WalletsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
