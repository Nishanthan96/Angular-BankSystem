<?php
require 'database.php';
$postdata = file_get_contents('php://input');

if(isset($postdata) && !empty($postdata))
{
	$request = json_decode($postdata,true);
	if (trim($request['accountno']) == '' || (float)$request['customername'] < 0) {
		return http_response_code(400);
	}
	$accountno = mysqli_real_escape_string($mysqli, (int)$request['accountno']);
	$customername = mysqli_real_escape_string($mysqli, trim($request['customername']));
	$category = mysqli_real_escape_string($mysqli, $request['category']);
	    	$address = mysqli_real_escape_string($mysqli, $request['address']);

		$nic = mysqli_real_escape_string($mysqli, (int)$request['nic']);
  	$dob = mysqli_real_escape_string($mysqli, trim($request['dob']));
  	$email = mysqli_real_escape_string($mysqli, $request['email']);
  		$phone = mysqli_real_escape_string($mysqli, (int)$request['phone']);
	$sql = "UPDATE createsavings SET customername='$customername',category='$category',address='$address', nic='$nic',dob='$dob',email='$email',phone='$phone'  WHERE accountno = '$accountno'";


	if($mysqli->query($sql))
	{
		http_response_code(204);
	}
	else
	{
		return http_response_code(422);
	}
}
