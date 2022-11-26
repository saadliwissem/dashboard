import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AskForInfoComponent } from './ask-for-info.component';

describe('AskForInfoComponent', () => {
  let component: AskForInfoComponent;
  let fixture: ComponentFixture<AskForInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AskForInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AskForInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
