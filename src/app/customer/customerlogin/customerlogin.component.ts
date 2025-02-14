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
  invalid: boolean = false;
  constructor(private fb: FormBuilder,private dataService: ApiService,private router:Router,DataService:ApiService) {
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
          const redirect = this.dataService.redirectUrl ? this.dataService.redirectUrl : '/viewbalance';
          this.router.navigate([redirect]);
        },
        error => {
          this.invalid = true
        });
    this.dataService.logged(angFormcus1.value.usernamec,angFormcus1.value.passwordc)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['/custdash']);
        },

        error => {
        });
  }
  get usernamec() { return this.angFormcus.get('usernamec'); }
  get passwordc() { return this.angFormcus.get('passwordc'); }



}
