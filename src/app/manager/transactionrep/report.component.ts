import {Component, OnInit} from "@angular/core";

import {ViewgpRep, ViewRep} from "../../accreport";
import {ApiService} from "../../api.service";
import {ViewGpAcc} from "../../accountgroup";


@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})

export class ReportComponent implements OnInit {

  valid: boolean = false;
  invalid: boolean = false;

  viewreps: ViewRep[];
  viewgpreps: ViewgpRep[];

  selectedAccount: ViewRep = { accountno : null , type: null, amount: null, datetrans: null}
  selectedgpAccount: ViewgpRep = { groupID : null , transactionmadeby: null, type: null, date: null,amount:null}

  constructor(private apiService: ApiService,private apiservice:ApiService) {

  }
  ngOnInit(): void {
    this.apiService.readReport().subscribe((viewreps: ViewRep[])=>{
      this.viewreps = viewreps;
      console.log(this.viewreps);
    })
    this.apiservice.readgpReport().subscribe((viewgpreps: ViewgpRep[])=>{
      this.viewgpreps = viewgpreps;
      console.log(this.viewgpreps);
    })
  }
  UpdateRep(form){
    form.value.accountno = this.selectedAccount.accountno;
    form.value.type= this.selectedAccount.type;
    form.value.amount = this.selectedAccount.amount;
    form.value.datetrans = this.selectedAccount.datetrans;

    if(this.selectedAccount && this.selectedAccount.accountno){
      this.apiService.updateRep(form.value).subscribe((viewrep: ViewRep)=>{
        this.valid = true;
        this.invalid = false;
        this.apiService.readReport().subscribe((viewreps: ViewRep[])=>{
          this.viewreps = viewreps;
        })
      });
    }

  }
  UpdategpRep(form){
    form.value.groupID = this.selectedgpAccount.groupID;
    form.value.transactionmadeby = this.selectedgpAccount.transactionmadeby;
    form.value.type= this.selectedgpAccount.type;
    form.value.date = this.selectedgpAccount.date;
    form.value.amount = this.selectedgpAccount.amount;


    if(this.selectedgpAccount && this.selectedgpAccount.groupID){
      this.apiservice.updategpRep(form.value).subscribe((viewgprep: ViewgpRep)=>{
        this.valid = true;
        this.invalid = false;
        this.apiservice.readgpReport().subscribe((viewgpreps: ViewgpRep[])=>{
          this.viewgpreps = viewgpreps;
        })
      });
    }

  }
  selectAccount(viewrep: ViewRep) {
    this.selectedAccount = viewrep;
  }
  selectgpAccount(viewgprep: ViewgpRep) {
    this.selectedgpAccount = viewgprep;
  }
  deleteRep(accountno){
    this.apiService.deleteRep(accountno).subscribe((viewrep: ViewRep)=>{
      this.valid = false;
      this.invalid = true;
    });
  }
  deletegpRep(groupID){
    this.apiservice.deletegpRep(groupID).subscribe((viewgprep: ViewgpRep)=>{
      this.valid = false;
      this.invalid = true;
    });
  }

}

