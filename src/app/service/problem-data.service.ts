import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppState } from '../home/app-state.model';
import { Problem } from '../home/problem.model';
import { AppStateService } from './app-state.service';

@Injectable({
  providedIn: 'root'
})
export class ProblemDataService {

  listOfProblems: Problem[];

  constructor(
    private httpClient: HttpClient,
    private appStateService: AppStateService
  ) {
    this.listOfProblems = [];
    this.delay(() => {
      for(let i=0;i<10;i++){
        this.listOfProblems.push(
          {
            link: 'link-'+i,
            name: 'problem-'+i,
            id: i
          }
        );
      }
      this.appStateService.appState.total = this.listOfProblems.length;
      this.appStateService.appState.current = 0;
      if (this.listOfProblems.length!=0) {
        this.appStateService.appState.selectProblem = this.listOfProblems[0];
      }
      this.appStateService.appState.loaded = true;
      console.log(this.listOfProblems);
    });
  }

  findAll(task: any) {
    this.delay(task);
  }

  save(problem: Problem) {
    problem.id = this.listOfProblems.length;
    this.appStateService.appState.total++;
    this.delay(() => this.listOfProblems.push(problem));
  }

  deleteByIndex(ind: number) {
    if (this.appStateService.appState.selectProblem == this.listOfProblems[ind]) {
      this.appStateService.appState.current = -1;
      this.appStateService.appState.selectProblem = new Problem();
    }
    this.appStateService.appState.total--;
    this.delay(() => this.listOfProblems.splice(ind, 1));
  }

  nextProblem() {
    if (this.appStateService.appState.total != this.appStateService.appState.current+1) {
      this.appStateService.appState.current++;
      this.appStateService.appState.selectProblem = this.listOfProblems[this.appStateService.appState.current];
    }
  }

  previousProblem() {
    if (this.appStateService.appState.current>0) {
      this.appStateService.appState.current--;
      this.appStateService.appState.selectProblem = this.listOfProblems[this.appStateService.appState.current];
    }
  }

  delay(task: any) {
    if (task) {
      setTimeout(task, 2*1000);
    }
  }

}
