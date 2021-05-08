import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppState } from '../home/app-state.model';
import { Problem } from '../home/problem.model';

@Injectable({
  providedIn: 'root'
})
export class ProblemDataService {

  listOfProblems: Problem[];
  appState: AppState;

  constructor(
    private httpClient: HttpClient
  ) {
    this.listOfProblems = [];
    this.appState = new AppState();
    setTimeout(() => {
      for(let i=0;i<10;i++){
        this.listOfProblems.push(
          {
            link: 'link-'+i,
            name: 'problem-'+i,
            id: i
          }
        );
      }
      if (this.listOfProblems.length==0) {
        this.appState.selectProblem = new Problem();
      }
      else {
        Object.assign(this.appState.selectProblem, this.listOfProblems[0]);
      }
      this.appState.loaded = true;
      console.log(this.listOfProblems);
    }, 5*1000);
  }

  findAll(task: any) {
    setTimeout(() => {
      if (task) {
        task();
      }
    }, 2*1000);
  }

  save() {

  }

  deleteByIndex() {

  }

}
