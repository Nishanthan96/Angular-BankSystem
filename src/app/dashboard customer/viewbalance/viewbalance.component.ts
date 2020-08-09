import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {CreateSavings} from "../../createsavings";

import {ApiService} from "../../api.service";
import {Accountview} from "../../accountview";

@Component({
  selector: 'app-viewbalance',
  templateUrl: './viewbalance.component.html'
})

export class ViewbalanceComponent implements OnInit {
  accountviews: Accountview[];
  selectedAccount: Accountview = { accountno : null , customername: null, category: null, address: null, nic: null, dob: null, email: null, phone: null, balance: null,shareID:null,groupID:null}
  constructor(private apiService: ApiService) {

  }

  ngOnInit(): void {
    this.apiService.viewDetails().subscribe((accountviews: Accountview[])=>{
      this.accountviews = accountviews;
      console.log(this.accountviews);
    })

  }
  details(form){
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
      this.apiService.updateAccount(form.value).subscribe((accountview: Accountview)=>{
        console.log("Account updated" , accountview);
        this.apiService.viewDetails().subscribe((accountviews: Accountview[])=>{
          this.accountviews = accountviews;
        })
      });
    }

  }
  selectAccount(accountview: Accountview) {
    this.selectedAccount = accountview;
  }
  delete(accountno){
    this.apiService.deleteAccount(accountno).subscribe((accountview: Accountview)=>{
      console.log("Account deleted, ", accountview);
    });
  }
}
