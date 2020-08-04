export class CreateSavings {
  public accountno: number;
  public customername: string;
  public category:string;
  public address:string;
  public dob:string;
  public nic:string;
  public email:string;
  public phone:number;
  public balance:number;
  public shareID:number

  constructor(accountno:number,customername: string,category:string,address:string,dob:string,nic:string,email:string,phone:number,balance:number,shareID:number) {
    this.accountno = accountno;
    this.customername = customername;
    this.category = category;
    this.address = address;
    this.dob = dob;
    this.nic = nic;
    this.email = email;
    this.phone = phone;
    this.balance = balance;
    this.shareID = shareID;
  }
}
