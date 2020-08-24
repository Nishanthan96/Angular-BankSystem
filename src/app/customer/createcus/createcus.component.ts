import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ApiService} from "../../api.service";
import {first} from "rxjs/operators";

@Component({
  selector: 'app-createcus',
  templateUrl: './createcus.component.html'
})

export class CreatecusComponent implements OnInit {
  angFormcreatecus: FormGroup;
  invalid: boolean = false;
  valid: boolean = false;
  constructor(private fb: FormBuilder,private dataService: ApiService,private router:Router) {
    this.angFormcreatecus = this.fb.group({
      usernamec: ['', [Validators.required,Validators.minLength(1)]],
      passwordc: ['', Validators.required],
      accountno: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required],
      dob: ['', Validators.required],
    });
  }

  ngOnInit() {
  }

  postdata(angformcreatecus1)
  {
    this.dataService.createcus(angformcreatecus1.value.usernamec,angformcreatecus1.value.passwordc,angformcreatecus1.value.accountno,angformcreatecus1.value.phone,angformcreatecus1.value.email,angformcreatecus1.value.dob)
      .pipe(first())
      .subscribe(
        data => {
          this.valid = true;
          this.invalid = false;
        },

        error => {this.invalid = true; this.valid = false
        });
  }

  get usernamec() { return this.angFormcreatecus.get('usernamec'); }
  get passwordc() { return this.angFormcreatecus.get('passwordc'); }
  get accountno() { return this.angFormcreatecus.get('accountno'); }
  get phone() { return this.angFormcreatecus.get('phone'); }
  get email() { return this.angFormcreatecus.get('email'); }
  get dob() { return this.angFormcreatecus.get('dob'); }
}
