import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InboxPlaceholderComponent } from './inbox-placeholder.component';

describe('InboxPlaceholderComponent', () => {
  let component: InboxPlaceholderComponent;
  let fixture: ComponentFixture<InboxPlaceholderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InboxPlaceholderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InboxPlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
