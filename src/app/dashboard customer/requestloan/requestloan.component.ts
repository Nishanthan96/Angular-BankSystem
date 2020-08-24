import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {first} from "rxjs/operators";
import {ApiService} from "../../api.service";

@Component({
  selector: 'app-reqloan',
  templateUrl: './requestloan.component.html'
})
export class RequestloanComponent implements OnInit {
  angFormloanreq: FormGroup;
  valid: boolean = false;
  invalid: boolean = false;
  constructor(private fb: FormBuilder,private dataService: ApiService,private router:Router) {
    this.angFormloanreq = this.fb.group({
      reqloanamount: ['', Validators.required],
      reqloantype: ['', Validators.required],
      reqdate: ['', Validators.required]
    });
  }

  ngOnInit(): void {

  }
  postdata(angFormloanreq1)
  {

    this.dataService.reqloan(angFormloanreq1.value.reqloantype,angFormloanreq1.value.reqloanamount,angFormloanreq1.value.reqdate)
      .pipe(first())
      .subscribe(
        data => {
          this.valid = true;
          this.invalid = false;
          console.log(data)
        },

        error => {this.invalid = true;
          this.valid = false;
          console.log(error)
        });
  }

  get reqloantype() { return this.angFormloanreq.get('reqloantype'); }
  get reqloanamount() { return this.angFormloanreq.get('reqloanamount'); }
  get reqdate() { return this.angFormloanreq.get('reqdate'); }
}

