<?php
require 'database.php';
$tansactiongp = [];

$sql = "SELECT * FROM tansactiongp";
if($result = $mysqli->query($sql))
{
	$i = 0;
	while($row = $result->fetch_assoc())
	{
		$tansactiongp[$i]['groupID'] = $row['groupID'];
		$tansactiongp[$i]['transactionmadeby'] = $row['transactionmadeby'];
		$tansactiongp[$i]['type'] = $row['date'];
		$tansactiongp[$i]['date'] = $row['date'];
		$tansactiongp[$i]['amount'] = $row['amount'];
		$i++;
	}
	echo json_encode($tansactiongp);
}
else
{
	http_response_code(404);
}
