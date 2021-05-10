import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Problem } from '../home/problem.model';
import { AppStateService } from './app-state.service';

@Injectable({
  providedIn: 'root'
})
export class ProblemDataService {

  listOfProblems: Problem[];
  url: string = "http://localhost:8081/problem";
  // url: string = "https://code-cookie-problem-service.herokuapp.com/problem";

  constructor(
    private httpClient: HttpClient,
    private appStateService: AppStateService
  ) {
    this.listOfProblems = [];
    this.findAll(null);
  }

  findAll(task: any) {
    this.httpClient.get<Problem[]>(this.url + "/findAll").subscribe(
      response => {
        /*
          got problem set successfully. Do:
            1. assign it to listOfProblems
            2. set appState.total to length of response
            3. set appState.current = 0
            4. set appState.selectProblem = list[0]
            5. ready to display data (loaded, showFlag)
        */
        Object.assign(this.listOfProblems, response);
        this.appStateService.appState.total = this.listOfProblems.length;
        this.appStateService.appState.current = 0;
        this.appStateService.appState.loaded = true;
        if (this.listOfProblems.length!=0) {
          this.appStateService.appState.showFlag = true;
          this.appStateService.appState.selectProblem = this.listOfProblems[0];
        } else {
          this.appStateService.appState.showFlag = false;
        }
        console.log(this.listOfProblems);
        if (task) {
          task();
        }
      },
      error => {
        /*
          error to get list[]. Do:
            1. display error message
            2. goto broken-screen
            3. loaded=true only for appState
        */
        this.appStateService.appState.loaded = true;
      }
    )
  }

  save(problem: Problem) {
    console.log("Saving");
    console.log(problem);
    this.httpClient.post<{ id: number }>(this.url + "/save", problem).subscribe(
      response => {
        /*
          save complete
            1. update sppState:
                total
                showFlag (if list was empty it needs to be refreshed)
            2. update list
        */
        this.appStateService.appState.total++;
        // this.appStateService.appState.showFlag = true;
        problem.id = response.id;
        this.listOfProblems.push(problem);
      },
      error => {
        /*
          no save
            1. show error message
        */
        console.error(error);
      }
    );
  }

  deleteByIndex(ind: number) {
    let id: number = this.listOfProblems[ind].id!;
    if (id) {
      this.httpClient.delete<any>(this.url + "/deleteById/" + id).subscribe(
        response => {
          /*
            delete complete, Do:
              1. update list
              2. update appState
                  total
                  current, selectProblem *
                  showFlag = false
          */
          console.log(response);
          if (this.appStateService.appState.selectProblem == this.listOfProblems[ind]) {
            this.appStateService.appState.current = -1;
            this.appStateService.appState.selectProblem = new Problem();
          }
          this.appStateService.appState.total--;
          this.appStateService.appState.showFlag = false;
          this.listOfProblems.splice(ind, 1);
        },
        error => {
          /*
            no delete. Do:
              1. show  error message
          */
          console.error(error);
        }
      )
    } else {
      // id is null or undefined
    }
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
