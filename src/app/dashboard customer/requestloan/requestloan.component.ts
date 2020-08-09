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
  constructor(private fb: FormBuilder,private dataService: ApiService,private router:Router) {
    this.angFormloanreq = this.fb.group({
      accountno: ['', [Validators.required,Validators.minLength(1)]],
      reqloanamount: ['', Validators.required],
      reqloantype: ['', Validators.required],
      reqdate: ['', Validators.required]
    });
  }

  ngOnInit(): void {

  }
  postdata(angFormloanreq1)
  {

    this.dataService.reqloan(angFormloanreq1.value.accountno,angFormloanreq1.value.reqloantype,angFormloanreq1.value.reqloanamount,angFormloanreq1.value.reqdate)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['login']);
        },

        error => {
        });
  }
  get accountno() { return this.angFormloanreq.get('accountno'); }
  get reqloantype() { return this.angFormloanreq.get('reqloantype'); }
  get reqloanamount() { return this.angFormloanreq.get('reqloanamount'); }
  get reqdate() { return this.angFormloanreq.get('reqdate'); }

}

