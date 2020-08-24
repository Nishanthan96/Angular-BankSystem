export class Creategp {
  public groupID : string;
  public accountno1: number;
  public accountno2: number;
  public accountno3:number;
  public accountno4:number;
  public accountno5:number;
  public balancegp:number;

  constructor(groupID:string,accountno1:number,accountno2: number,accountno3:number,accountno4:number,accountno5:number,balancegp:number) {
    this.groupID = groupID;
    this.accountno1 = accountno1;
    this.accountno2 = accountno2;
    this.accountno3 = accountno3;
    this.accountno4 = accountno4;
    this.accountno5 = accountno5;
    this.balancegp = balancegp;
  }
}
