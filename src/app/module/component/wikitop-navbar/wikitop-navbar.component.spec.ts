import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WikitopNavbarComponent } from './wikitop-navbar.component';

describe('WikitopNavbarComponent', () => {
  let component: WikitopNavbarComponent;
  let fixture: ComponentFixture<WikitopNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WikitopNavbarComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WikitopNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
