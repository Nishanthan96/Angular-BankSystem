export class Createcus {
  public custID: number;
  public usernamec: string;
  public passwordc:string;
  public accountno:number;
  public phone:number;
  public email:string;
  public dob:string;



  constructor(custID:number,usernamec: string,passwordc:string,accountno:number,phone:number,email:string,dob:string) {
    this.custID = custID;
    this.usernamec = usernamec;
    this.passwordc = passwordc;
    this.accountno = accountno;
    this.phone = phone;
    this.email = email;
    this.dob = dob;
  }
}
