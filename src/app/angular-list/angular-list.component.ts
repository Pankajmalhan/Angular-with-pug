import { Component, OnInit } from '@angular/core';
import { employee } from '../model/employee-model';
import { employeeService } from '../service/employee-data';

@Component({
  selector: 'app-angular-list',
  templateUrl: './angular-list.component.pug',
  styleUrls: ['./angular-list.component.css']
})
export class AngularListComponent implements OnInit {

  employeeList:employee[]=[];
  projectList:string[]=[];
  employeeId:number=0;
  items = ['item0', 'item1', 'item2', 'item3', 'item3']
  constructor(private employeeServiceObj:employeeService) { 
    this.employeeList=employeeServiceObj.getEmployeeList();
    this.projectList=['Lelynx','Saraswati Book House','Himadri Publication','OUP','Lions Projects'];
    this.employeeServiceObj.myevent.subscribe(data=>{
      this.employeeList=employeeServiceObj.getEmployeeList();
    })
  }

  ngOnInit() {
  }
  deleteEmployee=(employeeId:number)=>{
    this.employeeId=employeeId;
  }
  remove=()=>{
    this.employeeServiceObj.removeEmployee(this.employeeId);
  }

}
