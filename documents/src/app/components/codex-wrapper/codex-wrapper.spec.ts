import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodexWrapper } from './codex-wrapper';

describe('CodexWrapper', () => {
  let component: CodexWrapper;
  let fixture: ComponentFixture<CodexWrapper>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodexWrapper]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodexWrapper);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
