import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CcardComponent } from './ccard.component';

describe('CcardComponent', () => {
  let component: CcardComponent;
  let fixture: ComponentFixture<CcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CcardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
