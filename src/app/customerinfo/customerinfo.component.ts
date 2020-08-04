import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {ApiService} from "../api.service";
import {Account} from "../account";


@Component({
  selector: 'app-customerinfo',
  templateUrl: './customerinfo.component.html',
  styleUrls: ['./customerinfo.component.css']
})

export class CustomerinfoComponent implements OnInit {
  accounts: Account[];
  selectedAccount: Account = { accountno : null , customername: null, category: null, address: null, nic: null, dob: null, email: null, phone: null, balance: null,shareID: null,groupID:null}
  constructor(private apiService: ApiService) {

  }

  ngOnInit(): void {
    this.apiService.readCustomer().subscribe((accounts: Account[])=>{
      this.accounts = accounts;
      console.log(this.accounts);
    })

  }
  UpdateCust(form){
    form.value.accountno = this.selectedAccount.accountno;
    form.value.customername= this.selectedAccount.customername;
    form.value.category = this.selectedAccount.category;
    form.value.address = this.selectedAccount.address;
    form.value.nic = this.selectedAccount.nic;
    form.value.dob = this.selectedAccount.dob;
    form.value.email = this.selectedAccount.email;
    form.value.phone = this.selectedAccount.phone;
    form.value.balance = this.selectedAccount.balance;
    if(this.selectedAccount && this.selectedAccount.accountno){
      this.apiService.updateCustomer(form.value).subscribe((account: Account)=>{
        console.log("Account updated" , account);
        this.apiService.readCustomer().subscribe((accounts: Account[])=>{
          this.accounts = accounts;
        })
      });
    }

  }
  selectCustomer(account: Account) {
    this.selectedAccount = account;
  }
  deleteCustomer(accountno){
    this.apiService.deleteCustomer(accountno).subscribe((account: Account)=>{
      console.log("Account deleted, ", account);
    });
  }
}
