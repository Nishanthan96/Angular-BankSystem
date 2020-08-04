//(P x I) x ((1 + r)n)/ (t x ((1 + r)n)- 1)
<?php
include_once("database.php");
$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata))
{
$request = json_decode($postdata);
$accountno = trim($request->accountno);
$loanID = trim($request->loanID);
$loantype = trim($request->loantype);
$loanamount = trim($request->loanamount);
$loanduration = trim($request->loanduration);
$createdate = trim($request->createdate);
$startdate = trim($request->startdate);
$nextdate = trim($request->nextdate);

$installment = (($loanamount*(10/100))*((1+0.08)*$loanduration))/((1+0.08)*($loanduration-1));

$sql = "INSERT INTO loan(accountno,loanID,loantype,loanamount,loanduration,installment,createdate,startdate,nextdate) VALUES ('$accountno','$loanID','$loantype','$loanamount','$loanduration','$installment','$createdate','$startdate','$nextdate')";
if ($mysqli->query($sql) === TRUE) {
$authdata = [
'accountno' => $accountno,
'loanID' => $loanID,
'loantype' => $loantype,
'loanamount' => $loanamount,
'loanduration' => $loanduration,
'installment' => $installment,
'createdate' => $createdate,
'startdate' => $startdate,
'nextdate' => $nextdate
];
echo json_encode($authdata);
}
}

?>
