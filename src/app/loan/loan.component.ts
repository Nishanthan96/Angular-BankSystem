import { Component, OnInit } from '@angular/core';
import {Account} from "../account";
import {ApiService} from "../api.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {Accloan} from "../accloan";
import {first} from "rxjs/operators";

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.css']
})
export class LoanComponent implements OnInit {
  angFormloan: FormGroup;
  constructor(private fb: FormBuilder,private dataService: ApiService,private router:Router) {
    this.angFormloan = this.fb.group({
      accountno: ['', [Validators.required,Validators.minLength(1), Validators.email]],
      loanID: ['', Validators.required],
      loantype: ['', Validators.required],
      loanamount: ['', Validators.required],
      loanduration: ['', Validators.required],
      createdate: ['', Validators.required],
      startdate: ['', Validators.required],
      nextdate: ['', Validators.required]
    });
  }

  ngOnInit(): void {

  }
  postdata(angForm1)
  {

    this.dataService.loansave(angForm1.value.accountno,angForm1.value.loanID,angForm1.value.loantype,angForm1.value.loanamount,angForm1.value.loanduration,angForm1.value.createdate,angForm1.value.startdate,angForm1.value.nextdate)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['login']);
        },

        error => {
        });
  }
  get accountno() { return this.angFormloan.get('accountno'); }
  get loanID() { return this.angFormloan.get('loanID'); }
  get loantype() { return this.angFormloan.get('loantype'); }
  get loanamount() { return this.angFormloan.get('loanamount'); }
  get loanduration() { return this.angFormloan.get('loanduration'); }
  get createdate() { return this.angFormloan.get('createdate'); }
  get startdate() { return this.angFormloan.get('startdate'); }
  get nextdate() { return this.angFormloan.get('nextdate'); }
}
