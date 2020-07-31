import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {Account} from "../../account";
import {ApiService} from "../../api.service";

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})

export class DepositComponent implements OnInit {
  accounts: Account[];
  selectedAccount: Account = { accountno : null , customername: null, category: null, address: null, nic: null, dob: null, email: null, phone: null, balance: null}
  constructor(private apiService: ApiService) {

  }


  ngOnInit(): void {
    this.apiService.readAccounts().subscribe((accounts: Account[])=>{
      this.accounts = accounts;
      console.log(this.accounts);
  })




}

  depositamount(form){
    form.value.accountno = this.selectedAccount.accountno;
    form.value.balance = this.selectedAccount.balance;
    if(this.selectedAccount && this.selectedAccount.accountno){
      this.apiService.depositsavings(form.value).subscribe((account: Account)=>{
        console.log("Account updated" , account);
        this.apiService.readAccounts().subscribe((accounts: Account[])=>{
          this.accounts = accounts;
        })
      });
    }

  }

}

