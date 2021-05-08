import { Component, OnInit } from '@angular/core';
import { ProblemDataService } from 'src/app/service/problem-data.service';
import { AppState } from '../app-state.model';

@Component({
  selector: 'app-save-problem',
  templateUrl: './save-problem.component.html',
  styleUrls: ['./save-problem.component.css']
})
export class SaveProblemComponent implements OnInit {

  appState: AppState;

  constructor(
    private problemDataService: ProblemDataService
  ) {
    this.appState = this.problemDataService.appState;
    console.log("Add problem loaded");
  }

  ngOnInit(): void {
  }

}
