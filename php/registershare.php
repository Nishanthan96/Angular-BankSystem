<?php
include_once("database.php");
$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata))
{
$request = json_decode($postdata);
$shareID = trim($request->shareID);
$sql = "INSERT INTO createshare(shareID,balanceshare) VALUES ('$shareID','0')";
if ($mysqli->query($sql) === TRUE) {
$authdata = [
'shareID' => $shareID,
'balanceshare' => 0
];
echo json_encode($authdata);
}
}

?>
