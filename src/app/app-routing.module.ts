import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthguardGuard } from './authguard.guard';
import {AccountComponent} from "./account/account.component";
import {RegistergroupComponent} from "./register/registergroup/registergroup.component";
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
import {LoanComponent} from "./loan/loan.component";
import {CustomerloginComponent} from "./customer/customerlogin/customerlogin.component";
import {CustdashboardComponent} from "./dashboard customer/custdashboard.component";
import {ViewloanComponent} from "./loan/viewloan/viewloan.component";
import {NotificationComponent} from "./notification/notification.component";
import {SearchsavComponent} from "./account/searchsavings/searchsav.component";
import {PayinstallmentComponent} from "./loan/payinstallment/payinstallment.component";
import {ViewbalanceComponent} from "./dashboard customer/viewbalance/viewbalance.component";
import {RequestloanComponent} from "./dashboard customer/requestloan/requestloan.component";
import {HandlereqComponent} from "./manager/handlerequest/handlereq.component";
import {CustviewloanComponent} from "./dashboard customer/viewloandetails/custviewloan.component";
import {MloginComponent} from "./manager/mlogin/mlogin.component";
import {BankinfoComponent} from "./bankinfo/bankinfo.component";
import {MgdashboardComponent} from "./manager/mgdashboard/mgdashboard.component";
import {LoaninstallComponent} from "./dashboard customer/loaninstall/loaninstall.component";
import {ReportComponent} from "./manager/transactionrep/report.component";


const routes: Routes = [
{ path: '', component: LoginComponent },
{ path: 'login', component: LoginComponent },
{ path: 'home', component: HomeComponent },
{ path: 'registration', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent,canActivate: [AuthguardGuard] },
  { path: 'account', component: AccountComponent },
  { path: 'registergroup', component: RegistergroupComponent },
  {path: 'transaction', component: TransactionComponent},
  {path:'deposit', component:DepositComponent},
  {path:'depositgroup',component:DepositgroupComponet},
  {path:'depositshare',component:DepositshareComponent},
  {path:'withdraw',component:WithdrawComponent},
  {path:'viewaccount',component:ViewaccountComponent},
  {path:'createcus', component:CreatecusComponent},
  {path:'loaninfo',component:LoaninfoComponent},
  {path:'viewgroup',component:ViewgroupComponent},
  {path:'custinfo',component:CustomerinfoComponent},
  {path:'loan', component:LoanComponent},
  {path:'customerlogin', component:CustomerloginComponent},
  {path:'custdash', component:CustdashboardComponent},
  {path:'viewloan', component:ViewloanComponent},
  {path:'notification',component:NotificationComponent},
  {path:'search', component:SearchsavComponent},
  {path:'payinstall', component:PayinstallmentComponent},
  {path:'viewbalance', component:ViewbalanceComponent},
  {path:'reqloan',component:RequestloanComponent},
  {path:'handlereq', component:HandlereqComponent},
  {path:'custviewloan', component:CustviewloanComponent},
  {path:'mlogin',component:MloginComponent},
  {path:'bankinfo', component:BankinfoComponent},
  {path:'mgdashboard', component:MgdashboardComponent},
  {path:'managerloan', component:LoaninstallComponent},
  {path:'report', component:ReportComponent}

]

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})

export class AppRoutingModule { }
