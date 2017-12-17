import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { employeeService } from '../service/employee-data';
import { employee } from '../model/employee-model';
@Component({
  selector: 'app-pug-form',
  templateUrl: './pug-form.component.pug',
  styleUrls: ['./pug-form.component.css']
})
export class PugFormComponent implements OnInit {
  projectList:string[]=[];
  dataForm:FormGroup;
  formSubmitted:boolean=false;
  constructor(private serviceObj:employeeService) { 
    this.projectList=['Lelynx','Saraswati Book House','Himadri Publication','OUP','Lions Projects'];
    this.dataForm=new FormGroup({
    'employeeName':new FormControl('',[Validators.required,Validators.pattern(/^[a-zA-Z]+$/)]),
    'employeeAge':new FormControl('',[Validators.required,Validators.max(50),Validators.min(20)]),
    'employeeProject':new FormControl('Lelynx',Validators.required)
    })
  }

  ngOnInit() {
  }

  onSubmit=()=>{
    this.formSubmitted=true;
    if(this.dataForm.valid)
    {
      let EmpObj:employee={
        employeeId:200,
        employeeAge:this.dataForm.get('employeeAge').value,
        employeeName:this.dataForm.get('employeeName').value,
        project:this.dataForm.get('employeeProject').value,

      };
      this.serviceObj.addEmployee(EmpObj);
      console.log(EmpObj);
    }
  }
}
