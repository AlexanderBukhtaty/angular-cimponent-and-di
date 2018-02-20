import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TodoModule } from './todo-module/todo.module';

import { AppComponent } from './app.component';

import 'rxjs/add/operator/toPromise';
export const appBootstrapFactory = (httpClient: HttpClient) => {
  return () => {
    console.log('appBootstrapFactory');
    return httpClient.get('/assets/mocks/app-init.json')
      .toPromise()
      .then((data) => { console.log(data); });
  };
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TodoModule
  ],
  providers: [
    { provide: APP_INITIALIZER, useFactory: appBootstrapFactory, deps: [HttpClient], multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
