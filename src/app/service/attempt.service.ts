import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppStateService } from './app-state.service';
import { Attempt } from '../home/attempt.model';
import { AppState } from '../home/app-state.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AttemptService {

  url: string = environment.problemServiceUrl + "/attempt";
  appState: AppState;

  constructor(
    private httpClient: HttpClient,
    private appStateService: AppStateService
  ) {
    this.appState = this.appStateService.appState;
    this.findAll();
  }

  findAll() {
    this.httpClient.get<Attempt[]>(this.url + "/findAllToday").subscribe(
      response => {
        console.log(response)
        response.forEach(attempt => {
          if (attempt.pid in this.appState.attemptMapping!) {
            this.appState.attemptMapping[attempt.pid]++;
          } else {
            this.appState.attemptMapping[attempt.pid] = 1;
          }
        });
        console.log(this.appState.attemptMapping);
      },
      error => {
        console.error(error);
      }
    )
  }

  save(attempt: Attempt) {
    this.httpClient.post<{id: number;}>(this.url + "/save", attempt).subscribe(
      response => {
        console.log(response);
        if (attempt.pid in this.appState.attemptMapping!) {
          this.appState.attemptMapping[attempt.pid]++;
        } else {
          this.appState.attemptMapping[attempt.pid] = 1;
        }
        console.log(this.appState.attemptMapping);
      },
      error => {
        console.error(error);
      }
    )
  }

}
