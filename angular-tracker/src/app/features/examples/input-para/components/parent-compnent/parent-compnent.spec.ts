import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentCompnent } from './parent-compnent';

describe('ParentCompnent', () => {
  let component: ParentCompnent;
  let fixture: ComponentFixture<ParentCompnent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParentCompnent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentCompnent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
