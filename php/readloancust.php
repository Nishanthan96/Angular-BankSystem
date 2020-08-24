<?php
require 'database.php';
$loan = [];

$vl = "SELECT accountno FROM cuslogged ORDER BY loggedno DESC LIMIT 1"  ;
$vilo = mysqli_query($mysqli, $vl);
while($vieloa = $vilo->fetch_assoc())
   $viewloan = $vieloa["accountno"];


$sql = "SELECT * FROM loan WHERE accountno = '$viewloan'" ;

if($result = $mysqli->query($sql))
{
	$i = 0;
	while($row = $result->fetch_assoc())
	{
		$loan[$i]['accountno'] = $row['accountno'];
		$loan[$i]['loanID'] = $row['loanID'];
		$loan[$i]['loantype'] = $row['loantype'];
		$loan[$i]['loanamount'] = $row['loanamount'];
		$loan[$i]['loanduration'] = $row['loanduration'];
		$loan[$i]['installment'] = $row['installment'];
		$loan[$i]['createdate'] = $row['createdate'];
		$loan[$i]['startdate'] = $row['startdate'];
		$loan[$i]['nextdate'] = $row['nextdate'];
		$i++;
	}
	echo json_encode($loan);
}
else
{
	http_response_code(404);
}
