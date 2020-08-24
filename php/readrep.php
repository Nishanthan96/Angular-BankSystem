<?php
require 'database.php';
$transaction = [];

$sql = "SELECT * FROM transaction";
if($result = $mysqli->query($sql))
{
	$i = 0;
	while($row = $result->fetch_assoc())
	{
		$transaction[$i]['accountno'] = $row['accountno'];
		$transaction[$i]['type'] = $row['type'];
		$transaction[$i]['amount'] = $row['amount'];
		$transaction[$i]['datetrans'] = $row['datetrans'];
		$i++;
	}
	echo json_encode($transaction);
}
else
{
	http_response_code(404);
}
