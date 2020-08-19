import { Injectable, Output, EventEmitter } from '@angular/core';
import {catchError, map, tap} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import {CreateSavings} from "./createsavings";

import {Observable, of} from "rxjs";
import {Account} from "./account";
import {CUsers, Users} from "./users";
import {ViewGpAcc} from "./accountgroup";
import {ViewShareAcc} from "./accountshare";
import {Accloan} from "./accloan";
import {MessageService} from "./message.service";
import {Payloan} from "./install";
import {Accountview} from "./accountview";
import {Accloanreq} from "./accloanreq";
import {Handlereq} from "./acchandlereq";
import {Proceedreq} from "./createprocessedloan";



@Injectable({
providedIn: 'root'
})

export class ApiService {
  PHP_API_SERVER = "http://localhost/banksql/php";
redirectUrl: string;
baseUrl:string = "http://localhost/banksql/php";
  private http: HttpClient;


@Output() getLoggedInName: EventEmitter<any> = new EventEmitter();
constructor(private httpClient : HttpClient, private messageService: MessageService) { }

  readAccounts(): Observable<Account[]>{
    return this.httpClient.get<Account[]>(`${this.PHP_API_SERVER}/index.php`);
  }//
  viewDetails(): Observable<Accountview[]>{
    return this.httpClient.get<Accountview[]>(`${this.PHP_API_SERVER}/viewbalance.php`);
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
  readLoan(): Observable<Accloan[]>{
    return this.httpClient.get<Accloan[]>(`${this.PHP_API_SERVER}/readloan.php`);
  }
  viewRequests(): Observable<Handlereq[]>{
    return this.httpClient.get<Handlereq[]>(`${this.PHP_API_SERVER}/viewloanreq.php`);
  }
  processReq(handlereqs: Handlereq){
    return this.httpClient.put<Handlereq>(`${this.PHP_API_SERVER}/processloanreq.php`, handlereqs);
  }
  deleteRequest(reqno: number){
    return this.httpClient.delete<Handlereq>(`${this.PHP_API_SERVER}/deleteloanreq.php/?reqno=${reqno}`);
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
  updateLoan(accloan: Accloan){
    return this.httpClient.put<Accloan>(`${this.PHP_API_SERVER}/updateloan.php`, accloan);
  }
  deleteLoan(loanID: string){
    return this.httpClient.delete<Accloan>(`${this.PHP_API_SERVER}/deleteloan.php/?loanID=${loanID}`);
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
  public custlogin(usernamec, passwordc) {
    alert(usernamec)
    return this.httpClient.post<any>(this.baseUrl + '/clogin.php', { usernamec, passwordc })
      .pipe(map(CUsers => {
        this.setToken(CUsers[0].name);
        this.getLoggedInName.emit(true);
        return CUsers;
      }));
  }



public userregistration(customername, category,address,dob,nic,email,phone,balance,shareID) {
return this.httpClient.post<any>(this.baseUrl + '/register.php', { customername,category, address,dob,nic,email,phone,balance,shareID })
.pipe(map(CreateSavings => {
return CreateSavings ;
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
  public loansave(accountno, loanID,loantype,loanamount,loanduration,createdate,startdate,nextdate) {
    return this.httpClient.post<any>(this.baseUrl + '/loan.php', { accountno,loanID, loantype,loanamount,loanduration,createdate,startdate,nextdate })
      .pipe(map(Loan => {
        return Loan;
      }));
  }
  public payloan(accountno, loanID,remainingmonths,payamount,nextpaydate) {
    return this.httpClient.post<any>(this.baseUrl + '/payinstallment.php', { accountno,loanID, remainingmonths,payamount,nextpaydate })
      .pipe(map( Payloan => {
        return Payloan ;
      }));
  }
  public reqloan(accountno, reqloantype,reqloanamount,reqdate) {
    return this.httpClient.post<any>(this.baseUrl + '/reqloan.php', { accountno,reqloantype, reqloanamount,reqdate })
      .pipe(map( Accloanreq=> {
        return Accloanreq;
      }));
  }

  searchUsers(term: string): Observable<Account[]> {
    if (!term.trim()) {
      // if not search term, return empty user array.
      return of([]); //of(USERS) returns an Observable<User[]> that emits a single value, the array of mock users.
    }
    return this.httpClient.get<Account[]>(`${this.PHP_API_SERVER}/search.php/?customername=${term}`);
  }
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  private log(message: string) {
    this.messageService.add('ApiService: ' + message);
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
