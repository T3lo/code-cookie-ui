import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemItemComponent } from './problem-item.component';

describe('ProblemItemComponent', () => {
  let component: ProblemItemComponent;
  let fixture: ComponentFixture<ProblemItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProblemItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProblemItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
