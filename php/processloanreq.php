<?php
require 'database.php';
$postdata = file_get_contents('php://input');

if(isset($postdata) && !empty($postdata))
{
	$request = json_decode($postdata,true);
	if (trim($request['reqno']) == '' || (int)$request['accountno'] < 0) {
		return http_response_code(400);
	}
	$reqno = mysqli_real_escape_string($mysqli, (int)$request['reqno']);
	$accountno = mysqli_real_escape_string($mysqli, trim($request['accountno']));
	$reqloantype = mysqli_real_escape_string($mysqli, (float)$request['reqloantype']);
	    	$reqloanamount = mysqli_real_escape_string($mysqli, (float)$request['reqloanamount']);

		$reqdate = mysqli_real_escape_string($mysqli, (int)$request['reqdate']);

	$sql = "UPDATE loanrequest SET status='Accepted' WHERE reqno= '$reqno'";


	if($mysqli->query($sql))
	{
		http_response_code(204);
	}
	else
	{
		return http_response_code(422);
	}
}

