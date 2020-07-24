<?php
include_once("database.php");
$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata))
{
$request = json_decode($postdata);
$usernamec = trim($request->usernamec);
$passwordc = trim($request->passwordc);
$accountno = trim($request->accountno);
$phone = trim($request->phone);
$sql = "INSERT INTO customerlog(usernamec,passwordc,accountno,phone) VALUES ('$usernamec','$passwordc','$accountno','$phone')";
if ($mysqli->query($sql) === TRUE) {
$authdata = [
'usernamec' => $usernamec,
'passwordc' => $passwordc,
'accountno' => $accountno,
'phone' => $phone,
'custID' => mysqli_insert_custID($mysqli)
];
echo json_encode($authdata);
}
}

?>
