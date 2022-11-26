import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfopComponent } from './infop.component';

describe('InfopComponent', () => {
  let component: InfopComponent;
  let fixture: ComponentFixture<InfopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
