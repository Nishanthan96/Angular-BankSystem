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

    	$balance = mysqli_real_escape_string($mysqli, trim($request['balance']));

	$sql = "UPDATE createsavings SET balance=balance + '$balance'  WHERE accountno = '$accountno'";


	if($mysqli->query($sql))
	{
		http_response_code(204);
	}
	else
	{
		return http_response_code(422);
	}
}
