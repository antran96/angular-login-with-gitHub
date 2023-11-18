import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupSearchComponent } from './popup-search.component';

describe('PopupSearchComponent', () => {
  let component: PopupSearchComponent;
  let fixture: ComponentFixture<PopupSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopupSearchComponent]
    });
    fixture = TestBed.createComponent(PopupSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
