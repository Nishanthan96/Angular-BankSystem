export class Accloan {
  public accountno: number;
  public loanID: string;
  public loantype:string;
  public loanamount:number;
  public loanduration:number;
  public createdate:string;
  public startdate:string;
  public nextdate:string;
  public installment:number;

}
export class LoanPay {
  public accountno: number;
  public loanID: string;
  public payamount:number;
  public remainingmonths:number;
  public nextpaydate:string;


}

