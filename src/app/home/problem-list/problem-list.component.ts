import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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
    private problemDataService: ProblemDataService
  ) {
    this.listOfProblems = this.problemDataService.listOfProblems;
  }
  ngOnInit(): void {

  }

  selectProblem(problem: Problem, ind: number): void {
    console.log("Selected: " + ind);
    console.log(problem);
    Object.assign(this.problemDataService.selectedProblem, problem);
  }
}
