<?php
require 'database.php';
$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata))
{
$request = json_decode($postdata);
$usernamec = mysqli_real_escape_string($mysqli, trim($request->usernamec));
$passwordc = mysqli_real_escape_string($mysqli, trim($request->passwordc));
$accountno = mysqli_real_escape_string($mysqli, trim((int)$request->accountno));
$phone = mysqli_real_escape_string($mysqli, trim((int)$request->phone));
$email = mysqli_real_escape_string($mysqli, trim($request->email));
$dob = mysqli_real_escape_string($mysqli, trim($request->dob));

$w = "SELECT phone FROM createsavings WHERE accountno = '$accountno'"  ;
$ww = mysqli_query($mysqli, $w);
while($www = $ww->fetch_assoc())
   $dbphone = (int)$www["phone"];


 if( $dbphone == $phone)
 $sql = "INSERT INTO customerlog(usernamec,passwordc,accountno,phone,email,dob) VALUES ('$usernamec','$passwordc','$accountno','$phone','$email','$dob')";

if ($mysqli->query($sql) === TRUE) {
$authdata = [
'usernamec' => $usernamec,
'passwordc' => $passwordc,
'accountno' => $accountno,
'phone' => $phone,
'email' => $email,
'dob' => $dob,
'custID' => mysqli_insert_custID($mysqli)
];
echo json_encode($authdata);
}
}
?>
