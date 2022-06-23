import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttachmentsDropboxComponent } from './attachments-dropbox.component';

describe('AttachmentsDropboxComponent', () => {
  let component: AttachmentsDropboxComponent;
  let fixture: ComponentFixture<AttachmentsDropboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttachmentsDropboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttachmentsDropboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
