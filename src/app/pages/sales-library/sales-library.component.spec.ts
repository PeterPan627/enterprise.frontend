import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesLibraryComponent } from './sales-library.component';

describe('SalesLibraryComponent', () => {
  let component: SalesLibraryComponent;
  let fixture: ComponentFixture<SalesLibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SalesLibraryComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
