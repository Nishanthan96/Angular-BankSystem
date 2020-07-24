export class Createcus {
  public custID: number;
  public usernamec: string;
  public passwordc:string;
  public accountno:number;
  public phone:number;


  constructor(custID:number,usernamec: string,passwordc:string,accountno:number,phone:number) {
    this.custID = custID;
    this.usernamec = usernamec;
    this.passwordc = passwordc;
    this.accountno = accountno;
    this.phone = phone;
  }
}
