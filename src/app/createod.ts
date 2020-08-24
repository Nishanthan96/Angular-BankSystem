export class Loanod {
  public accountno: number;
  public loanID: string;
  public groupID:string;
  public odamount:number;


  constructor(accountno:number,loanID: string,groupID:string,odamount:number) {
    this.accountno = accountno;
    this.loanID = loanID;
    this.groupID = groupID;
    this.odamount = odamount;

  }
}
