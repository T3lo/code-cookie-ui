import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AppStateService } from 'src/app/service/app-state.service';
import { ProblemDataService } from 'src/app/service/problem-data.service';
import { AppState } from '../app-state.model';
import { Problem } from '../problem.model';

@Component({
  selector: 'app-problem-list',
  templateUrl: './problem-list.component.html',
  styleUrls: ['./problem-list.component.css']
})
export class ProblemListComponent implements OnInit {

  listOfProblems: Problem[];
  appState: AppState;

  constructor(
    private problemDataService: ProblemDataService,
    private appStateService: AppStateService
  ) {
    this.listOfProblems = this.problemDataService.listOfProblems;
    this.appState = this.appStateService.appState;
  }
  ngOnInit(): void {

  }

  selectProblem(problem: Problem, ind: number): void {
    this.appState.addFlag = false;
    this.appState.selectProblem = problem;
    this.appState.current = ind;
    this.appState.showFlag = true;
  }

  addProblem() {
    this.appState.addFlag = true;
  }

}
