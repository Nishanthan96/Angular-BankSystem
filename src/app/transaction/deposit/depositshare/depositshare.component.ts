import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {ApiService} from "../../../api.service";
import {ViewShareAcc} from "../../../accountshare";

@Component({
  selector: 'app-depositshare',
  templateUrl: './depositshare.component.html',

})

export class DepositshareComponent implements OnInit {

  shareaccounts: ViewShareAcc[];
  selectedAccount: ViewShareAcc = { shareID : null , balanceshare: null, accountno: null}
  constructor(private apiService: ApiService) {

  }

  ngOnInit(): void {
    this.apiService.readShareAccount().subscribe((shareaccounts: ViewShareAcc[])=>{
      this.shareaccounts = shareaccounts;
      console.log(this.shareaccounts);
    })
  }
  depositamountshare(form){
    form.value.shareID = this.selectedAccount.shareID;

    form.value.balanceshare = this.selectedAccount.balanceshare;
    if(this.selectedAccount && this.selectedAccount.shareID){
      this.apiService.depositshare(form.value).subscribe((shareaccount: ViewShareAcc)=>{
        console.log("Account updated" , shareaccount);
        this.apiService.readShareAccount().subscribe((shareaccounts: ViewShareAcc[])=>{
          this.shareaccounts = shareaccounts;
        })
      });
    }

  }

}
