import {Component, OnInit} from "@angular/core";
import {ApiService} from "../../../api.service";
import {ViewGpAcc} from "../../../accountgroup";


@Component({
  selector: 'app-viewgroup',
  templateUrl: './viewgroup.component.html',
  styleUrls: ['./viewgroup.component.css']
})

export class ViewgroupComponent implements OnInit {

  valid: boolean = false;
  invalid: boolean = false;

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
  UpdateAccount(form){
    form.value.groupID = this.selectedAccount.groupID;
    form.value.accountno1= this.selectedAccount.accountno1;
    form.value.accountno2 = this.selectedAccount.accountno2;
    form.value.accountno3 = this.selectedAccount.accountno3;
    form.value.accountno4 = this.selectedAccount.accountno4;
    form.value.accountno5 = this.selectedAccount.accountno5;
    form.value.balancegp = this.selectedAccount.balancegp;
    if(this.selectedAccount && this.selectedAccount.accountno1){
      this.apiService.updateGpAccount(form.value).subscribe((gpaccount: ViewGpAcc)=>{
        this.valid = true;
        this.invalid = false;
        this.apiService.readGpAccount().subscribe((gpaccounts: ViewGpAcc[])=>{
          this.gpaccounts = gpaccounts;
        })
      });
    }

  }
  selectAccount(gpaccount: ViewGpAcc) {
    this.selectedAccount = gpaccount;
  }
  deleteGpAccount(accountno1){
    this.apiService.deleteGpAccount(accountno1).subscribe((groupaccount: ViewGpAcc)=>{
      this.valid = false;
      this.invalid = true;
    });
  }

}

