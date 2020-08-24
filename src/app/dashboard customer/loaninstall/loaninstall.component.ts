import {Component, OnInit} from "@angular/core";

import {Account} from "../../account";

import {ApiService} from "../../api.service";
import {Accloan, LoanPay} from "../../accloan";
import {Payloan} from "../../install";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {first} from "rxjs/operators";

@Component({
  selector: 'app-loaninstall',
  templateUrl: './loaninstall.component.html',
  styleUrls: ['./loaninstall.component.css']

})

export class LoaninstallComponent implements OnInit {
  accloans: Accloan[];
  loanpays: LoanPay[];
  angFormod: FormGroup;

  valid: boolean = false;
  invalid: boolean = false;
  selectedAccount: Accloan = { accountno : null , loanID: null, loanamount: null, loantype: null, loanduration: null, createdate: null, startdate: null, nextdate: null, installment: null}
  selectedAccountpay: LoanPay = { accountno : null , loanID: null, payamount: null, remainingmonths: null, nextpaydate: null}

  constructor(private fb: FormBuilder,private apiService: ApiService,private apiservice: ApiService,private  dataSservice:ApiService) {
    this.angFormod = this.fb.group({
      accountno: ['', [Validators.required,Validators.minLength(1)]],
      loanID: ['', Validators.required],
      groupID: ['', Validators.required],
      odamount: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.apiService.readLoan().subscribe((accloans: Accloan[])=>{
      this.accloans = accloans;
      console.log(this.accloans);
    })
    this.apiservice.readpaidLoan().subscribe((loanpays: LoanPay[])=>{
      this.loanpays = loanpays;
      console.log(this.loanpays);
    })

  }
  postdata(angForm1)
  {

    this.dataSservice.loanod(angForm1.value.accountno,angForm1.value.loanID,angForm1.value.groupID,angForm1.value.odamount)
      .pipe(first())
      .subscribe(
        data => {
          this.valid = true;
          console.log(data)
        },

        error => {
          console.log(error)
        });
  }
  get accountno() { return this.angFormod.get('accountno'); }
  get loanID() { return this.angFormod.get('loanID'); }
  get groupID() { return this.angFormod.get('groupID'); }
  get odamount() { return this.angFormod.get('odamount'); }

  Updateloan(form){
    form.value.accountno = this.selectedAccount.accountno;
    form.value.loanID = this.selectedAccount.loanID;
    form.value.loanamount = this.selectedAccount.loanamount;
    form.value.loantype = this.selectedAccount.loantype;
    form.value.installment = this.selectedAccount.installment;
    form.value.nextdate = this.selectedAccount.nextdate;
    form.value.startdate = this.selectedAccount.startdate;
    form.value.createdate = this.selectedAccount.createdate;
    form.value.loanduration = this.selectedAccount.loanduration;
    if(this.selectedAccount && this.selectedAccount.accountno){
      this.apiService.updateLoan(form.value).subscribe((accloan: Accloan)=>{
        this.valid = true;
        this.invalid = false;
        this.apiService.readLoan().subscribe((accloans: Accloan[])=>{
          this.accloans = accloans;
        })
      });
    }
  }

  Updatepaidloan(form){
    form.value.accountno = this.selectedAccountpay.accountno;
    form.value.loanID = this.selectedAccountpay.loanID;
    form.value.payamount = this.selectedAccountpay.payamount;
    form.value.remainingmonths = this.selectedAccountpay.remainingmonths;
    form.value.nextpaydate = this.selectedAccountpay.nextpaydate;

    if(this.selectedAccountpay && this.selectedAccountpay.accountno){
      this.apiservice.updatepaidLoan(form.value).subscribe((loanpay: LoanPay)=>{
        this.valid = true;
        this.invalid = false;
        this.apiservice.readpaidLoan().subscribe((loanpays: LoanPay[])=>{
          this.loanpays = loanpays;
        })
      });
    }
  }
  selectAccount(accloan: Accloan) {
    this.selectedAccount = accloan;
  }
  selectpaidAccount(loanpay: LoanPay ) {
    this.selectedAccountpay = loanpay;
  }
  deleteloan(accountno){
    this.apiService.deleteLoan(accountno).subscribe((accloan: Accloan)=>{
      this.valid = false;
      this.invalid = true;
    });
  }
  deletepaidloan(accountno){
    this.apiservice.deletepaidLoan(accountno).subscribe((loanpay: LoanPay)=>{
      this.valid = false;
      this.invalid = true;
    });
  }
}
