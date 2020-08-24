import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {CreateSavings} from "../../createsavings";
import {Account} from "../../account";

import {ApiService} from "../../api.service";

@Component({
  selector: 'app-viewaccount',
  templateUrl: './viewaccount.component.html',
  styleUrls: ['./viewaccount.component.css']
})

export class ViewaccountComponent implements OnInit {
  accounts: Account[];
  selectedAccount: Account = { accountno : null , customername: null, category: null, address: null, nic: null, dob: null, email: null, phone: null, balance: null,shareID:null}
  constructor(private apiService: ApiService) {
     }

  ngOnInit(): void {
    this.apiService.readAccounts().subscribe((accounts: Account[])=>{
      this.accounts = accounts;
      console.log(this.accounts);
    })

  }
  createOrUpdateAccount(form){
    form.value.accountno = this.selectedAccount.accountno;
    form.value.customername= this.selectedAccount.customername;
    form.value.category = this.selectedAccount.category;
    form.value.balance = this.selectedAccount.balance;
    form.value.shareID = this.selectedAccount.shareID;

    if(this.selectedAccount && this.selectedAccount.accountno){
      this.apiService.updateAccount(form.value).subscribe((account: Account)=>{
        console.log("Account updated" , account);
        this.apiService.readAccounts().subscribe((accounts: Account[])=>{
          this.accounts = accounts;
        })
      });
    }

}
  selectAccount(account: Account) {
    this.selectedAccount = account;
  }
  deleteAccount(accountno){
    this.apiService.deleteAccount(accountno).subscribe((account: Account)=>{
      console.log("Account deleted, ", account);
    });
  }
}
