import { Component, OnInit } from '@angular/core';
import { ProblemDataService } from '../service/problem-data.service';
import { Problem } from './problem.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  appLoaded: boolean;
  listOfProblems: Problem[];
  selectedProblemIndex: number;
  
  constructor(
    private problemDataService: ProblemDataService
  ) {
    this.listOfProblems = this.problemDataService.listOfProblems;
    this.appLoaded = false;
    this.selectedProblemIndex = -1;
  }

  ngOnInit(): void {
    this.problemDataService.findAll(() => {
      this.appLoaded = true;
      console.log("App loaded")
    })
  }

}
