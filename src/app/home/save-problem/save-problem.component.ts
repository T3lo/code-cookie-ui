import { Component, OnInit } from '@angular/core';
import { AppStateService } from 'src/app/service/app-state.service';
import { ProblemDataService } from 'src/app/service/problem-data.service';
import { AppState } from '../app-state.model';
import { Problem } from '../problem.model';

@Component({
  selector: 'app-save-problem',
  templateUrl: './save-problem.component.html',
  styleUrls: ['./save-problem.component.css']
})
export class SaveProblemComponent implements OnInit {

  appState: AppState;
  newProblem: Problem;

  constructor(
    private problemDataService: ProblemDataService,
    private appStateService: AppStateService
  ) {
    this.appState = this.appStateService.appState;
    this.newProblem = new Problem();
  }

  ngOnInit(): void {
  }

  saveProblem() {
    this.problemDataService.save(this.newProblem);
    this.newProblem = new Problem();
  }

}
