<?php
include_once("database.php");
$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata))
{
$request = json_decode($postdata);
$groupID = trim($request->groupID);
$amount = trim($request->transgp);
$transactionmadeby = trim($request->accnodepgp);
$ddate = trim($request->ddate);

$sql = "INSERT INTO tansactiongp(groupID,transactionmadeby,type,date,amount) VALUES ('$groupID','$transactionmadeby','deposit','$ddate','$amount')";
if ($mysqli->query($sql) === TRUE) {
$authdata = [
'groupID' => $groupID,
'type' => deposit,
'amount' => $amount,
'date' => $ddate,
'transactionmadeby' => $transactionmadeby
];
echo json_encode($authdata);
}
}

?>
