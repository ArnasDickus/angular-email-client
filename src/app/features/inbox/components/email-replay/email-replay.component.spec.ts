import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailReplayComponent } from './email-replay.component';

describe('EmailReplayComponent', () => {
  let component: EmailReplayComponent;
  let fixture: ComponentFixture<EmailReplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailReplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailReplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
