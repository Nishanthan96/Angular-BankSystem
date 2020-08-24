<?php
include_once("database.php");
$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata))
{
$request = json_decode($postdata);
$groupID = trim($request->groupID);
$accountno1 = trim($request->accountno1);
$accountno2 = trim($request->accountno2);
$accountno3 = trim($request->accountno3);
$accountno4 = trim($request->accountno4);
$accountno5 = trim($request->accountno5);
$balancegp = trim($request->balancegp);
$sql = "INSERT INTO groupacc(groupID,accountno1,accountno2,accountno3,accountno4,accountno5,balancegp) VALUES ('$groupID','$accountno1','$accountno2','$accountno3','$accountno4','$accountno5','$balancegp')";
if ($mysqli->query($sql) === TRUE) {
$authdata = [
'groupID' => $groupID,
'accountno1' => $accountno1,
'accountno2' => $accountno2,
'accountno3' => $accountno3,
'accountno4' => $accountno4,
'accountno5' => $accountno5,
'balancegp' => $balancegp

];
echo json_encode($authdata);
}
}

?>
