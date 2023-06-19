import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeDetails } from './dashboard.model';
import { CrudService } from '../service/crud.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  [x: string]: any;
  employeeData: any;
  dashboardForm!: FormGroup
  employeeModelobj: EmployeeDetails = new EmployeeDetails();
  data: any;
  isEdit: boolean = false;

  constructor(private formBuilder: FormBuilder, private crud: CrudService, private message: MessageService) { }

  ngOnInit(): void {

    this.createForm()
    this.getAllEmployee();
  }
  createForm() {
    this.dashboardForm = this.formBuilder.group({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      email: new FormControl(''),
      mobileNumber: new FormControl(''),
      salary: new FormControl(''),
    })
  }

  postEmployeeDetails() {
    this.employeeModelobj.firstname = this.dashboardForm.value.firstname;
    this.employeeModelobj.lastName = this.dashboardForm.value.lastName;
    this.employeeModelobj.email = this.dashboardForm.value.email;
    this.employeeModelobj.mobileNumber = this.dashboardForm.value.mobileNumber;
    this.employeeModelobj.salary = this.dashboardForm.value.salary;

    // this.crud.postEmployee(this.employeeModelobj).subscribe(res => {
    //   alert("Successfully");
    //   this.dashboardForm.reset();
    //   let ref = document.getElementById('cancel')
    //   ref?.click();
    // },
    // )

  }
  getAllEmployee() {
    this.employeeData = this.crud.getEmployees()
  }
  addData() {
    //this.submitted = true;
    const postdata = {
      ...this.dashboardForm.value
    }

    this.employeeData.push(postdata);
    this.isEdit = false;
  }
  deleteCall() {
    const postdata = {
      id: this.dashboardForm.get('id')
    }
    this.employeeData.id = this.crud.getEmployees();
    this.employeeData.splice(postdata, 1);
  }
  onEdit(data: any) {
    this.dashboardForm.patchValue(data);
    this.isEdit = true;
    this.message.add({ severity: 'success', summary: 'Success' });
  }
  updateCall() {
    const updateData = {
      ...this.dashboardForm.value.id,
      candidateId: this.dashboardForm.get('id')
    }
    this.employeeData.id = this.crud.getEmployees();
    this.isEdit = false;
    this.dashboardForm.reset()
  }
}
