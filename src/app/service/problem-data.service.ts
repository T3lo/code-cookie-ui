import { Injectable } from '@angular/core';
import { Problem } from '../home/problem.model';

@Injectable({
  providedIn: 'root'
})
export class ProblemDataService {

  listOfProblems: Problem[];
  constructor() {
    this.listOfProblems = [];
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
