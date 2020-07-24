import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
selector: 'app-register',
templateUrl: './register.component.html',
styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
angForm: FormGroup;
constructor(private fb: FormBuilder,private dataService: ApiService,private router:Router) {
this.angForm = this.fb.group({
email: ['', [Validators.required,Validators.minLength(1), Validators.email]],
customername: ['', Validators.required],
nic: ['', Validators.required],
  dob: ['', Validators.required],
  address: ['', Validators.required],
  balance: ['', Validators.required],
  category: ['', Validators.required],
phone: ['', Validators.required]
});
}

ngOnInit() {
}

postdata(angForm1)
{
this.dataService.userregistration(angForm1.value.customername,angForm1.value.category,angForm1.value.address,angForm1.value.dob,angForm1.value.nic,angForm1.value.email,angForm1.value.phone,angForm1.value.balance)
.pipe(first())
.subscribe(
data => {
this.router.navigate(['login']);
},

error => {
});
}

get customername() { return this.angForm.get('customername'); }
get category() { return this.angForm.get('category'); }
get address() { return this.angForm.get('address'); }
  get dob() { return this.angForm.get('dob'); }
  get nic() { return this.angForm.get('nic'); }
  get email() { return this.angForm.get('email'); }
  get phone() { return this.angForm.get('phone'); }
  get balance() { return this.angForm.get('balance'); }
}
