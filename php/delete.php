<?php
require 'database.php';
$accountno = ($_GET['accountno'] !== null && (int)$_GET['accountno'] > 0)? mysqli_real_escape_string($mysqli, (int)$_GET['accountno']) : false;
if(!$accountno)
{
	return http_response_code(400);
}

$sql = "DELETE FROM createsavings WHERE accountno =$accountno";
if($mysqli->query($sql))
{
	http_response_code(204);
}
else
{
	return http_response_code(422);
}
