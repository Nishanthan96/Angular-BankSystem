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
  constructor(private fb: FormBuilder,private dataService: ApiService,private router:Router) {
    this.angFormcreatecus = this.fb.group({
      usernamec: ['', [Validators.required,Validators.minLength(1), Validators.email]],
      passwordc: ['', Validators.required],
      accountno: ['', Validators.required],
      phone: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  postdata(angformcreatecus1)
  {
    this.dataService.createcus(angformcreatecus1.value.usernamec,angformcreatecus1.value.passwordc,angformcreatecus1.value.accountno,angformcreatecus1.value.phone)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['login']);
        },

        error => {
        });
  }

  get usernamec() { return this.angFormcreatecus.get('usernamec'); }
  get passwordc() { return this.angFormcreatecus.get('passwordc'); }
  get accountno() { return this.angFormcreatecus.get('accountno'); }
  get phone() { return this.angFormcreatecus.get('phone'); }

}
