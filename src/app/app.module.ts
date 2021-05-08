import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { HomeComponent } from './home/home.component';
import { ProblemListComponent } from './home/problem-list/problem-list.component';
import { ProblemItemComponent } from './home/problem-list/problem-item/problem-item.component';
import { WelcomeMessageComponent } from './home/welcome-message/welcome-message.component';
import { SaveProblemComponent } from './home/save-problem/save-problem.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProblemListComponent,
    ProblemItemComponent,
    WelcomeMessageComponent,
    SaveProblemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
