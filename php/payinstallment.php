//(P x I) x ((1 + r)n)/ (t x ((1 + r)n)- 1)
<?php
include_once("database.php");
$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata))
{
$request = json_decode($postdata);
$accountno = trim($request->accountno);
$loanID = trim($request->loanID);
$remainingmonths = trim($request->remainingmonths);
$payamount = trim($request->payamount);
$nextpaydate = trim($request->nextpaydate);

$remainingmonths = $remainingmonths -1;
$nextpaydate = date('Y-m-d', strtotime("+1 months", strtotime($nextpaydate)));


$sql = "INSERT INTO paidinstallment(accountno,loanID,payamount,nextpaydate,remainingmonths) VALUES ('$accountno','$loanID','$payamount','$nextpaydate','$remainingmonths')";
if ($mysqli->query($sql) === TRUE) {
$authdata = [
'accountno' => $accountno,
'loanID' => $loanID,
'remainingmonths' => $remainingmonths,
'payamount' => $payamount,
'nextpaydate' => $nextpaydate,
'payamount' => $payamount
];
echo json_encode($authdata);
}
}

?>
