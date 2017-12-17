import {employee} from '../model/employee-model';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class employeeService{
    employeeList:employee[]=[];
    myevent: EventEmitter<any> = new EventEmitter();
    constructor(){
        this.employeeList.push({employeeId:100,employeeName:'Pankaj Choudhary',employeeAge:23,project:'Lelynx'})
        this.employeeList.push({employeeId:101,employeeName:'Sanjeev Baldia',employeeAge:23,project:'Saraswati Book House'})
        this.employeeList.push({employeeId:102,employeeName:'Sandeep Jangid',employeeAge:23,project:'Himadri Publication'})
        this.employeeList.push({employeeId:103,employeeName:'Rahul Prajapat',employeeAge:23,project:'OUP'})
        this.employeeList.push({employeeId:104,employeeName:'Narendra Sharma',employeeAge:23,project:'Lions Projects'})
    }

    public getEmployeeList=():employee[]=>{
        return this.employeeList;
    };

    public addEmployee=(empObj:employee)=>{
        this.employeeList.push(empObj);
    }

    public removeEmployee(employeeId:number){
      this.employeeList= this.employeeList.filter(x=>x.employeeId!=employeeId);
      this.myevent.emit();
    }



}