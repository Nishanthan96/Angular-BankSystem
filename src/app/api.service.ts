import { Injectable, Output, EventEmitter } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import {CreateSavings} from "./createsavings";

import {Observable} from "rxjs";
import {Account} from "./account";
import {Users} from "./users";
import {ViewGpAcc} from "./accountgroup";
import {ViewShareAcc} from "./accountshare";



@Injectable({
providedIn: 'root'
})

export class ApiService {
  PHP_API_SERVER = "http://localhost/banksql/php";
redirectUrl: string;
baseUrl:string = "http://localhost/banksql/php";
@Output() getLoggedInName: EventEmitter<any> = new EventEmitter();
constructor(private httpClient : HttpClient) { }

  readAccounts(): Observable<Account[]>{
    return this.httpClient.get<Account[]>(`${this.PHP_API_SERVER}/index.php`);
  }
  updateAccount(account: Account){
    return this.httpClient.put<Account>(`${this.PHP_API_SERVER}/update.php`, account);
  }
  deleteAccount(accountno: number){
    return this.httpClient.delete<Account>(`${this.PHP_API_SERVER}/delete.php/?accountno=${accountno}`);
  }

  readGpAccount(): Observable<ViewGpAcc[]>{
    return this.httpClient.get<ViewGpAcc[]>(`${this.PHP_API_SERVER}/readgroup.php`);
  }
  readShareAccount(): Observable<ViewShareAcc[]>{
    return this.httpClient.get<ViewShareAcc[]>(`${this.PHP_API_SERVER}/readshare.php`);
  }
  updateGpAccount(gpaccount: ViewGpAcc){
    return this.httpClient.put<ViewGpAcc>(`${this.PHP_API_SERVER}/updategroup.php`, gpaccount);
  }
  deleteGpAccount(groupID: number){
    return this.httpClient.delete<ViewGpAcc>(`${this.PHP_API_SERVER}/deletegroup.php/?groupID=${groupID}`);
  }
  readCustomer(): Observable<Account[]>{
    return this.httpClient.get<Account[]>(`${this.PHP_API_SERVER}/index.php`);
  }
  updateCustomer(account: Account){
    return this.httpClient.put<Account>(`${this.PHP_API_SERVER}/update.php`, account);
  }
  deleteCustomer(accountno: number){
    return this.httpClient.delete<Account>(`${this.PHP_API_SERVER}/delete.php/?accountno=${accountno}`);
  }
  depositsavings(account: Account){
    return this.httpClient.put<Account>(`${this.PHP_API_SERVER}/depositsavings.php`, account);
  }
  depositgroup(gpaccount: ViewGpAcc){
    return this.httpClient.put<ViewGpAcc>(`${this.PHP_API_SERVER}/depositgroup.php`, gpaccount);
  }
  depositshare(shareaccount: ViewShareAcc){
    return this.httpClient.put<ViewShareAcc>(`${this.PHP_API_SERVER}/depositshare.php`, shareaccount);
  }
  withdrawsavings(account: Account){
    return this.httpClient.put<Account>(`${this.PHP_API_SERVER}/withdrawsavings.php`, account);
  }






public userlogin(usernamee, epassword) {
alert(usernamee)
return this.httpClient.post<any>(this.baseUrl + '/login.php', { usernamee, epassword })
.pipe(map(Users => {
this.setToken(Users[0].name);
this.getLoggedInName.emit(true);
return Users;
}));
}
  public cuserlogin(usernamec, passwordc) {
    alert(usernamec)
    return this.httpClient.post<any>(this.baseUrl + '/clogin.php', { usernamec, passwordc })
      .pipe(map(CUsers => {
        this.setToken(CUsers[0].name);
        this.getLoggedInName.emit(true);
        return CUsers;
      }));
  }



public userregistration(customername, category,address,dob,nic,email,phone,balance) {
return this.httpClient.post<any>(this.baseUrl + '/register.php', { customername,category, address,dob,nic,email,phone,balance })
.pipe(map(CreateSavings => {
return CreateSavings;
}));
}

  public createcus(usernamec, passwordc,accountno,phone) {
    return this.httpClient.post<any>(this.baseUrl + '/createcus.php', { usernamec,passwordc, accountno,phone })
      .pipe(map(Createcus => {
        return Createcus;
      }));
  }


  public creategp(accountno1, accountno2,accountno3,accountno4,accountno5,balancegp) {
    return this.httpClient.post<any>(this.baseUrl + '/registergp.php', { accountno1, accountno2,accountno3,accountno4,accountno5,balancegp })
      .pipe(map(Creategp => {
        return Creategp;
      }));
  }
  public transactionsav(accountno,amount,datetrans) {
    return this.httpClient.post<any>(this.baseUrl + '/transactionsavings.php', { accountno,amount,datetrans })
      .pipe(map(Transactionsavings => {
        return Transactionsavings;
      }));
  }
  public transactionsavw(accountno,amount,datetrans) {
    return this.httpClient.post<any>(this.baseUrl + '/transactionsavingsw.php', { accountno,amount,datetrans })
      .pipe(map(Transactionsavings => {
        return Transactionsavings;
      }));
  }

//token
setToken(token: string) {
localStorage.setItem('token', token);
}
getToken() {
return localStorage.getItem('token');
}
deleteToken() {
localStorage.removeItem('token');
}
isLoggedIn() {
const usertoken = this.getToken();
if (usertoken != null) {
return true
}
return false;
}
}
