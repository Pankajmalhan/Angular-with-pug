import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AngularFormComponent } from './angular-form/angular-form.component';
import { PugFormComponent } from './pug-form/pug-form.component';
import { PugListComponent } from './pug-list/pug-list.component';
import { AngularListComponent } from './angular-list/angular-list.component';
import { HomeComponent } from './home/home.component';
import { Routes_Provider } from './app.routes';
import { employeeService } from './service/employee-data';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AngularFormComponent,
    PugFormComponent,
    PugListComponent,
    AngularListComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    Routes_Provider,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    employeeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
