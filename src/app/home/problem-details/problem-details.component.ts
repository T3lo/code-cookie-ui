import { Component, OnInit } from '@angular/core';
import { AppStateService } from 'src/app/service/app-state.service';
import { AttemptService } from 'src/app/service/attempt.service';
import { ProblemDataService } from 'src/app/service/problem-data.service';
import { AppState } from '../app-state.model';
import { Attempt } from '../attempt.model';
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
    private appStateService: AppStateService,
    private attempService: AttemptService
  ) {
    this.appState = this.appStateService.appState;
  }

  ngOnInit(): void {
    console.log(this.appState.attemptMapping);
    console.log(this.appState.selectProblem);
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

  markAsDone() {
    let newAttempt: Attempt = new Attempt();
    newAttempt.pid = this.appState.selectProblem.id!;
    this.attempService.save(newAttempt);
  }

}
