<?php
require 'database.php';
$accountno1 = ($_GET['accountno1'] !== null && (int)$_GET['accountno1'] > 0)? mysqli_real_escape_string($mysqli, (int)$_GET['accountno1']) : false;
if(!$accountno1)
{
	return http_response_code(400);
}

$sql = "DELETE FROM groupacc WHERE accountno1 =$accountno1";
if($mysqli->query($sql))
{
	http_response_code(204);
}
else
{
	return http_response_code(422);
}
