import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputParaComponent } from './input-para-component';

describe('InputParaComponent', () => {
  let component: InputParaComponent;
  let fixture: ComponentFixture<InputParaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputParaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputParaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
