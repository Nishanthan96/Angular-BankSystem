import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {Account} from "../../account";
import {ApiService} from "../../api.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {first} from "rxjs/operators";

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html'
})

export class WithdrawComponent implements OnInit {
  accounts: Account[];
  angFormtransav: FormGroup;
  selectedAccount: Account = { accountno : null , customername: null, category: null, address: null, nic: null, dob: null, email: null, phone: null, balance: null,shareID:null,groupID:null}
  constructor(private fb: FormBuilder,private apiService: ApiService,private router:Router,private dataService: ApiService) {
    this.angFormtransav = this.fb.group({
      accountno: ['', Validators.required],

      amount: ['', Validators.required],
      datetrans: ['', Validators.required]
    });
  }


  ngOnInit(): void {
    this.apiService.readAccounts().subscribe((accounts: Account[])=>{
      this.accounts = accounts;
      console.log(this.accounts);
    })

  }
  postdata(angFormtransav1)
  {
    this.dataService.transactionsavw(angFormtransav1.value.accountno,angFormtransav1.value.amount,angFormtransav1.value.datetrans)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['login']);
        },

        error => {
        });
  }
  get accountno() { return this.angFormtransav.get('accountno'); }
  get amount() { return this.angFormtransav.get('amount'); }
  get datetrans() { return this.angFormtransav.get('datetrans'); }


  withdrawamount(form){
    form.value.accountno = this.selectedAccount.accountno;
    form.value.balance = this.selectedAccount.balance;
    if(this.selectedAccount && this.selectedAccount.accountno){
      this.apiService.withdrawsavings(form.value).subscribe((account: Account)=>{
        console.log("Account updated" , account);
        this.apiService.readAccounts().subscribe((accounts: Account[])=>{
          this.accounts = accounts;
        })
      });
    }

  }

}
