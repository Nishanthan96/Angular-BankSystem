<?php
require 'database.php';
$postdata = file_get_contents('php://input');

if(isset($postdata) && !empty($postdata))
{
	$request = json_decode($postdata,true);
	if (trim($request['groupID']) == '' || (float)$request['accountno1'] < 0) {
		return http_response_code(400);
	}
	$groupID = mysqli_real_escape_string($mysqli, (int)$request['groupID']);
	$accountno1 = mysqli_real_escape_string($mysqli, (int)($request['accountno1']));
	$accountno2 = mysqli_real_escape_string($mysqli, (int)$request['accountno2']);
	    	$accountno3 = mysqli_real_escape_string($mysqli, (int)$request['accountno3']);

		$accountno4 = mysqli_real_escape_string($mysqli, (int)$request['accountno4']);
  	$accountno5 = mysqli_real_escape_string($mysqli, (int)($request['accountno5']));
  	$balancegp = mysqli_real_escape_string($mysqli, (int)$request['balancegp']);

	$sql = "UPDATE groupacc SET accountno1='$accountno1',accountno2='$accountno2',accountno3='$accountno3', accountno4='$accountno4',accountno5='$accountno5',balancegp='$balancegp' WHERE groupID = '$groupID'";


	if($mysqli->query($sql))
	{
		http_response_code(204);
	}
	else
	{
		return http_response_code(422);
	}
}
