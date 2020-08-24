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
	$loantype = mysqli_real_escape_string($mysqli, $request['loantype']);
	    	$loanamount = mysqli_real_escape_string($mysqli, (int)$request['loanamount']);

		$loanduration = mysqli_real_escape_string($mysqli, (int)$request['loanduration']);
  	$installment = mysqli_real_escape_string($mysqli, trim($request['installment']));
  	$createdate = mysqli_real_escape_string($mysqli, $request['createdate']);
  		$startdate = mysqli_real_escape_string($mysqli, $request['startdate']);
    	$nextdate = mysqli_real_escape_string($mysqli, trim($request['nextdate']));
	$sql = "UPDATE loan SET accountno='$accountno',startdate='$startdate',nextdate='$nextdate' WHERE loanID= '$loanID'";


	if($mysqli->query($sql))
	{
		http_response_code(204);
	}
	else
	{
		return http_response_code(422);
	}
}

