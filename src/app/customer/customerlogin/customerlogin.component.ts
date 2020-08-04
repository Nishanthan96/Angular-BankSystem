import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import {ApiService} from "../../api.service";


@Component({
  selector: 'app-customerlogin',
  templateUrl: './customerlogin.component.html'
})
export class CustomerloginComponent implements OnInit {
  angFormcus: FormGroup;
  constructor(private fb: FormBuilder,private dataService: ApiService,private router:Router) {
    this.angFormcus = this.fb.group({
      usernamec: ['', [Validators.required]],
      passwordc: ['', Validators.required]
    });
  }

  ngOnInit() {
  }
  postdatacus(angFormcus1)
  {
    this.dataService.custlogin(angFormcus1.value.usernamec,angFormcus1.value.passwordc)
      .pipe(first())
      .subscribe(
        data => {
          const redirect = this.dataService.redirectUrl ? this.dataService.redirectUrl : '/custdash';
          this.router.navigate([redirect]);
        },
        error => {
          alert("Username or password is incorrect")
        });
  }
  get usernamec() { return this.angFormcus.get('usernamec'); }
  get passwordc() { return this.angFormcus.get('passwordc'); }



}
