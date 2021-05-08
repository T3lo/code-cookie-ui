import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveProblemComponent } from './save-problem.component';

describe('SaveProblemComponent', () => {
  let component: SaveProblemComponent;
  let fixture: ComponentFixture<SaveProblemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveProblemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveProblemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
