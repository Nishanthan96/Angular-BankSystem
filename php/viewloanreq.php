<?php
require 'database.php';
$loanrequest = [];

$sql = "SELECT * FROM loanrequest" ;
if($result = $mysqli->query($sql))
{
	$i = 0;
	while($row = $result->fetch_assoc())
	{
		$loanrequest[$i]['reqno'] = $row['reqno'];
		$loanrequest[$i]['accountno'] = $row['accountno'];
		$loanrequest[$i]['reqloantype'] = $row['reqloantype'];
		$loanrequest[$i]['reqloanamount'] = $row['reqloanamount'];
		$loanrequest[$i]['reqdate'] = $row['reqdate'];
		$i++;
	}
	echo json_encode($loanrequest);
}
else
{
	http_response_code(404);
}
