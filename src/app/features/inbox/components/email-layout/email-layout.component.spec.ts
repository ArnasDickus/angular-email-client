import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailLayoutComponent } from './email-layout.component';

describe('EmailLayoutComponent', () => {
  let component: EmailLayoutComponent;
  let fixture: ComponentFixture<EmailLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
