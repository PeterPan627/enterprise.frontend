import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewClientsComponent } from './new-clients.component';

describe('NewClientsComponent', () => {
  let component: NewClientsComponent;
  let fixture: ComponentFixture<NewClientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NewClientsComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
