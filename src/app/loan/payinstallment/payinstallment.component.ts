import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {first} from "rxjs/operators";
import {ApiService} from "../../api.service";

@Component({
  selector: 'app-payinstall',
  templateUrl: './payinstallment.component.html'
})
export class PayinstallmentComponent implements OnInit {
  angFormpay: FormGroup;
  constructor(private fb: FormBuilder,private dataService: ApiService,private router:Router) {
    this.angFormpay = this.fb.group({
      accountno: ['', [Validators.required,Validators.minLength(1)]],
      loanID: ['', Validators.required],
      remainingmonths: ['', Validators.required],
      payamount: ['', Validators.required],
      nextpaydate: ['', Validators.required]
    });
  }

  ngOnInit(): void {

  }
  postdata(angFormpay1)
  {

    this.dataService.payloan(angFormpay1.value.accountno,angFormpay1.value.loanID,angFormpay1.value.remainingmonths,angFormpay1.value.payamount,angFormpay1.value.nextpaydate)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['login']);
        },

        error => {
        });
  }
  get accountno() { return this.angFormpay.get('accountno'); }
  get loanID() { return this.angFormpay.get('loanID'); }
  get payamount() { return this.angFormpay.get('payamount'); }
  get nextpaydate() { return this.angFormpay.get('nextpaydate'); }
  get remainingmonths() { return this.angFormpay.get('remainingmonths'); }
}
//
