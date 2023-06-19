import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  signUpForm!: FormGroup;
  isVisible: boolean = false;
  title = 'CrudOperationNSK';
  employeeData: any;
  // loginForm !: FormGroup;
  constructor(private route: Router, private formBuilder: FormBuilder, private crud: CrudService) {
    this.signUpForm = this.formBuilder.group({
      username: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
      confirmPass: new FormControl('', Validators.required),

    });
  }
  redirectToSignup() {
    // this.router.navigate(['../sign-up.component.html']);
  }

  isVisibleDom() {
    this.isVisible = true;
    // this.messageService.add({ severity: 'success', summary: 'Success' });
  }
  goToLoginPage() {
    this.isVisible = false;
  }
  goToDashboard() {
    this.route.navigate(['dashboard']);
  }

  signUp() {
    //this.submitted = true;
    const postdata = {
      ...this.signUpForm.value
    }

    this.employeeData.push(postdata);
    localStorage.setItem('userInfo', JSON.stringify(this.employeeData));
    console.log(this.employeeData)
  }

}





