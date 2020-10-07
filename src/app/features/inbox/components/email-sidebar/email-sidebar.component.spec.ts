import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailSidebarComponent } from './email-sidebar.component';

describe('EmailSidebarComponent', () => {
  let component: EmailSidebarComponent;
  let fixture: ComponentFixture<EmailSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
