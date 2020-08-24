export class Loan {
  public accountno: number;
  public loanID: string;
  public loantype:string;
  public loanamount:number;
  public loanduration:number;
  public createdate:string;
  public startdate:string;
  public nextdate:string;


  constructor(accountno:number,loanID: string,loantype:string,loanamount:number,loanduration:number,createdate:string,startdate:string,nextdate:string) {
    this.accountno = accountno;
    this.loanID = loanID;
    this.loantype = loantype;
    this.loanamount = loanamount;
    this.loanduration = loanduration;
    this.createdate = createdate;
    this.startdate = startdate;
    this.nextdate = nextdate;
  }
}
