import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WsTitle } from './ws-title';

describe('WsTitle', () => {
  let component: WsTitle;
  let fixture: ComponentFixture<WsTitle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WsTitle]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WsTitle);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
