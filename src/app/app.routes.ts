import { AngularFormComponent } from './angular-form/angular-form.component';
import { PugFormComponent } from './pug-form/pug-form.component';
import { PugListComponent } from './pug-list/pug-list.component';
import { AngularListComponent } from './angular-list/angular-list.component';
import {RouterModule,Routes} from '@angular/router'; 
import { HomeComponent } from './home/home.component';

const APP_ROUTES:Routes=[  
    {path:'',component:HomeComponent},  
    {path:'employee-list',component:AngularListComponent},  
    {path:'add-employee',component:PugFormComponent}, 
    {path:'**',redirectTo:''}   
];  
  
export const Routes_Provider=RouterModule.forRoot(APP_ROUTES); 
