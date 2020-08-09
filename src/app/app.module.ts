import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {RegistergroupComponent} from "./register/registergroup/registergroup.component";
import {MatMenuModule} from "@angular/material/menu";
import {AccountComponent} from "./account/account.component";
import {TransactionComponent} from "./transaction/transaction.component";
import {DepositComponent} from "./transaction/deposit/deposit.component";
import {DepositgroupComponet} from "./transaction/deposit/depositgroup/depositgroup.componet";
import {DepositshareComponent} from "./transaction/deposit/depositshare/depositshare.component";
import {WithdrawComponent} from "./transaction/withdraw/withdraw.component";
import {ViewaccountComponent} from "./account/viewaccount/viewaccount.component";
import {CreatecusComponent} from "./customer/createcus/createcus.component";
import {LoaninfoComponent} from "./loaninfo/loaninfo.component";
import {ViewgroupComponent} from "./account/viewaccount/viewgroup/viewgroup.component";
import {CustomerinfoComponent} from "./customerinfo/customerinfo.component";
import {CustdashboardComponent} from "./dashboard customer/custdashboard.component";
import {LoanComponent} from "./loan/loan.component";
import {CustomerloginComponent} from "./customer/customerlogin/customerlogin.component";
import {ViewloanComponent} from "./loan/viewloan/viewloan.component";
import {NotificationComponent} from "./notification/notification.component";
import {CreateloanComponent} from "./loan/createloan/createloan.component";
import {SearchsavComponent} from "./account/searchsavings/searchsav.component";
import {PayinstallmentComponent} from "./loan/payinstallment/payinstallment.component";
import {ViewbalanceComponent} from "./dashboard customer/viewbalance/viewbalance.component";
import {RequestloanComponent} from "./dashboard customer/requestloan/requestloan.component";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    RegistergroupComponent,
    AccountComponent,
    TransactionComponent,
    DepositComponent,
    DepositgroupComponet,
    DepositshareComponent,
    WithdrawComponent,
    ViewaccountComponent,
    CreatecusComponent,
    LoaninfoComponent,
    ViewgroupComponent,
    CustomerinfoComponent,
    CustdashboardComponent,
    LoanComponent,
    CustomerloginComponent,
    ViewloanComponent,
    NotificationComponent,
    CreateloanComponent,
    SearchsavComponent,
    PayinstallmentComponent,
    ViewbalanceComponent,
    RequestloanComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

