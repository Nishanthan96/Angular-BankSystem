<?php
include_once("database.php");
$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata))
{
$request = json_decode($postdata);
$accountno1 = trim($request->accountno1);
$accountno2 = trim($request->accountno2);
$accountno3 = trim($request->accountno3);
$accountno4 = trim($request->accountno4);
$accountno5 = trim($request->accountno5);
$balancegp = trim($request->balancegp);
$sql = "INSERT INTO groupacc(accountno1,accountno2,accountno3,accountno4,accountno5,balancegp) VALUES ('$accountno1','$accountno2','$accountno3','$accountno4','$accountno5','$balancegp')";
if ($mysqli->query($sql) === TRUE) {
$authdata = [
'accountno1' => $accountno1,
'accountno2' => $accountno2,
'accountno3' => $accountno3,
'accountno4' => $accountno4,
'accountno5' => $accountno5,
'balancegp' => $balancegp,
'groupID' => mysqli_insert_groupID($mysqli)
];
echo json_encode($authdata);
}
}

?>
