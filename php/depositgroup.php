<?php
require 'database.php';
$postdata = file_get_contents('php://input');

if(isset($postdata) && !empty($postdata))
{
	$request = json_decode($postdata,true);
	if (trim($request['groupID']) == '' || (float)$request['accountno1'] < 0) {
		return http_response_code(400);
	}

    $groupID = mysqli_real_escape_string($mysqli, $request['groupID']);
  	$balancegp = mysqli_real_escape_string($mysqli, (int)$request['balancegp']);

	$sql = "UPDATE groupacc SET balancegp = balancegp + '$balancegp'  WHERE groupID = '$groupID'";



	if($mysqli->query($sql))
	{
		http_response_code(204);
	}
	else
	{
		return http_response_code(422);
	}
}
