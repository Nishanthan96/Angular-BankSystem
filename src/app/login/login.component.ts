import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
selector: 'app-login',
templateUrl: './login.component.html',
styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
angForm: FormGroup;
constructor(private fb: FormBuilder,private dataService: ApiService,private router:Router) {
this.angForm = this.fb.group({
usernamee: ['', [Validators.required]],
epassword: ['', Validators.required]
});
}

ngOnInit() {
}
postdata(angForm1)
{
this.dataService.userlogin(angForm1.value.usernamee,angForm1.value.epassword)
.pipe(first())
.subscribe(
data => {
const redirect = this.dataService.redirectUrl ? this.dataService.redirectUrl : '/dashboard';
this.router.navigate([redirect]);
},
  error => {
alert("User name or password is incorrect")
});
}
get usernamee() { return this.angForm.get('usernamee'); }
get epassword() { return this.angForm.get('epassword'); }

  postdata1(angForm1)
  {
    this.dataService.userlogin(angForm1.value.usernamec,angForm1.value.passwordc)
      .pipe(first())
      .subscribe(
        data => {
          const redirect = this.dataService.redirectUrl ? this.dataService.redirectUrl : '/home';
          this.router.navigate([redirect]);
        },
        error => {
          alert("User name or password is incorrect")
        });
  }
  get usernamec() { return this.angForm.get('usernamee'); }
  get passwordc() { return this.angForm.get('epassword'); }

}
