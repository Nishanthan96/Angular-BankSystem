import {Component, OnInit} from "@angular/core";

import {Account} from "../../account";

import {ApiService} from "../../api.service";
import {Accloan} from "../../accloan";

@Component({
  selector: 'app-viewloan',
  templateUrl: './viewloan.component.html',
  styleUrls: ['./viewloan.component.css']

})

export class ViewloanComponent implements OnInit {
  accloans: Accloan[];
  valid: boolean = false;
  invalid: boolean = false;
  selectedAccount: Accloan = { accountno : null , loanID: null, loanamount: null, loantype: null, loanduration: null, createdate: null, startdate: null, nextdate: null, installment: null}
  constructor(private apiService: ApiService) {
  }

  ngOnInit(): void {
    this.apiService.readLoan().subscribe((accloans: Accloan[])=>{
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
  selectAccount(accloan: Accloan) {
    this.selectedAccount = accloan;
  }
  deleteloan(accountno){
    this.apiService.deleteLoan(accountno).subscribe((accloan: Accloan)=>{
      this.valid = false;
      this.invalid = true;
    });
  }
}
