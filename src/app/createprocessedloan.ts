export class Proceedreq {
  public reqno: number;
  public accountno: number;
  public reqloantype:string;
  public reqloanamount:number;
  public reqdate:string;



  constructor(reqno:number,accountno: number,reqloantype:string,reqloanamount:number,reqdate) {
    this.reqno = reqno;
    this.accountno = accountno;
    this.reqloantype = reqloantype;
    this.reqloanamount = reqloanamount;
    this.reqdate = reqdate;

  }
}
