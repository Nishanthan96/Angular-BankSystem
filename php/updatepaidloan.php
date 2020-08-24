<?php
require 'database.php';
$postdata = file_get_contents('php://input');

if(isset($postdata) && !empty($postdata))
{
	$request = json_decode($postdata,true);
	if (trim($request['loanID']) == '' || (float)$request['accountno'] < 0) {
		return http_response_code(400);
	}
	$accountno = mysqli_real_escape_string($mysqli, (int)$request['accountno']);
	$loanID = mysqli_real_escape_string($mysqli, trim($request['loanID']));
	    	$payamount = mysqli_real_escape_string($mysqli, (int)$request['payamount']);

		$remainingmonths = mysqli_real_escape_string($mysqli, (int)$request['remainingmonths']);
    	$nextpaydate = mysqli_real_escape_string($mysqli, trim($request['nextpaydate']));
	$sql = "UPDATE paidinstallment SET accountno='$accountno' WHERE loanID= '$loanID'";


	if($mysqli->query($sql))
	{
		http_response_code(204);
	}
	else
	{
		return http_response_code(422);
	}
}

