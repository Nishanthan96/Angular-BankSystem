<?php
require 'database.php';
$loanID = ($_GET['loanID'] !== null && (int)$_GET['loanID'] > 0)? mysqli_real_escape_string($mysqli, (int)$_GET['loanID']) : false;
if(!$loanID)
{
	return http_response_code(400);
}

$sql = "DELETE FROM loan WHERE loanID =$loanID";
if($mysqli->query($sql))
{
	http_response_code(204);
}
else
{
	return http_response_code(422);
}
