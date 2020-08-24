import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ApiService} from "../../api.service";
import {Router} from "@angular/router";
import {first} from "rxjs/operators";

@Component({
  selector: 'app-registergroup',
  templateUrl: './registergroup.component.html',
  styleUrls: ['./registergroup.component.css']
})
export class RegistergroupComponent implements OnInit {
  angFormcreategp: FormGroup;
  valid: boolean = false;

  constructor(private fb: FormBuilder,private dataService: ApiService,private router:Router) {
    this.angFormcreategp = this.fb.group({
      groupID: ['', Validators.required],
      accountno1: ['', Validators.required],
      accountno2: ['', Validators.required],
      accountno3: ['', Validators.required],
      accountno4: ['', Validators.required],
      accountno5: ['', Validators.required],
      balancegp: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  postdata(angFormcreategp1)
  {
    this.dataService.creategp(angFormcreategp1.value.groupID,angFormcreategp1.value.accountno1,angFormcreategp1.value.accountno2,angFormcreategp1.value.accountno3,angFormcreategp1.value.accountno4,angFormcreategp1.value.accountno5,angFormcreategp1.value.balancegp)
      .pipe(first())
      .subscribe(
        data => {
          this.valid = true;
        },

        error => {
        });
  }

  get groupID() { return this.angFormcreategp.get('groupID'); }
  get accountno1() { return this.angFormcreategp.get('accountno1'); }
  get accountno2() { return this.angFormcreategp.get('accountno2'); }
  get accountno3() { return this.angFormcreategp.get('accountno3'); }
  get accountno4() { return this.angFormcreategp.get('accountno4'); }
  get accountno5() { return this.angFormcreategp.get('accountno5'); }
  get balancegp() { return this.angFormcreategp.get('balancegp'); }
}
