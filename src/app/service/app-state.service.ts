import { Injectable } from '@angular/core';
import { AppState } from '../home/app-state.model';

@Injectable({
  providedIn: 'root'
})
export class AppStateService {

  appState: AppState;

  constructor() {
    this.appState = new AppState();
  }
  
}
