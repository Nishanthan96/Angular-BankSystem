import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {CreateSavings} from "../../createsavings";

import {ApiService} from "../../api.service";
import {Accloan} from "../../accloan";

@Component({
  selector: 'app-custviewloan',
  templateUrl: './custviewloan.component.html'
})

export class CustviewloanComponent implements OnInit {
  accloans: Accloan[];
  selectedAccount: Accloan = { accountno : null , loanID: null, loanamount: null, loantype: null, loanduration: null, createdate: null, startdate: null, nextdate: null, installment: null}
  constructor(private apiService: ApiService) {

  }

  ngOnInit(): void {
    this.apiService.readLoancust().subscribe((accloans: Accloan[])=>{
      this.accloans = accloans;
      console.log(this.accloans);
    })

  }
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
    if(this.selectedAccount && this.selectedAccount.loanID){
      this.apiService.updateLoan(form.value).subscribe((accloan: Accloan)=>{
        console.log("Loan updated" , accloan);
        this.apiService.readLoancust().subscribe((accloans: Accloan[])=>{
          this.accloans = accloans;
        })
      });
    }

  }
  selectAccount(accloan: Accloan) {
    this.selectedAccount = accloan;
  }
  deleteAccount(loanID){
    this.apiService.deleteLoan(loanID).subscribe((accloan: Accloan)=>{
      console.log("Loan deleted, ", accloan);
    });
  }
}
