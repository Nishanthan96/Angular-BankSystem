<?php
require 'database.php';
$reqno = ($_GET['reqno'] !== null && (int)$_GET['reqno'] > 0)? mysqli_real_escape_string($mysqli, (int)$_GET['reqno']) : false;
if(!$reqno)
{
	return http_response_code(400);
}

$sql = "DELETE FROM loanrequest WHERE reqno =$reqno";
if($mysqli->query($sql))
{
	http_response_code(204);
}
else
{
	return http_response_code(422);
}
