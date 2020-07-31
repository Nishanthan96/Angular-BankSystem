<?php
require 'database.php';
$createshare = [];

$sql = "SELECT * FROM createshare";
if($result = $mysqli->query($sql))
{
	$i = 0;
	while($row = $result->fetch_assoc())
	{
		$groupacc[$i]['shareID'] = $row['shareID'];
		$groupacc[$i]['accountno'] = $row['accountno'];
		$groupacc[$i]['balanceshare'] = $row['balanceshare'];
		$i++;
	}
	echo json_encode($createshare);
}
else
{
	http_response_code(404);
}
