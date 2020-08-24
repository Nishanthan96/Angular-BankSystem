import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {ViewGpAcc} from "../../../accountgroup";
import {ApiService} from "../../../api.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {first} from "rxjs/operators";

@Component({
  selector: 'app-depositgroup',
  templateUrl: './depositgroup.component.html',

})

export class DepositgroupComponet implements OnInit {

  gpaccounts: ViewGpAcc[];
  angFormtransgp: FormGroup;
  selectedAccount: ViewGpAcc = { groupID : null , accountno1: null, accountno2: null, accountno3: null, accountno4: null, accountno5: null, balancegp: null}
  constructor(private fb: FormBuilder,private apiService: ApiService,private router:Router,private dataService: ApiService) {
    this.angFormtransgp = this.fb.group({
      groupID: ['', Validators.required],
      transgp: ['', Validators.required],

      accnodepgp: ['', Validators.required],
      ddate: ['', Validators.required]
    });

  }

  ngOnInit(): void {
    this.apiService.readGpAccount().subscribe((gpaccounts: ViewGpAcc[])=>{
      this.gpaccounts = gpaccounts;
      console.log(this.gpaccounts);
    })
  }
  postdata(angFormtransgp1)
  {
    this.dataService.transactionsgp(angFormtransgp1.value.groupID,angFormtransgp1.value.transgp,angFormtransgp1.value.accnodepgp,angFormtransgp1.value.ddate)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['/depositgroup']);
        },

        error => {
        });
  }

  get groupID() { return this.angFormtransgp.get('groupID'); }
  get transgp() { return this.angFormtransgp.get('transgp'); }
  get accnodepgp() { return this.angFormtransgp.get('accnodepgp'); }
  get ddate() { return this.angFormtransgp.get('ddate'); }



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
