<?php
require 'database.php';
$groupacc = [];

$sql = "SELECT * FROM groupacc";
if($result = $mysqli->query($sql))
{
	$i = 0;
	while($row = $result->fetch_assoc())
	{
		$groupacc[$i]['groupID'] = $row['groupID'];
		$groupacc[$i]['accountno1'] = $row['accountno1'];
		$groupacc[$i]['accountno2'] = $row['accountno2'];
		$groupacc[$i]['accountno3'] = $row['accountno3'];
		$groupacc[$i]['accountno4'] = $row['accountno4'];
		$groupacc[$i]['accountno5'] = $row['accountno5'];
		$groupacc[$i]['balancegp'] = $row['balancegp'];
		$i++;
	}
	echo json_encode($groupacc);
}
else
{
	http_response_code(404);
}
