import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesHistoryTabComponent } from './notes-history-tab.component';

describe('NotesHistoryComponent', () => {
  let component: NotesHistoryTabComponent;
  let fixture: ComponentFixture<NotesHistoryTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NotesHistoryTabComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotesHistoryTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
