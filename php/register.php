<?php
include_once("database.php");
$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata))
{
$request = json_decode($postdata);
$customername = trim($request->customername);
$category = trim($request->category);
$address = trim($request->address);
$nic = trim($request->nic);
$dob = trim($request->dob);
$email = trim($request->email);
$phone = trim($request->phone);
$balance = trim($request->balance);
$shareID = trim($request->shareID);
$sql = "INSERT INTO createsavings(customername,category,address,nic,dob,email,phone,balance,shareID) VALUES ('$customername','$category','$address','$nic','$dob','$email','$phone','$balance','$shareID')";
if ($mysqli->query($sql) === TRUE) {
$authdata = [
'customername' => $name,
'category' => $category,
'address' => $email,
'nic' => $nic,
'dob' => $dob,
'email' => $email,
'phone' => $phone,
'balance' => $balance,
'shareID' => $shareID,
'accountno' => mysqli_insert_accountno($mysqli)
];
echo json_encode($authdata);
}
}

?>
