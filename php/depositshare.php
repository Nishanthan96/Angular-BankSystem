<?php
require 'database.php';
$postdata = file_get_contents('php://input');

if(isset($postdata) && !empty($postdata))
{
	$request = json_decode($postdata,true);
	if (trim($request['shareID']) == '' || (int)$request['balanceshare'] < 0) {
		return http_response_code(400);
	}

    $shareID = mysqli_real_escape_string($mysqli, $request['shareID']);
  	$balanceshare = mysqli_real_escape_string($mysqli, (int)$request['balanceshare']);

	$sql = "UPDATE createshare SET balanceshare = balanceshare + '$balanceshare'  WHERE shareID = '$shareID'";


	if($mysqli->query($sql))
	{
		http_response_code(204);
	}
	else
	{
		return http_response_code(422);
	}
}
