<?php
include_once("database.php");
$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata))
{
$request = json_decode($postdata);
$type = trim($request->type);
$amount = trim($request->amount);
$datetrans = trim($request->datetrans);
$accountno = trim($request->accountno);
$sql = "INSERT INTO transaction(accountno,type,amount,datetrans) VALUES ('$accountno','withdraw','$amount','$datetrans')";
if ($mysqli->query($sql) === TRUE) {
$authdata = [
'accountno' => $accountno,
'type' => deposit,
'amount' => $amount,
'datetrans' => $datetrans
];
echo json_encode($authdata);
}
}

?>
