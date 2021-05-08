import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Problem } from '../home/problem.model';

@Injectable({
  providedIn: 'root'
})
export class ProblemDataService {

  listOfProblems: Problem[];
  selectedProblem: Problem;

  constructor(
    private httpClient: HttpClient
  ) {
    this.listOfProblems = [];
    this.selectedProblem = {
      name: "NA",
      link: "",
      id: -2
    };
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
        this.selectedProblem.id = -1;
        this.selectedProblem.name = "Nothins";
      }
      else {
        Object.assign(this.selectedProblem, this.listOfProblems[0]);
      }

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
