<?php
include_once("database.php");
$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata))
{
$request = json_decode($postdata);
$accountno = trim($request->accountno);
$balanceshare = trim($request->balanceshare);
$sql = "INSERT INTO createshare(balanceshare,accountno) VALUES ('$balanceshare','$accountno')";
if ($mysqli->query($sql) === TRUE) {
$authdata = [
'balanceshare' => $balanceshare,
'accountno' => $accountno,
'shareID' => mysqli_insert_shareID($mysqli)
];
echo json_encode($authdata);
}
}

?>
