export class Payloan {
  public accountno: number;
  public loanID: string;
  public remainingmonths:number;
  public payamount:number;
  public nextpaydate:string;


  constructor(accountno:number,loanID: string,remainingmoths:number,payamount:number,nextpaydate:string) {
    this.accountno = accountno;
    this.loanID = loanID;
    this.remainingmonths = remainingmoths;
    this.payamount = payamount;
    this.nextpaydate = nextpaydate;
  }
}
