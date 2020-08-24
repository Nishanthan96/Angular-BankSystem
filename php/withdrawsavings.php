<?php
require 'database.php';
$postdata = file_get_contents('php://input');

if(isset($postdata) && !empty($postdata))
{
	$request = json_decode($postdata,true);
	if (trim($request['accountno']) == '' || $request['customername'] < 0) {
		return http_response_code(400);
	}
	$accountno = mysqli_real_escape_string($mysqli, (int)$request['accountno']);

    	$balance = mysqli_real_escape_string($mysqli, trim($request['balance']));


$w = "SELECT balance FROM createsavings WHERE accountno = '$accountno'"  ;
$ww = mysqli_query($mysqli, $w);
while($www = $ww->fetch_assoc())
   $balancein = $www["balance"];

if( $balancein > $balance )
{
	$sql = "UPDATE createsavings SET balance=balance - '$balance'  WHERE accountno = '$accountno'";

	if($mysqli->query($sql))
	{
		http_response_code(204);
	}
	else
	{
		return http_response_code(422);
	}
	}
}
