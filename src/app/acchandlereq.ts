export class Handlereq {
  public reqno: number;
  public accountno: number;
  public reqloantype:string;
  public reqloanamount:string;
  public reqdate:string;

  constructor(reqno: number, accountno: number,reqloantype:string,reqloanamount:string,reqdate:string){


    this.accountno = accountno;
    this.reqno = reqno;
    this.reqloantype = reqloantype;
    this.reqloanamount = reqloanamount;
    this.reqdate = reqdate;


  }

}

