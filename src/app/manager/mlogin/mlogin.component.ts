import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import {ApiService} from "../../api.service";

@Component({
  selector: 'app-mlogin',
  templateUrl: './mlogin.component.html'
})
export class MloginComponent implements OnInit {
  angForm: FormGroup;
  invalid: boolean = false;

  constructor(private fb: FormBuilder,private dataService: ApiService,private router:Router) {
    this.angForm = this.fb.group({
      usernamem: ['', [Validators.required]],
      passwordm: ['', Validators.required]
    });
  }

  ngOnInit() {
  }
  postdata(angForm1)
  {
    this.dataService.mlogin(angForm1.value.usernamem,angForm1.value.passwordm)
      .pipe(first())
      .subscribe(
        data => {
          const redirect = this.dataService.redirectUrl ? this.dataService.redirectUrl : '/handlereq';
          this.router.navigate([redirect]);
        },
        error => {
          this.invalid = true
        });
  }
  get usernamem() { return this.angForm.get('usernamem'); }
  get passwordm() { return this.angForm.get('passwordm'); }


}
