import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {ViewGpAcc} from "../../../accountgroup";
import {ApiService} from "../../../api.service";

@Component({
  selector: 'app-depositgroup',
  templateUrl: './depositgroup.component.html',

})

export class DepositgroupComponet implements OnInit {

  gpaccounts: ViewGpAcc[];
  selectedAccount: ViewGpAcc = { groupID : null , accountno1: null, accountno2: null, accountno3: null, accountno4: null, accountno5: null, balancegp: null}
  constructor(private apiService: ApiService) {

  }

  ngOnInit(): void {
    this.apiService.readGpAccount().subscribe((gpaccounts: ViewGpAcc[])=>{
      this.gpaccounts = gpaccounts;
      console.log(this.gpaccounts);
    })
  }
  depositamountgp(form){
    form.value.groupID = this.selectedAccount.groupID;

    form.value.balancegp = this.selectedAccount.balancegp;
    if(this.selectedAccount && this.selectedAccount.groupID){
      this.apiService.depositgroup(form.value).subscribe((gpaccount: ViewGpAcc)=>{
        console.log("Account updated" , gpaccount);
        this.apiService.readGpAccount().subscribe((gpaccounts: ViewGpAcc[])=>{
          this.gpaccounts = gpaccounts;
        })
      });
    }

  }

}
