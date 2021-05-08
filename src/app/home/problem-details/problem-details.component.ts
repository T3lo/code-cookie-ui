import { Component, OnInit } from '@angular/core';
import { AppStateService } from 'src/app/service/app-state.service';
import { ProblemDataService } from 'src/app/service/problem-data.service';
import { AppState } from '../app-state.model';
import { Problem } from '../problem.model';

@Component({
  selector: 'app-problem-details',
  templateUrl: './problem-details.component.html',
  styleUrls: ['./problem-details.component.css']
})
export class ProblemDetailsComponent implements OnInit {

  appState: AppState;

  constructor(
    private problemDataService: ProblemDataService,
    private appStateService: AppStateService
  ) {
    this.appState = this.appStateService.appState;
  }

  ngOnInit(): void {
  }

  previousProblem() {
    this.problemDataService.previousProblem();
  }

  nextProblem() {
    this.problemDataService.nextProblem();
  }

  deleteProblem() {
    this.problemDataService.deleteByIndex(this.appState.current);
  }

}
