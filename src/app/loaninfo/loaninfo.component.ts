import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";

@Component({
  selector: 'app-loaninfo',
  templateUrl: './loaninfo.component.html'
})

export class LoaninfoComponent implements OnInit {

la = 0;
int = 0;
dm= 0;
valid: boolean = false
  constructor() { }

  ngOnInit(): void {
  }
  get installment(){
    return ((this.la*(this.int/100))*((1+this.int/100)*this.dm))/((1+0.08)*(this.dm-1));
    this.valid = true;
  }

}

