import { Component, OnInit } from '@angular/core';
import { AppStateService } from '../service/app-state.service';
import { ProblemDataService } from '../service/problem-data.service';
import { AppState } from './app-state.model';
import { Problem } from './problem.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  appState: AppState;
  listOfProblems: Problem[];
  
  constructor(
    private problemDataService: ProblemDataService,
    private appStateService: AppStateService
  ) {
    this.listOfProblems = this.problemDataService.listOfProblems;
    this.appState = this.appStateService.appState;
  }

  ngOnInit(): void {
  }

  addProblem() {
    
  }
}
