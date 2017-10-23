import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {MaterialModuleModule} from './material/material-module.module';

import {TodoDataService} from './todo/todo-data-service.service';
import {GithubService} from './github/github.service';

import {AppComponent} from './app.component';
import {TodoComponent} from './todo/todo.component';
import {HomeComponent} from './home/home.component';
import {GithubComponent} from './github/github.component';

const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'todo',
    component: TodoComponent
  },
  {
    path: 'github',
    component: GithubComponent
  },
  {
    path: '**',
    component: HomeComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    HomeComponent,
    GithubComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModuleModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [TodoDataService, GithubService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
