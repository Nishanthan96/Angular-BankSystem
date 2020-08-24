<?php
require 'database.php';
$createsavings = [];



$vb = "SELECT accountno FROM cuslogged ORDER BY loggedno DESC LIMIT 1"  ;
$aaa = mysqli_query($mysqli, $vb);
while($bbb = $aaa->fetch_assoc())
   $ccc = $bbb["accountno"];


$sql = "SELECT * FROM createsavings WHERE accountno = '$ccc'" ;


if($result = $mysqli->query($sql))
{
	$i = 0;
	while($row = $result->fetch_assoc())
	{
		$createsavings[$i]['accountno'] = $row['accountno'];
		$createsavings[$i]['customername'] = $row['customername'];
		$createsavings[$i]['category'] = $row['category'];
		$createsavings[$i]['address'] = $row['address'];
		$createsavings[$i]['nic'] = $row['nic'];
		$createsavings[$i]['dob'] = $row['dob'];
		$createsavings[$i]['email'] = $row['email'];
		$createsavings[$i]['phone'] = $row['phone'];
		$createsavings[$i]['balance'] = $row['balance'];
		$createsavings[$i]['shareID'] = $row['shareID'];
		$i++;
	}
	echo json_encode($createsavings);
}
else
{
	http_response_code(404);
}
