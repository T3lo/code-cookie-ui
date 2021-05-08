import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AppStateService } from 'src/app/service/app-state.service';
import { ProblemDataService } from 'src/app/service/problem-data.service';
import { Problem } from '../problem.model';

@Component({
  selector: 'app-problem-list',
  templateUrl: './problem-list.component.html',
  styleUrls: ['./problem-list.component.css']
})
export class ProblemListComponent implements OnInit {

  listOfProblems: Problem[];

  constructor(
    private problemDataService: ProblemDataService,
    private appStateService: AppStateService
  ) {
    this.listOfProblems = this.problemDataService.listOfProblems;
  }
  ngOnInit(): void {

  }

  selectProblem(problem: Problem, ind: number): void {
    this.appStateService.appState.addFlag = false;
    this.appStateService.appState.selectProblem = problem;
    this.appStateService.appState.current = ind;
  }

  addProblem() {
    this.appStateService.appState.addFlag = true;
  }

}
