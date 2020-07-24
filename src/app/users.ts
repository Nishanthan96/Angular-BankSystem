export class Users {
public empID: number;
public usernamee: string;
public epassword:string;


constructor(empID:number,usernamee: string,epassword:string) {
this.empID = empID;
this.usernamee = usernamee;
this.epassword = epassword;

}
}
export class CUsers {
  public custID: number;
  public usernamec: string;
  public passwordc: string;


  constructor(empID: number, usernamec: string, passwordc: string) {
    this.custID = empID;
    this.usernamec = usernamec;
    this.passwordc = passwordc;

  }
}
