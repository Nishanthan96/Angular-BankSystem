<?php
require 'database.php';
$groupID = ($_GET['groupID'] !== null && (int)$_GET['groupID'] > 0)? mysqli_real_escape_string($mysqli, (int)$_GET['groupID']) : false;
if(!$groupID)
{
	return http_response_code(400);
}

$sql = "DELETE FROM groupacc WHERE groupID =$groupID";
if($mysqli->query($sql))
{
	http_response_code(204);
}
else
{
	return http_response_code(422);
}
