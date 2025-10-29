import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentSidebarComponent } from './fixed-sidebar-component';

describe('ContentSidebarComponent', () => {
  let component: ContentSidebarComponent;
  let fixture: ComponentFixture<ContentSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentSidebarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
